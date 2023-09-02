<template>
  <div class="flex-1 flex h-12">
    <NuxtLink to="/" class="relative flex flex-row flex-nowrap mr-5">
      <h2
        class="inline-block underline decoration-wavy underline-offset-4 text-4xl tracking-minus decoration-[2px] site-logo font-nothing text-gray-text font-bold"
      >
        {{ appConfig.title }}
      </h2>
      <h2
        class="site-logo normal-case font-nothing text-4xl tracking-minus text-gray-text font-bold"
      >
        's
      </h2>
      <span
        class="site-logo absolute -bottom-5 left-0 indent-[10px] whitespace-nowrap tracking-widest text-xl text-accent brightness-[.85] font-semibold font-jost"
        style="font-variant: small-caps"
      >
        Uitlaat Service
      </span>
    </NuxtLink>
  </div>
</template>

<script setup>
const appConfig = useAppConfig();
</script>
