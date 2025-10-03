<script setup lang="ts">
import { ref } from 'vue';

const options = ['Локальная', 'LDAP'];

const inputData = ref('');
const modeTranslate = {
  mark: 'Метки',
  type: 'Тип записи',
  login: 'Логин',
  password: 'Пароль',
  undefined: '',
};

const props = defineProps<{
  mode?: 'mark' | 'type' | 'login' | 'password';
}>();
</script>

<template>
  <label
    :data-col="modeTranslate[mode]"
    class="w-full flex-1"
  >
    <input
      v-if="mode === 'mark'"
      v-model.trim="inputData"
      type="text"
      class="input rounded-md outline-red-50 outline border border-red-50 py-1 px-3"
    />
    <select
      v-else-if="mode === 'type'"
      v-model.trim="inputData"
      type="text"
      class="input rounded-md outline-red-50 outline border border-red-50 py-1 px-3"
    >
      <option v-for="(value, idx) in options" :key="idx" value="">
        {{ value }}
      </option>
    </select>
    <input
      v-else-if="mode === 'login'"
      v-model.trim="inputData"
      type="text"
      class="input rounded-md outline-red-50 outline border border-red-50 py-1 px-3"
    />
    <input
      v-else-if="mode === 'password'"
      v-model.trim="inputData"
      type="text"
      class="input rounded-md outline-red-50 outline border border-red-50 py-1 px-3"
    />
  </label>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;
}
label {
  &::before {
    content: attr(data-col);
    position: absolute;
    top: 4px;
    margin-left: 2px;
    background-color: #fff;
  }
}
</style>
