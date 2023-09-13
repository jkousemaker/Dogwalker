<template>
  <section
    class="element-section pb-[30px] pt-[60px] max-md:pt-[30px] service-section"
  >
    <div class="element-container">
      <TransitionBase
        :y="{ value: 300, duration: 200, delay: 200 }"
        :x="{ value: -500, delay: 1000, duration: 1200 }"
        :opacity="{ delay: 1000, duration: 500 }"
        trigger="visibleOnce"
        class="aspect-square w-[200px] md:w-[250px] absolute right-0 rounded-full top-10 bg-primary/60 -rotate-180 z-0"
      ></TransitionBase>
      <!--col divs-->

      <div class="w-full flex flex-wrap z-10">
        <div class="section-header-container w-full text-center mb-5 md:mb-10">
          <TransitionVertical
            :y="{ value: 300 }"
            :opacity="{ duration: 200 }"
            trigger="visibleOnce"
          >
            <p class="styled-header leading-fwide text-[22px] mb-4">
              Our Services
            </p>
          </TransitionVertical>
          <TransitionVertical
            :y="{ value: 300 }"
            :opacity="{ duration: 200 }"
            trigger="visibleOnce"
          >
            <h2 class="section-header">What we offer</h2>
          </TransitionVertical>
        </div>
        <div class="w-full flex flex-wrap">
          <TransitionVertical
            v-for="serviceCard in serviceCards"
            :y="{
              value: 300,
              duration: serviceCard.yDur,
              delay: serviceCard.yDelay,
            }"
            :opacity="{ duration: serviceCard.opaDur }"
            trigger="visibleOnce"
            class="w-full lg:w-1/3"
          >
            <TemplatesServiceCard
              :icon="serviceCard.icon"
              :header="serviceCard.header"
              :description="serviceCard.description"
              :price="serviceCard.price"
              :period="serviceCard.period"
            />
          </TransitionVertical>
        </div>
        <div class="mx-auto mt-7">
          <TransitionBase
            :opacity="{ duration: 700, delay: 1000 }"
            trigger="visibleOnce"
          >
            <nuxt-link to="/contact">
              <button
                class="btn pill-but btn-primary hover:btn-accent padded z-5 text-white"
              >
                <div class="but-text">
                  <p class="header">Neem contact</p>
                </div>
                <Icon name="fluent:calendar-arrow-counterclockwise-16-filled" />
              </button>
            </nuxt-link>
          </TransitionBase>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const serviceCards = [
  {
    yDur: 900,
    yDelay: 0,
    opaDur: 200,
    icon: "cil:dog",
    header: "Hond Uitlaten",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    price: 10,
    period: "wandeling",
  },
  {
    yDur: 900,
    yDelay: 100,
    opaDur: 200,
    icon: "cil:house",
    header: "Opvang",
    extra: "Bij u of mij thuis.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    price: 15,
    period: "dag en/of dagdeel",
  },
  {
    yDur: 900,
    yDelay: 200,
    opaDur: 200,
    icon: "cil:cat",
    header: "Opvang",
    extra: "Katten, konijnen of vogels",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    price: "7,50",
    period: "dag en/of dagdeel",
  },
];
</script>
