import { isEmptyColor, parseColors } from '@iconify/tools/lib/colors/parse.js'
import { importDirectorySync } from '@iconify/tools/lib/import/directory.js'
import { runSVGO } from '@iconify/tools/lib/optimise/svgo.js'

/**
 * 生成自定义 svg
 * @param dir - 自定义 svg 目录
 * @param prefix - 自定义 svg 前缀
 */
export function generateCustomSvg(dir: string, prefix: string = 'xiangxing') {
  // importDirectorySync 会执行 cleanupSVG
  const svgSet = importDirectorySync(dir)

  svgSet.forEachSync((name, type) => {
    if (type !== 'icon')
      return

    const svg = svgSet.toSVG(name)
    if (!svg)
      return

    try {
      const uniqueColors = new Set<string>()
      parseColors(svg, {
        callback(_attr, colorStr, color) {
          if (color && !isEmptyColor(color))
            uniqueColors.add(colorStr.toLowerCase())
          return colorStr
        },
      })

      // 单色需要修改颜色为 currentColor
      if (uniqueColors.size <= 1) {
        parseColors(svg, {
          defaultColor: 'currentColor',
          callback(_attr, colorStr, color) {
            return !color || isEmptyColor(color) ? colorStr : 'currentColor'
          },
        })
      }

      // 压缩优化
      runSVGO(svg)
      svgSet.fromSVG(name, svg)
    }
    catch (error) {
      console.log(`Error parsing ${name}:`, error)
      svgSet.remove(name)
    }
  })

  return { [prefix]: svgSet.export() }
}
