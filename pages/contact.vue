<template>
  <main>
    <section class="element-section top-element-section">
      <div class="w-full flex flex-wrap">
        <div
          class="bg-gradient-to-b from-accent2 to-ghost relative w-full lg:w-1/3"
        >
          <div class="flex w-full flex-wrap p-10">
            <BaseLogo class="w-full" />
            <p class="description top-description hero-description w-full">
              Wij staan klaar voor uw dier tijdens uw afwezigheid.
            </p>
            <UiSocials :squared="true" class="w-full" />
          </div>
        </div>
        <div class="p-10 flex flex-wrap items-end w-full lg:w-2/3">
          <div class="hero-header-container text-start z-20 pop-bottom">
            <TransitionBase
              :y="{ value: -600, duration: 1200, delay: 300 }"
              :opacity="{ duration: 1200 }"
              trigger="enter"
            >
              <p class="styled-header leading-fwide target">Neem contact</p>
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
              sollicitudin. Integer malesuada nunc vel risus commodo viverra.
              Vulputate sapien nec sagittis aliquam. Vel fringilla est
              ullamcorper eget nulla facilisi etiam.
            </p>
          </TransitionBase>
          <div class="w-1/2 p-2">
            <UiInput placeholder="Maria"> Uw Voor Naam </UiInput>
          </div>
          <div class="w-1/2 p-2">
            <UiInput placeholder="Bakker"> Uw Achter Naam </UiInput>
          </div>
          <div class="w-full p-2">
            <UiInput placeholder="MariaBakker@gmail.com" type="email">
              Uw Email
            </UiInput>
          </div>
          <div class="w-full p-2">
            <UiInput placeholder="+31 6 37686795" type="tel">
              Uw Telefoonnummer
            </UiInput>
          </div>
          <div class="w-full p-2">
            <UiInput
              placeholder="Ik wil een afspraak maken voor volgende week."
              type="textarea"
            >
              Uw Bericht
            </UiInput>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const appConfig = useAppConfig();

const text = appConfig.title + " | Home";

const title = ref(text);

useHead({
  title,
});
</script>
