// https://nuxt.com/docs/api/configuration/nuxt-config
import { visualizer } from 'rollup-plugin-visualizer';
import version from './version';

const isDev = process.env.NODE_ENV === 'development';

const DevServerConfig = () => {
  if (!isDev) return {};
  return {
    proxy: {
      '/api': {
        target: process.env.NUXT_API_BASE as string,
        // target: 'http://pltf.org.tw',
        changeOrigin: true
      }
    }
  };
};

export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    asyncContext: true // https://nuxt.com/docs/guide/going-further/experimental-features#asynccontext
  },
  // 模塊注入
  modules: [
    // '@nuxtjs/i18n', // 目前壞了，等待官方修復 https://nuxt.com.cn/modules/i18n
    // '@nuxtjs/tailwindcss', // https://nuxt.com/modules/tailwindcss
    // '@vueuse/nuxt', // https://vueuse.org/nuxt/README.html
    '@element-plus/nuxt', // https://nuxt.com.cn/modules/element-plus
    '@pinia/nuxt', // https://ithelp.ithome.com.tw/articles/10302381
    '@nuxtjs/device', // const {} = useDevice(); // https://nuxt.com/modules/device
    '@nuxtjs/stylelint-module', // https://github.com/nuxt-modules/stylelint
    '@nuxtjs/color-mode', // https://color-mode.nuxtjs.org/
    'nuxt-icon', // https://nuxt.com/modules/icon
    '@nuxt/image', // https://image.nuxt.com/get-started/installation
    'nuxt-mail', // https://nuxt.com/modules/nuxt-mail
    '@nuxtjs/google-fonts', // https://google-fonts.nuxtjs.org/getting-started/setup
    '@unocss/nuxt' // https://nuxt.com/modules/unocss
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
    googleRecaptchaSiteKey: '',
    apiBase: '',
    public: {
      domainUrl: '',
      gtmId: '',
      gtagId: '',
      clarityCode: ''
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
    // baseURL: '/',
    buildAssetsDir: '/static/',
    pageTransition: { name: 'page', mode: 'out-in' },
    // meta
    head: {
      bodyAttrs: {
        // id: 'Body'
      },
      htmlAttrs: {
        lang: 'zh-Hant-TW',
        // @ts-ignore
        // version: process.env.npm_package_version as string
        version
      },
      // viewport: 'width=500, initial-scale=1',
      // title meta setting composables/mixins/mixin-init-meta.ts
      meta: [
        { name: 'format-detection', content: 'telephone=no,email=no,adress=no' } // 去除擾人自動偵測
        // { name: 'google-site-verification', content: '' }, // TODO google search console https://search.google.com/search-console?hl=zh-tw
      ],
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

  // gogole fonts ------------------------------------------------------
  googleFonts: {
    families: {
      'Noto+Sans+TC': true,
      'Noto+Sans': true
      // 'Noto+Sans+TC': [400, 600, 700],
      // 'Noto+Sans': [400, 700]
    }
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

  // Nuxt image圖片注入位置 ----------------------------------------------
  image: {
    dir: 'public'
  },

  // Nuxt mail ----------------------------------------------------------
  mail: {
    message: {
      to: process.env.NUXT_MAIL_MESSAGE_TO as string || ''
    },
    smtp: {
      host: process.env.NUXT_MAIL_SMTP_HOST as string || '',
      port: process.env.NUXT_MAIL_SMTP_PORT as string || '',
      auth: {
        user: process.env.NUXT_MAIL_SMTP_AUTH_USER as string || '',
        pass: process.env.NUXT_MAIL_SMTP_AUTH_PASS as string || ''
      }
    }
  },

  // Nuxt route 路由設定 ------------------------------------------------
  // https://nuxt.com/docs/guide/concepts/rendering#route-rules
  routeRules: {
    // '/': { prerender: true }, // 每一次建構時，都重新預渲染頁面 (透過 Builder)
    // '/blog/**': { static: true }, // 接收到一個請求時，頁面依照需求重新渲染頁面 (透過 Lambda)
    // '/products/**': { swr: 600 }, // 接收到一個請求時，10 分鐘的快取緩衝過期後，將會再次的重新取得資料進行渲染 (透過 Lambda)
    // '/admin/**': { ssr: false }, // 僅在客戶端渲染
    // '/react/*': { redirect: '/vue' }, // 路由重新導向規則
    // '/api/**': { cors: true } // 添加 CORS Header
  },

  // Nitro server ------------------------------------------------------
  nitro: {
    // experimental: {
    //   websocket: true
    // },
    plugins: [
      '@/server/index'
    ]
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
