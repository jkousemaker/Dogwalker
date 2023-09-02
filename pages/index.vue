<template>
  <main class="flex flex-col">
    <section class="element-section top-element-section">
      <div class="element-container min-h-[520px] max-lg:justify-center">
        <div class="element-column-full relative">
          <div
            class="w-[100px] aspect-square absolute bottom-14 right-40 bg-accent2 opacity-30 rounded-full"
          ></div>
          <TransitionBase
            :y="{ value: 200, delay: 2000, duration: 900 }"
            :scale="{ value: 0.1, delay: 2000, duration: 1400 }"
            :opacity="{ delay: 1400, duration: 500 }"
            trigger="enter"
            class="w-[15px] aspect-square absolute bottom-36 right-64 bg-accent rounded-full"
          >
          </TransitionBase>
          <TransitionBase
            :y="{ value: 200, delay: 1600, duration: 900 }"
            :scale="{ value: 0.8, delay: 2500, duration: 1400 }"
            :opacity="{ delay: 1400, duration: 500 }"
            trigger="enter"
            class="w-[10px] aspect-square absolute top-6 right-24 bg-accent3 rounded-full"
          ></TransitionBase>
          <div
            class="w-[20px] aspect-square absolute top-0 right-20 bg-accent2 opacity-30 rounded-full"
          ></div>
          <div
            class="w-[200px] aspect-square absolute -left-10 top-14 bg-gradient-to-br from-accent2/60 from-20% to-transparent to-80% opacity-50 rounded-full"
          ></div>
          <div
            class="flex items-center content-center max-lg:justify-center flex-wrap p-[10px] max-lg:mb-7 relative w-full"
          >
            <div class="header-container hero-header-container">
              <p
                class="styled-header top-styled-header hero-styled-header leading-fwide lg:text-3xl"
              >
                De uitlaat service
              </p>
              <h1 class="main-header top-main-header hero-main-header">
                Care of your<br />little friends
              </h1>
            </div>
            <div class="hero-header-container mb-5 mr-14 max-lg:mr-0">
              <p class="description top-description hero-description">
                Wij staan klaar voor uw dier tijdens uw afwezigheid.
              </p>
            </div>
            <TransitionBase
              :opacity="{ delay: 1000, duration: 1000 }"
              trigger="enter"
            >
              <UiButton
                :text="{ string: 'Onze services', color: 'white' }"
                link="/"
                type="pill-but btn-primary hover:btn-accent padded z-5
              max-w-full"
                :appendIcon="{
                  icon: { name: 'teenyicons:paw-solid', color: 'white' },
                }"
                @click="
                  this.$refs.services.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                  })
                "
              />
            </TransitionBase>
          </div>
        </div>
        <div class="md:w-[28%] md:max-lg:w-1/2 min-h-6 max-md:w-full flex">
          <div
            class="mt-14 m-5 rounded-[100px] p-2 relative w-full flex flex-wrap content-start max-md:m-2"
          >
            <TransitionBase
              :y="{ value: 200, delay: 800, duration: 900 }"
              :scale="{ value: 0.7, delay: 1200, duration: 1400 }"
              :opacity="{ delay: 800, duration: 500 }"
              trigger="enter"
              class="aspect-square w-[300px] absolute -bottom-24 -left-20"
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
            >
              <div class="bg-[#bedcf5] h-full w-full"></div>
            </TransitionBase>

            <TransitionBase
              :y="{ value: 100, duration: 1600 }"
              :scale="{ value: 0.8, duration: 1400 }"
              :opacity="{ duration: 1200 }"
              trigger="enter"
              class="aspect-square w-[200px] md:w-[300px] absolute -right-2 md:-right-24 -top-16 bg-accent/40 blur-md"
              style="
                -webkit-mask-image: url('./assets/images/lines.png');
                mask-image: url('./assets/images/lines.png');
                -webkit-mask-size: contain;
                mask-size: contain;
                -webkit-mask-position: center center;
                mask-position: center center;
                -webkit-mask-repeat: no-repeat;
                mask-repeat: no-repeat;
              "
            ></TransitionBase>
            <div class="w-full relative">
              <TransitionBase
                :y="{ value: 700, duration: 1600 }"
                :scale="{ value: 0.8, duration: 1400 }"
                :opacity="{ duration: 1400 }"
                trigger="enter"
                class="bg-center h-128 max-md:h-72 rounded-[100px] bg-no-repeat bg-cover w-full min-h-6 relative bg-[url('~/assets/images/mooi2.jpg')]"
              ></TransitionBase>
            </div>
          </div>
        </div>
        <div
          class="md:w-[21%] md:max-lg:w-1/2 min-h-6 max-md:w-full flex lg:grow"
        >
          <div
            class="mb-20 rounded-[100px] p-2 relative w-full flex flex-wrap content-start max-md:m-2"
          >
            <TransitionBase
              :y="{ value: 300, delay: 1200, duration: 1600 }"
              :scale="{ value: 0.8, delay: 1200, duration: 1400 }"
              :opacity="{ delay: 1200, duration: 1200 }"
              trigger="enter"
              class="aspect-square w-[250px] absolute -right-5 -bottom-20 bg-primary"
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
            <div class="w-full relative">
              <TransitionBase
                :y="{ value: -600, duration: 1600 }"
                :scale="{ value: 0.7, duration: 2000 }"
                :opacity="{ duration: 1200 }"
                trigger="enter"
                class="bg-center h-128 max-md:h-72 rounded-[100px] bg-no-repeat bg-cover w-full min-h-6 relative bg-[url('~/assets/images/bagus.jpg')]"
              ></TransitionBase>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="element-section max-md:py-10">
      <div class="element-container">
        <!--row responsive divs-->
        <div class="w-full flex flex-wrap mx-2 lg:items-center">
          <TransitionBase
            :y="{ value: 300, duration: 1200 }"
            :scale="{ value: 0.7, delay: 200, duration: 1400 }"
            :opacity="{ duration: 200 }"
            trigger="visibleOnce"
            class="max-lg:rounded-t-[50px] lg:rounded-l-[50px] w-full lg:w-1/3 bg-white p-5 md:max-lg:p-7 lg:p-[50px] lg:pl-[60px]"
          >
            <div class="w-full">
              <div
                class="bg-accent3 rounded-[40px] bg-no-repeat bg-bottom-center bg-contain h-[250px] md:h-[200px] bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/09/img-section-02-min.png')]"
              ></div>
            </div>
          </TransitionBase>
          <TransitionBase
            :y="{ value: 300, duration: 1000 }"
            :opacity="{ duration: 200 }"
            trigger="visibleOnce"
            class="md:max-lg:rounded-bl-[50px] w-full md:w-1/2 lg:w-1/3 p-5 md:max-lg:p-7 lg:p-[10px] bg-white flex justify-center flex-wrap"
          >
            <div class="w-[94%] text-center mb-5">
              <h2 class="normal-header">
                "A Veterinary You And Your Little Friend Can Trust."
              </h2>
            </div>
            <div class="h-[100px] md:h-[150px] lg:h-[70px] aspect-square">
              <div
                class="bg-center rounded-full bg-contain h-full bg-no-repeat bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/im-image-section-07-v2.jpg')]"
              ></div>
            </div>
            <div class="w-full lg:w-[30%] h-[60px] ml-[10px]">
              <div
                class="bg-contain contrast-0 bg-center bg-no-repeat h-full bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/img-shape-13.png')]"
              ></div>
            </div>
            <div class="ml-5 text-center lg:text-right">
              <p
                class="description mb-0 mt-2 leading-[1.8em] text-no whitespace-nowrap text-gray-text"
              >
                Mary. L. Sanches
              </p>
              <p
                class="accent-text font-jost text-[15px] font-semibold uppercase leading-fwide tracking-wider"
              >
                Client
              </p>
            </div>
          </TransitionBase>
          <TransitionBase
            :y="{ value: 300, duration: 900 }"
            :opacity="{ duration: 200 }"
            trigger="visibleOnce"
            class="max-md:rounded-b-[50px] max-lg:rounded-br-[50px] lg:rounded-r-[100px] w-full md:w-1/2 lg:w-1/3 bg-white p-5 md:max-lg:p-7 lg:p-10 flex md:max-lg:justify-between justify-center items-center md:max-lg:flex-col"
          >
            <div
              class="max-ssm:h-[75px] md:max-lg:h-[150px] h-[100px] aspect-square relative z-10"
            >
              <div
                class="bg-cover bg-no-repeat absolute w-full left-0 md:max-lg:ml-0 ml-5 h-full rounded-full bg-center bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/cute-tabby-cat-with-green-eyes-lying-on-bright-yellow-bean-bag-.jpg')]"
              ></div>
            </div>
            <div
              class="max-ssm:h-[100px] md:max-lg:h-[200px] h-[150px] aspect-square relative"
            >
              <div
                class="bg-cover bg-no-repeat absolute w-full md:max-lg:mr-0 mr-5 right-0 h-full rounded-full bg-center bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/black-schnauzer-cowboy-dog-2022-08-11-19-54-34-utc-min.jpg')]"
              ></div>
            </div>
          </TransitionBase>
        </div>
      </div>
    </section>
    <section
      ref="services"
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
          <div
            class="section-header-container w-full text-center mb-5 md:mb-10"
          >
            <TransitionBase
              :y="{ value: 300, duration: 900 }"
              :opacity="{ duration: 200 }"
              trigger="visibleOnce"
            >
              <p class="styled-header leading-fwide text-[22px] mb-4">
                Our Services
              </p>
            </TransitionBase>
            <TransitionBase
              :y="{ value: 300, duration: 900 }"
              :opacity="{ duration: 200 }"
              trigger="visibleOnce"
            >
              <h2 class="section-header">What we offer</h2>
            </TransitionBase>
          </div>
          <div class="w-full flex flex-wrap">
            <TransitionBase
              :y="{ value: 300, duration: 900 }"
              :opacity="{ duration: 200 }"
              trigger="visibleOnce"
              class="w-full lg:w-1/3"
            >
              <TemplatesServiceCard
                icon="cil:dog"
                header="Hond Uitlaten"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                :price="10"
                period="wandeling"
              />
            </TransitionBase>
            <TransitionBase
              :y="{ value: 300, duration: 900 }"
              :opacity="{ duration: 200 }"
              trigger="visibleOnce"
              class="w-full lg:w-1/3"
            >
              <TemplatesServiceCard
                icon="cil:house"
                header="Opvang"
                extra="Bij u of mij thuis."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                :price="15"
                period="dag en/of dagdeel"
              />
            </TransitionBase>
            <TransitionBase
              :y="{ value: 300, duration: 900 }"
              :opacity="{ duration: 200 }"
              trigger="visibleOnce"
              class="w-full lg:w-1/3"
            >
              <TemplatesServiceCard
                icon="cil:cat"
                header="Opvang"
                extra="Katten, konijnen of vogels"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                price="7,50"
                period="dag en/of dagdeel"
              />
            </TransitionBase>
          </div>
          <div class="mx-auto mt-7">
            <TransitionBase
              :opacity="{ duration: 700, delay: 1000 }"
              trigger="visibleOnce"
            >
              <UiButton
                :text="{ string: 'Neem contact', color: 'white' }"
                link="/"
                type="pill-but btn-primary hover:btn-accent padded z-5 max-w-full"
                :appendIcon="{
                  icon: {
                    name: 'fluent:calendar-arrow-counterclockwise-16-filled',
                    color: 'white',
                  },
                }"
              />
            </TransitionBase>
          </div>
        </div>
      </div>
    </section>
    <section class="element-section py-[30px]">
      <div class="element-container relative">
        <div
          class="bg-accent2/30 absolute left-3 -top-5 aspect-square h-[100px] rounded-full z-0"
        ></div>
        <TransitionBase
          :y="{ value: 300, duration: 350, delay: 500 }"
          :opacity="{ duration: 350, delay: 500 }"
          trigger="visibleOnce"
          class="bg-accent3 absolute left-0 top-16 aspect-square h-[15px] rounded-full z-0"
        ></TransitionBase>
        <TransitionBase
          :scale="{ value: 0.6, duration: 800, delay: 500 }"
          :opacity="{ duration: 800, delay: 500 }"
          trigger="visibleOnce"
          class="aspect-square w-[200px] md:w-[250px] absolute rotate-180 right-0 md:right-24 -top-20 bg-accent/40"
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
        <div class="w-full flex flex-wrap z-10">
          <TransitionBase
            :y="{ value: 300, duration: 370, delay: 200 }"
            :opacity="{ duration: 370, delay: 200 }"
            trigger="visibleOnce"
            class="w-full md:max-lg:w-1/2 lg:w-1/4"
          >
            <templatesStatCard
              amount="10"
              description="Totaal tevreden klanten"
            />
          </TransitionBase>
          <TransitionBase
            :y="{ value: 300, duration: 470, delay: 320 }"
            :opacity="{ duration: 470, delay: 320 }"
            trigger="visibleOnce"
            class="w-full md:max-lg:w-1/2 lg:w-1/4"
          >
            <templatesStatCard
              amount="10"
              description="Totaal tevreden klanten"
            />
          </TransitionBase>
          <TransitionBase
            :y="{ value: 300, duration: 540, delay: 400 }"
            :opacity="{ duration: 540, delay: 400 }"
            trigger="visibleOnce"
            class="w-full md:max-lg:w-1/2 lg:w-1/4"
          >
            <templatesStatCard
              amount="10"
              description="Totaal tevreden klanten"
            />
          </TransitionBase>
          <TransitionBase
            :y="{ value: 300, duration: 580, delay: 500 }"
            :opacity="{ duration: 580, delay: 500 }"
            trigger="visibleOnce"
            class="w-full md:max-lg:w-1/2 lg:w-1/4"
          >
            <templatesStatCard
              amount="10"
              description="Totaal tevreden klanten"
            />
          </TransitionBase>
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
