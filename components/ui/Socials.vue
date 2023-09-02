<template>
  <div class="flex flex-row gap-6 max-md:mx-auto">
    <UiButton
      :type="squared ? 'social-square' : 'social-round'"
      :appendIcon="{
        icon: { name: 'ri:whatsapp-fill', color: 'white' },
      }"
      onclick='window.open("callto:+1234567890");'
    />
    <UiButton
      :type="squared ? 'social-square' : 'social-round'"
      :appendIcon="{
        icon: { name: 'simple-icons:facebook', color: 'white' },
      }"
    />
    <UiButton
      :type="squared ? 'social-square' : 'social-round'"
      :appendIcon="{
        icon: { name: 'mdi:email-edit', color: 'white' },
      }"
    />
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
  mounted() {
    console.log(this.squared);
  },
};
</script>
