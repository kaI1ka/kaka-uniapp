import { defineManifestConfig } from '@uni-helper/vite-plugin-uni-manifest'

export default defineManifestConfig({
  'name': 'kaka-uniapp',
  'appid': '__UNI__2B8B0FB',
  'description': '',
  'versionName': '0.0.1',
  'versionCode': '100',
  'transformPx': false,
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0,
    },
    modules: {},
    distribute: {
      android: {
        permissions: [],
      },
      ios: {},
      sdkConfigs: {},
    },
  },
  'quickapp': {},
  'mp-weixin': {
    appid: '',
    setting: {
      urlCheck: false,
    },
    usingComponents: true,
  },
  'mp-alipay': {
    usingComponents: true,
  },
  'mp-baidu': {
    usingComponents: true,
  },
  'mp-toutiao': {
    usingComponents: true,
  },
  'uniStatistics': {
    enable: false,
  },
  'vueVersion': '3',
})
