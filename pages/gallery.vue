<template>
  <main>
    <section class="element-section top-element-section lg:pt-14">
      <div class="element-container flex-wrap md:px-10">
        <div
          class="hero-header-container text-center max-lg:mb-10 lg:text-start relative"
        >
          <p class="styled-header leading-fwide">Onze Lieverds</p>
          <TransitionVertical :y="{ value: 600 }">
            <h2 class="section-header lg:text-start lg:max-w-[50%]">
              Dit zijn foto's van de honden die ik uitlaat
            </h2>
          </TransitionVertical>
          <TransitionVertical
            :y="{ value: 300 }"
            :opacity="{ duration: 500 }"
            class="absolute left-1/5 top-4 z-0"
          >
            <div class="bg-accent3 aspect-square h-[30px] rounded-full"></div>
          </TransitionVertical>
          <div
            class="bg-gradient-to-bl from-accent2/80 from-20% to-transparent to-80% opacity-50 absolute lg:left-1/3 right-[5%] md:right-1/6 top-0 aspect-square h-[200px] rounded-full z-0"
          ></div>
        </div>
        <div class="w-full relative">
          <div
            class="z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 smx:max-md:gap-5 md:max-lg:gap-10 items-start relative"
          >
            <div class="grid gap-2 smx:max-md:gap-5 md:max-lg:gap-10">
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/black-schnauzer-cowboy-dog-2022-08-11-19-54-34-utc-min.jpg"
                alt=""
              />
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/cute-tabby-cat-with-green-eyes-lying-on-bright-yellow-bean-bag-.jpg"
                alt=""
              />
            </div>
            <div class="grid gap-2 smx:max-md:gap-5 md:max-lg:gap-10">
              <nuxt-img src="/img/bagus.jpg" />
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/cute-tabby-cat-with-green-eyes-lying-on-bright-yellow-bean-bag-.jpg"
                alt=""
              />
            </div>
            <div class="grid gap-2 smx:max-md:gap-5 md:max-lg:gap-10">
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/elementor/thumbs/dog-2022-03-06-14-18-59-utc-min-pugqad7ug49lgnhtrfa06erknpys7bhjix3ibqi2jc.jpg"
                alt=""
              />
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/cute-tabby-cat-with-green-eyes-lying-on-bright-yellow-bean-bag-.jpg"
                alt=""
              />
            </div>
            <div class="grid gap-2 smx:max-md:gap-5 md:max-lg:gap-10">
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/black-schnauzer-cowboy-dog-2022-08-11-19-54-34-utc-min.jpg"
                alt=""
              />
              <img
                src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/cute-tabby-cat-with-green-eyes-lying-on-bright-yellow-bean-bag-.jpg"
                alt=""
              />
            </div>
          </div>
          <TransitionVertical
            :y="{ value: 100 }"
            :scale="{ value: 0.8 }"
            :opacity="{ duration: 500 }"
            class="absolute bottom-0 rotate-90 right-1/6 z-0"
          >
            <div
              class="aspect-square w-[400px] bg-accent/40 blur-md"
              style="
                -webkit-mask-image: url('./assets/images/flower.png');
                mask-image: url('./assets/images/flower.png');
                -webkit-mask-size: contain;
                mask-size: contain;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
              "
            ></div>
          </TransitionVertical>
          <TransitionVertical
            :y="{ value: 100 }"
            :scale="{ value: 0.8 }"
            :opacity="{ duration: 500 }"
            class="absolute -top-32 rotate-180 right-0 z-0"
          >
            <div
              class="aspect-square w-[300px] bg-accent/40 blur-md"
              style="
                -webkit-mask-image: url('./assets/images/blob.png');
                mask-image: url('./assets/images/blob.png');
                -webkit-mask-size: contain;
                mask-size: contain;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
              "
            ></div>
          </TransitionVertical>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const appConfig = useAppConfig();

const text = appConfig.title + " | Gallerij";

const title = ref(text);

useHead({
  title,
});
</script>
