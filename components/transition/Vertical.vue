<template>
  <div ref="parentEl" class="transition-container">
    <div class="transition-content" ref="targetEl">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  x: { value: Number, delay: Number, duration: Number },
  y: { value: Number, delay: Number, duration: Number },
  opacity: { delay: Number, duration: Number },
  scale: { value: Number, delay: Number, duration: Number },
  rotate: { value: Number, delay: Number, duration: Number },
  animDelay: { type: Number, default: 800 },
});
console.log(
  props.x,
  props.y,
  props.opacity,
  props.scale,
  props.rotate,
  props.animDelay
);

const targetEl = ref(null);
const parentEl = ref(null);
const { motionInstance } = useMotion(parentEl, {
  initial: {
    scale: 1,
  },
  visibleOnce: {
    scale: 1,
    transition: {
      delay: props.animDelay ? props.animDelay : props.animDelay,
      onComplete: () => animateChild(),
    },
  },
});
const animateChild = () => {
  variant.value = "custom";
};
const { variant } = useMotion(targetEl, {
  initial: {
    y: props.y ? props.y.value : 0,
    x: props.x ? props.x.value : 0,
    opacity: props.opacity ? 0 : 1,
    scale: props.scale ? props.scale.value : 1,
    rotate: props.rotate ? props.rotate.value : 0,
  },
  custom: {
    y: 0,
    x: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      y: {
        duration: props.y ? props.y.duration : props.animDelay,
        delay: props.y ? props.y.delay : 0,
      },
      x: {
        duration: props.x ? props.x.duration : props.animDelay,
        delay: props.x ? props.x.delay : 0,
      },
      opacity: {
        duration: props.opacity ? props.opacity.duration : props.animDelay,
        delay: props.opacity ? props.opacity.delay : 0,
      },
      scale: {
        duration: props.scale ? props.scale.duration : props.animDelay,
        delay: props.scale ? props.scale.delay : 0,
      },
      rotate: {
        duration: props.rotate ? props.rotate.duration : props.animDelay,
        delay: props.rotate ? props.rotate.delay : 0,
      },
    },
  },
});
</script>
