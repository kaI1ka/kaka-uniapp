import { icebreaker } from '@icebreakers/eslint-config'
import oxlint from 'eslint-plugin-oxlint'

export default icebreaker({
  vue: true,
  tailwindcss: true,
  weapp: true,
}, oxlint.configs['flat/all'])
