<script setup lang="ts">
const props = defineProps({
  error: {
    type: Object as () => { statusCode: Number, statusMessage: string },
    required: true
  }
});
const HandleError = () => {
  clearError({ redirect: '/' });
};

</script>

<template lang="pug">
#Error
  div(
    style="background-image: linear-gradient(135deg, #B31A24 35%, #6B1016 100%); color: #fff"
    class="text-white flex min-h-screen items-center"
  )
    div(class="mx-auto flex flex-wrap items-center p-4")
      div(class="w-full p-4 text-center ")
        div(class="text-[12rem] font-semibold") {{ props.error.statusCode }}

      div(class="w-full p-4 text-center")
        div( class="mb-4 text-3xl font-medium") {{ props.error.statusCode === 404? '找不到頁面':`噢不！發生了一些意外` }}
        div(class="mb-8 ") {{ props.error.message }}
        ElButton(
          type="button"
          class="border-white rounded border px-4 py-2"
          @click="HandleError"
         ) 回到首頁
</template>
