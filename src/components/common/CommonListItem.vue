<script setup lang="ts">
import UiInput from '../ui/UiInput.vue';
import type { ListData } from '@/assets/types/types';
import { useListStore } from '@/stores/listStore';
const listStore = useListStore();

defineProps<{
  data: ListData;
}>();
</script>

<template>
  <div class="form flex gap-2">
    <form
      class="form__inner w-full flex gap-2 p-4 border border-red-50 rounded-xs"
    >
      <ui-input mode="mark">{{ data.marks }}</ui-input>
      <ui-input mode="type">{{ data.type }}</ui-input>
      <ui-input mode="login">{{ data.login }}</ui-input>
      <ui-input mode="password">{{ data.password }}</ui-input>
    </form>
    <button @click="listStore.deleteItem(data.id)" type="button">delete</button>
  </div>
</template>

<style lang="scss" scoped></style>
