<template>
  <div class="w-full relative flex flex-col items-start">
    <label
      ref="target"
      class="relative pointer-events-none !px-4 rounded-t-lg bg-white outline-2 outline-top outline-offset-2 outline-[#303030]/20 select-none"
    >
      <slot></slot>
    </label>
    <textarea
      v-if="type && type == 'textarea'"
      name=""
      id=""
      class="textarea w-full p-4 placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500"
      :placeholder="placeholder"
      ref="parent"
      @focus="focusHandler(true)"
      @focusout="focusHandler(false)"
    >
    </textarea>
    <input
      v-else
      :type="type ? type : 'text'"
      :placeholder="placeholder"
      class="input w-full p-4 placeholder:opacity-0 placeholder:transition-opacity placeholder:duration-500"
      ref="parent"
      @focus="focusHandler(true)"
      @focusout="focusHandler(false)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string;
  type?: string;
  icon?: string;
}>();
const target = ref(null);
const parent = ref(null);
const { style } = useElementStyle(parent);

const { apply } = useMotion(target, {
  initial: {
    y: 0,
    lineHeight: 3,
    maxHeight: 0,
    padding: 0,
    transition: {
      delay: 400,
    },
  },
  custom: {
    y: 0,
    lineHeight: 1,
    maxHeight: 50,
    padding: 16,
  },
});

const focusHandler = (focussed: boolean) => {
  parent.value.classList.toggle("placeholder:opacity-100");
  if (focussed) {
    apply("custom");
    style.borderTopLeftRadius = 0;

    return;
  }
  apply("initial");
};
</script>
