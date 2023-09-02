<template>
  <div class="w-full h-full">
    <div class="m-5 p-[10px]">
      <div
        class="px-[30px] py-10 rounded-[40px] stat-card bg-white text-center"
      >
        <h2
          class="text-[28px] md:text-5xl !leading-relaxed text-primary w-full"
        >
          {{ amount }}
        </h2>
        <p class="description capitalize w-full mb-0">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  amount: string;
  description: string;
}>();
</script>

<style scoped>
.stat-card {
  box-shadow: 0 0 90px 0
    rgba(
      181.00000000000003,
      202.00000000000003,
      191.00000000000003,
      0.38823529411764707
    );
}
</style>
