import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { generateCustomSvg } from './gen-custom-svg'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')
const svgDir = join(rootDir, 'src/assets/svg')
const outputPath = join(__dirname, 'custom-svg.collection.json')

const collection = generateCustomSvg(svgDir)
writeFileSync(outputPath, `${JSON.stringify(collection, null, 2)}\n`, 'utf8')
