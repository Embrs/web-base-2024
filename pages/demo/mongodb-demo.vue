<script setup lang="ts">
// MongoDBDemo 請填寫功能描述👈

const params = ref({
  name: '',
  email: ''
});

const pageParams = ref({
  page: 1,
  size: 5
});

const tableInfo = ref<{list:{name: string, email: string}[], total: number}>({
  list: [],
  total: 0
});

const userId = ref('');

const ClickClear = () => {
  params.value.name = '';
  params.value.email = '';
  userId.value = '';
};

const ApiPost = async () => {
  const res: any = await $fetch('/nuxt/demo/user', { method: 'post', body: params.value });
  if (res.status.is_success) {
    ElMessage({ message: '新增成功', type: 'success' });
    userId.value = res.data?.id || '';
    ClickList();
    return;
  }
  ElMessage.error(res.status.message);
};

const ApiGet = async () => {
  if (!userId.value) return;
  const res:any = await $fetch(`/nuxt/demo/user/${userId.value}`, { method: 'get' });
  if (res.status.is_success) {
    params.value.name = res.data.name;
    params.value.email = res.data.email;
    ElMessage({ message: '取得成功', type: 'success' });
    ClickList();
    return;
  }
  ElMessage.error(res.status.message);
};

const ApiPut = async () => {
  if (!userId.value) return;
  const res: any = await $fetch(`/nuxt/demo/user/${userId.value}`, { method: 'put', body: params.value });
  if (res.status.is_success) {
    ElMessage({ message: '更新成功', type: 'success' });
    ClickList();
    return;
  }
  ElMessage.error(res.status.message);
};

const ApiDel = async () => {
  if (!userId.value) return;
  const res:any = await $fetch(`/nuxt/demo/user/${userId.value}`, { method: 'delete' });
  if (res.status.is_success) {
    ElMessage({ message: '刪除成功', type: 'success' });
    ClickList();
    return;
  }
  ElMessage.error(res.status.message);
};

const ClickTableRow = (row: any) => {
  if (!row.id) return;
  userId.value = row.id;
  ApiGet();
};

// -----------------------------------------------------------------------------------------------
const ClickList = async () => {
  const res:any = await $fetch('/nuxt/demo/users', { method: 'get', query: pageParams.value });
  if (res.status.is_success && res.data) {
    tableInfo.value.list = res.data.list;
    tableInfo.value.total = res.data.total;
    return;
  }
  ElMessage.error(res.status.message);
};

const OnPageChange = (page: number) => {
  ClickList();
};

onMounted(() => {
  ClickList();
});
</script>

<template lang="pug">
#MongoDBDemo
  .left-area
    p MongoDBDemo
    p https://pjchender.dev/database/mongo-mongoose/
    .row-item
      ElButton(@click="ClickClear") Clear
    .row-item
      label name
      ElInput(v-model="params.name" type="text")
    .row-item
      label email
      ElInput(v-model="params.email" type="email")
    .row-item
      ElButton(type="primary" @click="ApiPost") Post
    .row-item
      label id
      ElInput(v-model="userId" type="email")
    .row-item
      ElButton(type="primary" @click="ApiGet") Get
      ElButton(type="primary" @click="ApiPut") Put
      ElButton(type="primary" @click="ApiDel") Del

  //-----------------------------------------------------------------------------------------------
  .right-area
    .row-item
      ElButton(type="primary" @click="ClickList") List
    .row-item
      ElTable(
        ref="elElTable"
        :data="tableInfo.list"
        style="width: 100%; height:400px"
        border
        @row-click="ClickTableRow"
      )
        ElTableColumn(prop="id" label="id" width="120")
        ElTableColumn(prop="name" label="name" width="120")
        ElTableColumn(prop="email" label="email" width="120")
    .row-item
      ElPagination(
        v-model:current-page="pageParams.page"
        :page-size="pageParams.size"
        :total="tableInfo.total"
        background
        layout="prev, pager, next, total"
        @current-change="OnPageChange"
      )
</template>

<style lang="scss" scoped>
// 佈局 ----
#MongoDBDemo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  .left-area {
    @include col(10px);
  }
  .right-area {
    @include col(10px);
  }
}

// 組件 ----
.row-item {
  @include row(10px);
}

</style>
