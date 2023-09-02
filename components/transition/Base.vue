<template>
  <div
    v-motion
    :initial="{
      x: x != undefined ? x.value : 0,
      y: y != undefined ? y.value : 0,
      scale: scale != undefined ? scale.value : 1,
      opacity: 0,
    }"
    :visibleOnce="
      trigger === 'visibleOnce'
        ? {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              x: {
                duration: x != undefined ? x.duration : 800,
                delay: x != undefined ? x.delay : 0,
              },
              y: {
                duration: y != undefined ? y.duration : 800,
                delay: y != undefined ? y.delay : 0,
              },
              scale: {
                duration: scale != undefined ? scale.duration : 800,
                delay: scale != undefined ? scale.delay : 0,
              },
              opacity: {
                duration: opacity != undefined ? opacity.duration : 800,
                delay: opacity != undefined ? opacity.delay : 0,
              },
            },
          }
        : null
    "
    :enter="
      trigger === 'enter'
        ? {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
              x: {
                duration: x != undefined ? x.duration : 800,
                delay: x != undefined ? x.delay : 0,
              },
              y: {
                duration: y != undefined ? y.duration : 800,
                delay: y != undefined ? y.delay : 0,
              },
              scale: {
                duration: scale != undefined ? scale.duration : 800,
                delay: scale != undefined ? scale.delay : 0,
              },
              opacity: {
                duration: opacity != undefined ? opacity.duration : 800,
                delay: opacity != undefined ? opacity.delay : 0,
              },
            },
          }
        : null
    "
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  x?: { value: Number; delay?: Number; duration?: Number };
  y?: { value: Number; delay?: Number; duration?: Number };
  scale?: { value: Number; delay?: Number; duration?: Number };
  opacity?: { delay?: Number; duration?: Number };
  transition?: { delay?: Number; duration?: Number };
  trigger: String;
}>();
</script>
