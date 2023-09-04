<template>
  <main>
    <section class="element-section top-element-section lg:pt-14">
      <div class="element-container flex-wrap md:px-10">
        <div
          class="hero-header-container text-center max-lg:mb-10 lg:text-start relative"
        >
          <p class="styled-header leading-fwide">Onze Lieverds</p>
          <h2 class="section-header lg:text-start lg:max-w-[50%]">
            Dit zijn foto's van de honden die ik uitlaat
          </h2>
          <TransitionBase
            :y="{ value: 300, duration: 350, delay: 500 }"
            :opacity="{ duration: 350, delay: 500 }"
            trigger="visibleOnce"
            class="bg-accent3 absolute left-1/5 top-4 aspect-square h-[30px] rounded-full z-0"
          ></TransitionBase>
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
          <TransitionBase
            :y="{ value: 100, duration: 1600 }"
            :scale="{ value: 0.8, duration: 1400 }"
            :opacity="{ duration: 1200 }"
            trigger="enter"
            class="aspect-square w-[400px] absolute bottom-0 rotate-90 right-1/6 bg-accent/40 blur-md z-0"
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
          ></TransitionBase>
          <TransitionBase
            :y="{ value: 100, duration: 1600 }"
            :scale="{ value: 0.8, duration: 1400 }"
            :opacity="{ duration: 1200 }"
            trigger="enter"
            class="aspect-square w-[300px] absolute -top-32 rotate-180 right-0 bg-accent/40 blur-md z-0"
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
          ></TransitionBase>
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
