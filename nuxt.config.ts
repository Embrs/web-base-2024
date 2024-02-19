// https://nuxt.com/docs/api/configuration/nuxt-config
import { visualizer } from 'rollup-plugin-visualizer';

const isDev = process.env.NODE_ENV === 'development';

const DevServerConfig = () => {
  if (isDev) return {
    proxy: {
      '/api': {
        target: process.env.NUXT_PUBLIC_API_BASE as string,
        // target: 'http://pltf.org.tw',
        changeOrigin: true
      }
    }
  };
  return {};
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  // 模塊注入
  modules: [
    // '@nuxtjs/i18n', // 目前壞了，等待官方修復 https://nuxt.com.cn/modules/i18n
    // '@zadigetvoltaire/nuxt-gtm', // GTM 要使用請解除 https://nuxt.com.cn/modules/nuxt-gtm
    '@element-plus/nuxt', // https://nuxt.com.cn/modules/element-plus
    '@pinia/nuxt', // https://ithelp.ithome.com.tw/articles/10302381
    '@nuxtjs/device', // const {} = useDevice(); // https://nuxt.com/modules/device
    '@nuxtjs/stylelint-module', // https://github.com/nuxt-modules/stylelint
    '@nuxtjs/tailwindcss', // https://nuxt.com/modules/tailwindcss
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
    'nuxt-icon', // https://nuxt.com/modules/icon
    '@nuxtjs/google-fonts' // https://google-fonts.nuxtjs.org/getting-started/setup
  ],
  // i18n: { // i18n 目前 8.0.0-rc.3 error 打包運行會 500
  //   vueI18n: './i18n/i18n.config.ts'
  // },
  devServer: {
    port: Number(process.env.NUXT_PORT || 3000),
    host: process.env.NUXT_HOST || '0.0.0.0'
    // https: { // Nuxt3Https 模式
    //   key: './https/localhost.key',
    //   cert: './https/localhost.crt'
    // }
  },
  // .env setting
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '',
      domainUrl: '',
      clarityOpen: '',
      clarityCode: '',
      testMode: isDev ? 'T' : 'F'
    }
  },
  // ts 設定
  typescript: {
    // strict: true // 使用 ts
  },
  // 全局組件設定
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true
      }
    ]
  },
  // composables utils 全局範圍設定
  imports: {
    dirs: [
      // 掃描 composables 目錄頂層
      'composables',
      // 掃描深度一層的特定檔案
      'composables/*/index.{ts,js,mjs,mts}',
      // 掃描整個 composables 目錄下的檔案
      'composables/**',
      // utils
      'utils/*/index.{ts,js,mjs,mts}'
    ]
  },

  app: {
    // baseUrl: '/',
    pageTransition: { name: 'page', mode: 'out-in' },
    // meta
    head: {
      bodyAttrs: {
        // id: 'AthenaBody'
      },
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        // @ts-ignore
        version: process.env.npm_package_version as string
      },
      // viewport: 'width=500, initial-scale=1',
      // title meta setting composables/mixins/mixin-init-meta.ts
      meta: [],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/favicon.svg' }
      ]
    }
  },

  // style -------------------------------------------------------------
  css: ['@/assets/styles/css/index.css'],
  stylelint: {
    lintOnStart: false, // 專案啟動時不自動檢查所有相關檔案
    chokidar: true // 監聽文件異動進行檢核（文件未列出此選項）
  },
  // google gtm --------------------------------------------------------
  gtm: {
    id: process.env.NUXT_PUBLIC_GTM_ID as string || '',
    enabled: true, // dev 可使用
    debug: true, // 可 debug (印 console.log)
    // loadScript: true, // 是否加載 GTM 腳本（如果您手動包含 GTM，但需要在組件中使用 dataLayer 功能，則很有幫助）（可選）
    trackOnNextTick: false // 是否在 Vue.nextTick 中調用 trackView
  },

  // gogole fonts ------------------------------------------------------
  googleFonts: {
    families: {
      'Noto+Sans+TC': [400, 600, 700],
      'Noto+Sans': [400, 700]
    }
  },

  // FB 像素 ------------------------------------------------------------
  // https://github.com/quando1910/nuxt3-meta-pixel
  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: process.env.NUXT_PUBLIC_FB_PIXELID_ID as string || '',
    autoPageView: true,
    disabled: false // 禁用像素
  },

  // colorMode 主題色 ---------------------------------------------------
  colorMode: {
    classSuffix: ''
  },

  // element plus setting ----------------------------------------------
  elementPlus: {
    icon: 'ElIcon',
    importStyle: 'scss'
    // themes: ['dark'] //暗黑模式
  },

  // vite ---------------------------------------------------------------
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/scss/index.scss" as *;
            @use "@/assets/styles/scss/element-plus/index.scss" as element;
          `
        }
      }
    },
    plugins: [
      visualizer({ // 打包分析 https://juejin.cn/post/7159410085460983839
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        filename: 'test.html', // 析圖產生的檔案名
        open: true // 如果存在本地服務端口，將在打包後自動展示
      })
    ],
    // axios CORS
    server: DevServerConfig(),
    build: {
      chunkSizeWarningLimit: 1500, // 分割檔案
      rollupOptions: {
        output: {
          manualChunks (id: any) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      }
    }
  }
});
