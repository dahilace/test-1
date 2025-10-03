<script setup lang="ts">
import type { ListData } from '@/assets/types/types';
import CommonListItem from './CommonListItem.vue';
import { useListStore } from '@/stores/listStore';
const listStore = useListStore();
</script>

<template>
  <div v-if="!listStore.listData.length">Учетных записей нет</div>

  <ul v-else class="list relative px-2 py-6">
    <li v-for="item in listStore.listData" :key="item.id">
      <common-list-item :data="item" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  counter-set: count 0;
}
:deep(.form__inner) {
  &::before {
    content: counter(count);
    counter-increment: count 1;
  }
}
</style>
