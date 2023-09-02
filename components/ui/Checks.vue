<template>
  <div class="flex flex-row items-center gap-4 mb-6">
    <Icon
      name="icomoon-free:checkmark"
      class="text-secondary w-6 h-6 text-left"
    />
    <p
      class="font-jost text-[22px] font-semibold tracking-wide text-accent leading-5"
    >
      {{ text }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
}>();
</script>
