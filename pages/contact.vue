<template>
  <main>
    <section class="element-section top-element-section lg:pt-14">
      <div class="w-full flex flex-wrap element-container items-stretch">
        <div
          class="bg-gradient-to-b from-accent2 to-transparent relative w-full md:w-2/5 rounded-t-[100px]"
        >
          <div class="flex w-full flex-wrap sm:p-10 p-7 h-full content-end">
            <BaseLogo class="w-full mb-5 !flex-none max-smx:justify-center" />
            <p
              class="description top-description hero-description smx:max-md:m-0 smx:max-md:w-1/2 w-full max-smx:text-center"
            >
              Wij staan klaar voor uw dier tijdens uw afwezigheid.
            </p>
            <UiSocials
              :squared="true"
              class="smx:max-md:w-1/2 w-full justify-center smx:max-md:justify-end md:justify-start smx:items-center"
            />
          </div>
        </div>
        <div class="sm:p-10 p-2 flex flex-wrap items-end w-full md:w-3/5">
          <div
            class="hero-header-container relative text-start z-20 pop-bottom"
          >
            <TransitionBase
              :y="{ value: 300, duration: 350, delay: 500 }"
              :opacity="{ duration: 350, delay: 500 }"
              trigger="visibleOnce"
              class="bg-accent3 absolute left-44 top-4 aspect-square h-[30px] rounded-full z-0"
            ></TransitionBase>
            <TransitionBase
              :y="{ value: -600, duration: 1200, delay: 300 }"
              :opacity="{ duration: 1200 }"
              trigger="enter"
            >
              <p class="styled-header leading-fwide target">Neem contact</p>
            </TransitionBase>
            <div class="relative">
              <TransitionBase
                :scale="{ value: 0.6, duration: 800, delay: 500 }"
                :opacity="{ duration: 800, delay: 500 }"
                trigger="visibleOnce"
                class="aspect-square w-[100px] md:w-[150px] absolute rotate-0 right-0 -top-10 bg-accent/40"
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
          </div>
          <TransitionBase
            :scale="{ value: 0, duration: 1500, delay: 800 }"
            :opacity="{ duration: 500, delay: 800 }"
            trigger="enter"
          >
            <p class="description mb-10 z-20">
              Auctor augue mauris augue neque gravida in fermentum et
              sollicitudin. Integer malesuada nunc vel risus commodo viverra.
              Vulputate sapien nec sagittis aliquam. Vel fringilla est
              ullamcorper eget nulla facilisi etiam.
            </p>
          </TransitionBase>
          <div class="w-full flex relative">
            <div class="w-full flex gap-2 flex-wrap relative z-10">
              <div class="w-full flex flex-wrap gap-2">
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Voornaam"
                    class="input input-bordered w-full"
                  />
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Achternaam"
                    class="input input-bordered w-full"
                  />
                </div>
              </div>
              <div class="w-full flex flex-wrap gap-2">
                <div class="w-full lg:flex-1">
                  <input
                    type="text"
                    placeholder="Email Adres"
                    class="input input-bordered w-full"
                  />
                </div>
                <div class="w-full lg:flex-1">
                  <input
                    type="tel"
                    placeholder="Telefoon Nummer"
                    class="input input-bordered w-full"
                  />
                </div>
              </div>
              <div class="w-full">
                <textarea
                  class="textarea textarea-bordered w-full z-10"
                  placeholder="Bericht"
                ></textarea>
              </div>
              <div class="w-full">
                <button
                  class="btn pill-but btn-primary hover:btn-accent padded z-5 text-white"
                >
                  <div class="but-text">
                    <p class="header">Verstuur Bericht</p>
                  </div>
                  <Icon name="mingcute:arrow-right-fill" />
                </button>
              </div>
            </div>
            <div
              class="bg-gradient-to-tl from-accent2/60 from-20% to-transparent to-80% opacity-50 absolute -right-10 bottom-0 aspect-square h-[200px] rounded-full z-0"
            ></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const appConfig = useAppConfig();

const text = appConfig.title + " | Contact";

const title = ref(text);

useHead({
  title,
});
</script>
