<template>
  <main>
    <div class="element-container min-h-[520px] max-lg:justify-center">
      \\
      <div class="md:w-[28%] md:max-lg:w-1/2 min-h-6 max-md:w-full flex">
        <div
          class="mt-14 m-5 rounded-[100px] p-2 relative w-full flex flex-wrap content-start max-md:m-2"
        >
          <div class="w-full relative">
            <div
              class="bg-center h-128 max-md:h-72 rounded-[100px] bg-no-repeat bg-cover w-full min-h-6 relative bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/portrait-of-an-adult-gray-scottish-straight-cat-on-2022-05-18-19-18-48-utc-min.jpg')]"
            ></div>
          </div>
        </div>
      </div>
      <div class="md:w-[21%] md:max-lg:w-1/2 min-h-6 max-md:w-full flex grow">
        <div
          class="mb-20 rounded-[100px] p-2 relative w-full flex flex-wrap content-start max-md:m-2"
        >
          <div class="w-full relative">
            <div
              class="bg-center h-128 max-md:h-72 rounded-[100px] bg-no-repeat bg-cover w-full min-h-6 relative bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/brown-chines-chow-chow-dog.jpg')]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const appConfig = useAppConfig();

const text = appConfig.title + " | Reviews";

const title = ref(text);

useHead({
  title,
});
</script>
