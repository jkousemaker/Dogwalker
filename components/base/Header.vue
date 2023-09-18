<template>
  <header class="p-elongated-wide flex sticky top-0 z-50 max-h-24">
    <BaseLogo />
    <div class="drawer drawer-end smx:hidden flex justify-end">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <!-- Page content here -->
        <label
          for="my-drawer-4"
          class="drawer-button btn btn-ghost aspect-square focus:h-0 p-2 gap-1 content-center"
        >
          <div class="w-full h-1 bg-accent rounded-full"></div>
          <div class="w-full h-1 bg-accent/60 rounded-full"></div>
          <div class="w-full h-1 bg-accent/40 rounded-full"></div>
        </label>
      </div>
      <div class="drawer-side z-[100]">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul
          class="menu p-4 w-80 min-h-full flex gap-5 bg-base-200 text-base-content"
        >
          <!-- Sidebar content here -->
          <li>
            <NuxtLink @click="closeDrawer" to="/" class="flex justify-center"
              ><h3 class="text-2xl font-semibold font-jost">Home</h3></NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              @click="closeDrawer"
              to="/about"
              class="flex justify-center"
              ><h3 class="text-2xl font-semibold font-jost">
                Informatie
              </h3></NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              @click="closeDrawer"
              to="/contact"
              class="flex justify-center"
              ><h3 class="text-2xl font-semibold font-jost">
                Contact
              </h3></NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              @click="closeDrawer"
              to="/gallery"
              class="flex justify-center"
              ><h3 class="text-2xl font-semibold font-jost">
                Gallerij
              </h3></NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
    <nav class="flex flex-row gap-2 md:gap-5 z-50 group max-smx:hidden">
      <nuxt-link to="/" class="btn btn-link padded z-5 text-black">
        <div class="but-text">
          <p class="header">Home</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/about" class="btn btn-link padded z-5 text-black">
        <div class="but-text">
          <p class="header">Informatie</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/contact" class="btn btn-link padded z-5 text-black">
        <div class="but-text">
          <p class="header">Contact</p>
        </div>
      </nuxt-link>
      <nuxt-link to="/gallery" class="btn btn-link padded z-5 text-black">
        <div class="but-text">
          <p class="header">Gallerij</p>
        </div>
      </nuxt-link>
    </nav>
    <div class="md:flex-1"></div>
  </header>
</template>

<script>
export default {
  methods: {
    closeDrawer() {
      document.querySelector(".drawer-toggle").checked = false;
    },
  },
};
</script>
