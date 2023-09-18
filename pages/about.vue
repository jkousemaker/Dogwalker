<template>
  <main>
    <section class="element-section top-element-section lg:pt-14">
      <div class="element-container items-stretch">
        <div class="w-full lg:w-1/2 flex">
          <div class="w-full p-[10px] flex flex-wrap relative items-center">
            <div class="lg:mr-[40px]">
              <div class="z-0">
                <TransitionVertical
                  :x="{ value: -600 }"
                  :opacity="{ duration: 500 }"
                  class="absolute right-20 -top-10 z-0"
                >
                  <div
                    class="aspect-square w-[100px] bg-accent2/30 rounded-full"
                  ></div>
                </TransitionVertical>
                <TransitionVertical
                  :y="{ value: 600 }"
                  :x="{ value: -600 }"
                  :opacity="{ duration: 500 }"
                  :scale="{ value: 0.5 }"
                  class="absolute right-48 top-0 z-0"
                >
                  <div
                    class="bg-accent3 rounded-full aspect-square w-[10px]"
                  ></div>
                </TransitionVertical>
                <TransitionVertical
                  :x="{ value: 600 }"
                  :y="{ value: -600 }"
                  :opacity="{ duration: 500 }"
                  :scale="{ value: 0.5 }"
                  class="absolute right-32 top-20 md:top-32 z-0"
                >
                  <div
                    class="aspect-square w-[10px] bg-accent3 rounded-full"
                  ></div>
                </TransitionVertical>
              </div>
              <div class="hero-header-container text-start z-20 pop-bottom">
                <TransitionVertical
                  :y="{ value: -600 }"
                  :opacity="{ duration: 500 }"
                >
                  <p class="styled-header leading-fwide target">Over mezelf</p>
                </TransitionVertical>
                <TransitionVertical
                  :x="{ value: -600 }"
                  :scale="{ value: 0.7 }"
                  :opacity="{ duration: 500 }"
                >
                  <h2 class="section-header text-left">
                    Ik ben Patricia Kousemaker
                  </h2>
                </TransitionVertical>
              </div>
              <TransitionVertical
                :scale="{ value: 0 }"
                :opacity="{ duration: 500 }"
              >
                <p class="description mb-10 z-20">
                  Auctor augue mauris augue neque gravida in fermentum et
                  sollicitudin. Integer malesuada nunc vel risus commodo
                  viverra. Vulputate sapien nec sagittis aliquam. Vel fringilla
                  est ullamcorper eget nulla facilisi etiam.
                </p>
              </TransitionVertical>
              <div class="mb-16 z-20">
                <TransitionVertical :opacity="{ duration: 500 }">
                  <uiChecks text="Over 10 years of experience" />
                </TransitionVertical>
                <TransitionVertical :opacity="{ duration: 500 }">
                  <uiChecks text="Over 10 years of experience" />
                </TransitionVertical>
                <TransitionVertical :opacity="{ duration: 500 }">
                  <uiChecks text="Over 10 years of experience" />
                </TransitionVertical>
              </div>
              <TransitionVertical :opacity="{ duration: 500 }">
                <nuxt-link to="/contact">
                  <button
                    class="btn pill-but max-md:btn-block btn-primary hover:btn-accent padded z-5 text-white"
                  >
                    <div class="but-text">
                      <p class="header">Neem contact</p>
                    </div>
                    <Icon
                      name="fluent:calendar-arrow-counterclockwise-16-filled"
                    />
                  </button>
                </nuxt-link>
              </TransitionVertical>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 flex min-h-6 relative">
          <TransitionVertical
            :x="{ value: 300 }"
            :opacity="{ duration: 500 }"
            class="w-full m-[10px] max-lg:mt-[60px] lg:ml-[60px] p-[10px]"
          >
            <div
              class="flex w-full z-20 bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/close-up-of-pembroke-welsh-corgi-dog-sitting-on-ye-2021-08-28-00-13-18-utc-min.jpg')] bg-center bg-no-repeat bg-cover items-center content-center rounded-[100px]"
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
            </div>
          </TransitionVertical>
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
