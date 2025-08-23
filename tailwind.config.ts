import type { Config } from 'tailwindcss'
import { addDynamicIconSelectors } from '@iconify/tailwind'
import cssMacro from 'weapp-tailwindcss/css-macro'
import { isMp } from './platform'

export default {
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
  },
  // https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro
  plugins: [
    cssMacro({
      variantsMap: {
        'wx': 'MP-WEIXIN',
        '-wx': {
          value: 'MP-WEIXIN',
          negative: true,
        },
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
    addDynamicIconSelectors(),
  ],
  corePlugins: {
    // 小程序去使用 h5 的 preflight 和响应式 container 没有意义
    preflight: !isMp,
    container: !isMp,
  },
} as Config
