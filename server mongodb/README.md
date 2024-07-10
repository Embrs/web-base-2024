## Server API
```
1. nuxt.config.ts

nitro: {
  plugins: [
    '@/server/index'
  ]
},

2. server mongodb => server

3. .env, MONGODB_URI 設定

4. 配合 mongodb : docker compose up 
```
```
const res = await $fetch('/nuxt/demo/123');
console.log(res);
```