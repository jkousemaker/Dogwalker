<template>
  <div class="w-full h-full flex">
    <div
      class="m-[10px] lg:m-5 max-md:mt-[30px] md:max-lg:mb-5 lg:ml-[10px] max-md:px-[30px] max-md:py-[60px] md:p-10 rounded-[40px] bg-white service-card flex flex-col"
    >
      <Icon :name="icon" class="text-primary text-6xl md:text-[80px]" />
      <div class="mb-5">
        <h2 class="text-lg md:text-[23px] font-thin leading-[1.4em] mt-2 mb-4">
          {{ header }}
        </h2>
        <p
          v-if="extra"
          class="accent-text font-jost text-[18px] font-medium capitalize leading-fwide tracking-wider mb-2 underline underline-offset-2"
        >
          {{ extra }}
        </p>
        <p class="description mb-0">{{ description }}</p>
      </div>
      <div class="flex flex-col gap-2 flex-1 justify-end">
        <div class="flex flex-row items-center">
          <div class="w-10 h-5 flex items-center justify-center">
            <Icon name="fa:euro" class="text-accent max-h-full" />
          </div>
          <p
            class="font-jost text-[22px] font-semibold tracking-wider text-gray-text leading-fwide"
          >
            {{ price }} Euro
          </p>
        </div>
        <div class="flex flex-row items-center">
          <div class="w-10 h-5 flex items-center justify-center">
            <Icon name="fa-regular:clock" class="text-accent max-h-full" />
          </div>
          <p
            class="font-jost text-[18px] font-medium tracking-wider text-gray-text leading-5"
          >
            Per {{ period }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-card {
  box-shadow: 0 0 90px 0
    rgba(
      181.00000000000003,
      202.00000000000003,
      191.00000000000003,
      0.38823529411764707
    );
}
</style>

<script setup lang="ts">
defineProps<{
  icon: string;
  header: string;
  extra?: string;
  description: string;
  price: Number;
  period: string;
}>();
</script>
