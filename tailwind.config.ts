import type { Config } from 'tailwindcss'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'
import cssMacro from 'weapp-tailwindcss/css-macro'
import { isMp } from './platform'

const __dirname = dirname(fileURLToPath(import.meta.url))
const customSvgCollectionPath = join(__dirname, 'scripts/custom-svg.collection.json')

if (!existsSync(customSvgCollectionPath)) {
  throw new Error(
    '未生成自定义 svg 集合 json 文件，请先运行 `pnpm gen:svg` 生成',
  )
}

const customSvgCollection = JSON.parse(
  readFileSync(customSvgCollectionPath, 'utf8'),
) as ReturnType<typeof getIconCollections>

export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
      },
    },
  },
  // https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro
  plugins: [
    cssMacro({
      variantsMap: {
        // 定义多个条件判断
        // mv: {
        //   value: 'H5 || MP-WEIXIN'
        // },
        // '-mv': {
        //   value: 'H5 || MP-WEIXIN',
        //   negative: true
        // }
      },
    }),
    iconsPlugin({
      // 在这里可以选择你要使用的 icon, 更多详见:
      // https://icon-sets.iconify.design/
      collections: {
        ...getIconCollections([]),
        ...customSvgCollection,
      },
    }),
  ],
  corePlugins: {
    // 小程序去使用 h5 的 preflight 和响应式 container 没有意义
    preflight: !isMp,
    container: !isMp,
  },
} as Config
