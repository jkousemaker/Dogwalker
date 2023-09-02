<template>
  <BaseHeader></BaseHeader>
  <DevBpIndicator />
  <NuxtPage />
  <BaseFooter />
</template>

<script setup lang="ts">
let announcement: any = null;
let dates: any = null;
const enabled = false; //Temp announcement bar dissabler
//announcement = "No dates available";
dates = [new Date("6/22/2023"), new Date("6/26/2023")];
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
