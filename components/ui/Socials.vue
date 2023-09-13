<template>
  <div class="flex flex-row gap-6 max-md:mx-auto">
    <button
      :class="
        (squared ? '' : 'pill-but') +
        ' btn btn-primary hover:btn-accent z-5 text-white'
      "
    >
      <Icon name="ri:whatsapp-fill" />
    </button>
    <button
      :class="
        (squared ? '' : 'pill-but') +
        ' btn btn-primary hover:btn-accent z-5 text-white'
      "
    >
      <Icon name="simple-icons:facebook" />
    </button>
    <button
      :class="
        (squared ? '' : 'pill-but') +
        ' btn btn-primary hover:btn-accent z-5 text-white'
      "
    >
      <Icon name="mdi:email-edit" />
    </button>
  </div>
</template>

<style scoped>
.btn-squared {
  border-radius: 0px !important;
}
</style>

<script>
export default {
  props: ["squared"],
};
</script>
