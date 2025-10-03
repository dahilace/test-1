<script setup lang="ts">
import { useListStore } from '@/stores/listStore';
const listStore = useListStore();

import type { ListData } from '@/assets/types/types';

function addEmptyRaw() {
  listStore.listData.push({ id: crypto.randomUUID() } as ListData);
}
</script>

<template>
  <div class="flex gap-2">
    <h2>Учетные записи</h2>
    <button @click="addEmptyRaw">+</button>
  </div>
</template>

<style lang="scss" scoped></style>
