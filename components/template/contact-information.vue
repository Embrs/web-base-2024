<script setup lang="ts">
// ContactInformation 聯絡資訊
// import connectInfo from '@/components/page/contact-us/data/connect-info';
const connectInfo = {
  fb: 'https://www.facebook.com/athenaadsgroup',
  ig: 'https://www.instagram.com/athena__ads?igshid=MzMyNGUyNmU2YQ==&utm_source=qr',
  yt: 'https://www.youtube.com/channel/UCbB04DoFuJnJ6tSDorEPkRw',
  line: 'https://page.line.me/205wvmwc?oat_content=url&openQrModal=true',
  104: 'https://www.104.com.tw/company/1a2x6blwep?jobsource=checkc',
  googleRating: 'https://www.google.com/search?hl=zh-TW&gl=tw&q=雅典娜數位整合行銷#lrd=0x34693dd1a80bbeb5:0x766cd394034d11ed,1', // 觀看評價
  googleWriteRating: 'https://www.google.com/search?hl=zh-TW&gl=tw&q=雅典娜數位整合行銷#lrd=0x34693dd1a80bbeb5:0x766cd394034d11ed,3', // 留下評價
  googleMap: 'https://maps.app.goo.gl/3nf4JqGcas4YAvN39',
  joinLine: 'https://lin.ee/PBNG6PG',
  des: '每週一至週五（國定假日除外），上午 9:30 至 下午6:00 雅典娜誠摯為您服務。',
  lineId: '@athenaads',
  eMail: 'info@athenaads.com',
  phone: '04-22230080',
  address: '40042 台中市中區三民路二段136號',
  addressImg: '/img/contact-us/addr.jpg'
};

// 資料 --------------------------------------------------------------------------------------------

// 接收事件 -----------------------------------------------------------------------------------------

// 流程 --------------------------------------------------------------------------------------------

// 函式 --------------------------------------------------------------------------------------------

// Ref 輸出 ----------------------------------------------------------------------------------------
</script>

<template lang="pug">
#ContactInformation
  .info-area
    NuxtLink(:to="connectInfo.joinLine" target="_blank" title="user line")
      .info-title LINE ID
      .info-content {{ connectInfo.lineId }}

    NuxtLink(:to="`mailto:${connectInfo.eMail}`" title="user e-mail")
      .info-title 聯絡信箱
      .info-content {{ connectInfo.eMail }}

    NuxtLink(:to="`tel:=+886-${connectInfo.phone.substring(1)}`" title="user phone")
      .info-title 聯絡電話
      .info-content {{ connectInfo.phone }}

    NuxtLink(:to="connectInfo.googleMap" target="_blank" title="user address")
      .info-title 地址
      .info-content {{ connectInfo.address }}
  .img-area
    ElImage.addr-img(:src="connectInfo.addressImg" alt="address" title="address")
</template>

<style lang="scss" scoped>
// 佈局 ----

// 組件 ----

</style>
