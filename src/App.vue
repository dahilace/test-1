<script setup lang="ts">
import SvgIcon from './components/SvgIcon.vue';
import ShellHeader from './components/shell/ShellHeader.vue';
import ShellFooter from './components/shell/ShellFooter.vue';

import CommonHeading from './components/common/CommonHeading.vue';
import CommonHint from './components/common/CommonHint.vue';
import CommonList from './components/common/CommonList.vue';
</script>

<template>
  <div class="wrapper flex flex-col min-h-screen">
    <shell-header></shell-header>
    <main>
      <common-heading></common-heading>
      <common-hint>Подсказка</common-hint>
      <hr>
      <common-list></common-list>
    </main>
    <shell-footer class="mt-auto"></shell-footer>
  </div>
</template>

<style scoped lang="scss"></style>
