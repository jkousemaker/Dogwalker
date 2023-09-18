<template>
  <section class="element-section py-[30px]">
    <div class="element-container relative">
      <div
        class="bg-accent2/30 absolute left-3 -top-5 aspect-square h-[100px] rounded-full z-0"
      ></div>
      <TransitionVertical
        :y="{ value: 300 }"
        :opacity="{ duration: 500 }"
        class="absolute left-0 top-16 z-0"
      >
        <div class="bg-accent3 aspect-square h-[15px] rounded-full"></div>
      </TransitionVertical>
      <TransitionVertical
        :scale="{ value: 0.6 }"
        :opacity="{ duration: 500 }"
        class="absolute right-0 md:right-24 -top-20"
      >
        <div
          class="aspect-square w-[200px] md:w-[250px] bg-accent/40 rotate-180"
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
      <div class="w-full flex flex-wrap z-10">
        <TransitionVertical
          v-for="statCard in statCards"
          :y="{ value: 300, duration: statCard.yDur, delay: statCard.yDelay }"
          :opacity="{ duration: statCard.opaDur, delay: statCard.opaDelay }"
          class="w-full md:max-lg:w-1/2 lg:w-1/4"
        >
          <templatesStatCard
            :amount="statCard.number"
            :description="statCard.content"
          />
        </TransitionVertical>
      </div>
    </div>
  </section>
</template>

<script setup>
const statCards = [
  {
    number: "10+",
    content: "Totaal Tevreden Klaten",
    yDur: 370,
    yDelay: 200,
    opaDur: 370,
    opaDelay: 200,
  },
  {
    number: "10+",
    content: "Totaal Tevreden Klaten",
    yDur: 470,
    yDelay: 320,
    opaDur: 470,
    opaDelay: 320,
  },
  {
    number: "20+",
    content: "Totaal Tevreden Klaten",
    yDur: 540,
    yDelay: 400,
    opaDur: 540,
    opaDelay: 400,
  },
  {
    number: "10+",
    content: "Totaal Tevreden Klaten",
    yDur: 580,
    yDelay: 500,
    opaDur: 580,
    opaDelay: 500,
  },
];
</script>
