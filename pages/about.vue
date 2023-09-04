<template>
  <main>
    <section class="element-section top-element-section lg:pt-14">
      <div class="element-container items-stretch">
        <div class="w-full lg:w-1/2 flex">
          <div class="w-full p-[10px] flex flex-wrap relative items-center">
            <div class="lg:mr-[40px]">
              <div class="z-0">
                <TransitionBase
                  :x="{ value: -600, duration: 1200, delay: 1200 }"
                  :opacity="{ duration: 1200, delay: 1300 }"
                  trigger="enter"
                  class="aspect-square w-[100px] absolute right-20 -top-10 z-0 bg-accent2/30 rounded-full"
                ></TransitionBase>
                <TransitionBase
                  :y="{ value: 600, duration: 1200, delay: 1500 }"
                  :x="{ value: -600, duration: 1200, delay: 1500 }"
                  :opacity="{ duration: 1200, delay: 1600 }"
                  :scale="{ value: 0.5, duration: 800, delay: 2600 }"
                  trigger="enter"
                  class="aspect-square w-[10px] absolute right-48 top-0 z-0 bg-accent3 rounded-full"
                ></TransitionBase>
                <TransitionBase
                  :x="{ value: 600, duration: 1200, delay: 2000 }"
                  :y="{ value: -600, duration: 1200, delay: 2000 }"
                  :opacity="{ duration: 1200, delay: 1600 }"
                  :scale="{ value: 0.5, duration: 800, delay: 3000 }"
                  trigger="enter"
                  class="aspect-square w-[10px] absolute right-32 top-20 md:top-32 z-0 bg-accent3 rounded-full"
                ></TransitionBase>
              </div>
              <div class="hero-header-container text-start z-20 pop-bottom">
                <TransitionBase
                  :y="{ value: -600, duration: 1200, delay: 300 }"
                  :opacity="{ duration: 1200 }"
                  trigger="enter"
                >
                  <p class="styled-header leading-fwide target">Over mezelf</p>
                </TransitionBase>
                <TransitionBase
                  :x="{ value: -600, duration: 1600 }"
                  :scale="{ value: 0.7, duration: 800, delay: 800 }"
                  :opacity="{ duration: 1200 }"
                  trigger="enter"
                >
                  <h2 class="section-header text-left">
                    Ik ben Patricia Kousemaker
                  </h2>
                </TransitionBase>
              </div>
              <TransitionBase
                :scale="{ value: 0, duration: 1500, delay: 800 }"
                :opacity="{ duration: 500, delay: 800 }"
                trigger="enter"
              >
                <p class="description mb-10 z-20">
                  Auctor augue mauris augue neque gravida in fermentum et
                  sollicitudin. Integer malesuada nunc vel risus commodo
                  viverra. Vulputate sapien nec sagittis aliquam. Vel fringilla
                  est ullamcorper eget nulla facilisi etiam.
                </p>
              </TransitionBase>
              <div class="mb-16 z-20">
                <TransitionBase
                  :opacity="{ duration: 800, delay: 800 }"
                  trigger="visibleOnce"
                >
                  <uiChecks text="Over 10 years of experience" />
                </TransitionBase>
                <TransitionBase
                  :opacity="{ duration: 800, delay: 800 }"
                  trigger="visibleOnce"
                >
                  <uiChecks text="Over 10 years of experience" />
                </TransitionBase>
                <TransitionBase
                  :opacity="{ duration: 800, delay: 800 }"
                  trigger="visibleOnce"
                >
                  <uiChecks text="Over 10 years of experience" />
                </TransitionBase>
              </div>
              <TransitionBase
                :opacity="{ duration: 800, delay: 800 }"
                trigger="visibleOnce"
              >
                <nuxt-link to="/contact">
                  <button
                    class="btn pill-but btn-primary hover:btn-accent padded z-5 text-white"
                  >
                    <div class="but-text">
                      <p class="header">Neem contact</p>
                    </div>
                    <Icon
                      name="fluent:calendar-arrow-counterclockwise-16-filled"
                    />
                  </button>
                </nuxt-link>
              </TransitionBase>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex min-h-6 relative">
          <TransitionBase
            :x="{ value: 300, duration: 1000, delay: 200 }"
            :opacity="{ duration: 800 }"
            trigger="visibleOnce"
            class="m-[10px] max-lg:mt-[60px] lg:ml-[60px] flex w-full z-20 bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/close-up-of-pembroke-welsh-corgi-dog-sitting-on-ye-2021-08-28-00-13-18-utc-min.jpg')] bg-center bg-no-repeat bg-cover items-center content-center rounded-[100px] p-[10px]"
          >
            <div
              class="aspect-square w-[300px] absolute bottom-5 -left-28 -z-10 from-[#bedcf5] from-10% via-[#bedcf5]/20 via-35% to-transparent to-50% bg-gradient-to-r"
              style="
                -webkit-mask-image: url('./assets/images/lines.png');
                mask-image: url('./assets/images/lines.png');
                -webkit-mask-size: contain;
                mask-size: contain;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
                transform: scaleX(2);
              "
            ></div>

            <div class="w-full h-[300px] md:h-[600px] z-10"></div>
          </TransitionBase>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const appConfig = useAppConfig();

const text = appConfig.title + " | Informatie";

const title = ref(text);
const config = useRuntimeConfig();

useHead({
  title,
});
</script>
