<template>
  <div>
    <sectionsContactCard />
    <div
      class="py-5 px-5 md:px-16 element-container flex justify-between items-center gap-5 border-[1px] border-b-0 border-dashed rounded-t-4xl border-accent"
    >
      <h4
        class="inline-block !leading-none underline-offset-4 w-full md:w-auto text-4xl md:text-2xl lg:text-4xl tracking-minus site-logo font-nothing text-gray-text font-bold text-center relative"
      >
        Patricia Kousemaker
      </h4>
      <UiSocials :squared="false" />
    </div>
  </div>
</template>

<style scoped>
.append-box-icon {
  height: 100%;
  width: 100%;
  padding: 10px;
}
.append-box-icon > svg {
  width: 100%;
}
</style>
