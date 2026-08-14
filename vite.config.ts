import uni from '@dcloudio/vite-plugin-uni'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'
import UniKuRoot from '@uni-ku/root'
import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite'
import { weappTailwindcss } from 'weapp-tailwindcss/vite'
import postcssPlugins from './postcss.config'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const { default: AutoImport } = await import('unplugin-auto-import/vite')
  return {
    // uvtw 一定要放在 uni 后面
    plugins: [
      basicSsl(),
      UniKuRoot(),
      UniManifest(),
      uni(),
      weappTailwindcss({
        rem2rpx: {
          rootValue: (750 / 390) * 16,
          propList: ['*'],
          transformUnit: 'rpx',
        },
      }),
      AutoImport({
        imports: ['vue', 'uni-app', 'pinia'],
        dts: './src/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
      }),
    ],
    // 内联 postcss 注册 tailwindcss
    css: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  }
})
