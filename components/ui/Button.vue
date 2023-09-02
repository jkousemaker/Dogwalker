<template>
  <NuxtLink :to="link">
    <button :class="'items-center flex flex-row ' + type">
      <template v-if="prependIcon">
        <div
          :class="
            'prepend-box-icon ' +
            (prependIcon.box
              ? prependIcon.box.color.length != 0
                ? 'bg-' + prependIcon.box.color
                : 'bg-black'
              : '')
          "
        >
          <Icon
            :name="prependIcon.icon.name"
            :class="
              'text-' +
              (prependIcon.icon.color && prependIcon.icon.color.length
                ? prependIcon.icon.color
                : 'white')
            "
          />
        </div>
      </template>
      <div
        v-if="text"
        :class="
          'flex flex-col flex-nowrap text-left but-text justify-center text-' +
          text.color
        "
      >
        <p class="header">{{ text.string }}</p>
      </div>
      <template v-if="appendIcon">
        <div
          :class="
            'append-box-icon ' +
            (appendIcon.box
              ? appendIcon.box.color.length != 0
                ? ' bg-' + appendIcon.box.color
                : 'bg-black'
              : '')
          "
        >
          <Icon
            :name="appendIcon.icon.name"
            :class="
              'h-full text-' +
              (appendIcon.icon.color && appendIcon.icon.color.length
                ? appendIcon.icon.color
                : 'white')
            "
          />
        </div>
      </template>
    </button>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  text?: { string?: string; color?: string };
  link?: string;
  type?: string;
  prependIcon?: {
    box: { color: string };
    icon: { name: string; color: string };
  };
  appendIcon?: {
    box: { color: string };
    icon: { name: string; color: string };
  };
}>();
</script>
