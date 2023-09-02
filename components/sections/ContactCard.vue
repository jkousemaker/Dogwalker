<template>
  <section class="element-section pt-[30px] pb-0 md:pb-[20px] md:pt-[90px]">
    <div class="element-container relative">
      <div class="w-full flex">
        <div class="m-[10px] flex bg-accent rounded-[60px] w-full relative">
          <div
            class="rounded-[60px] absolute h-full w-full top-0 left-0 bg-[url('https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/img-bg-01-min.jpg')] bg-center bg-no-repeat bg-cover opacity-20 brightness-100 contrast-100 saturate-0 blur-0 hue-rotate-0 bg-blend-multiply"
          ></div>
          <div class="w-full">
            <div class="flex flex-wrap">
              <div class="w-full lg:w-[60%] relative min-h-6 flex">
                <div
                  class="w-full m-[30px] mt-[60px] md:m-[60px] md:ml-[70px] flex items-center flex-wrap"
                >
                  <div class="w-full mb-5">
                    <div class="mb-5 text-center lg:text-start">
                      <h2
                        class="main-header text-white text-[28px] !leading-[1.2em] lg:text-5xl font-normal mb-5"
                      >
                        Book Your Visit Today
                      </h2>
                      <p class="description text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                        dapibus leo.
                      </p>
                    </div>
                  </div>
                  <div class="w-full flex max-lg:justify-center">
                    <UiButton
                      :text="{ string: 'Maak afspraak', color: 'white' }"
                      link="/"
                      type="pill-but btn-primary padded z-5 max-w-full"
                      :appendIcon="{
                        icon: {
                          name: 'fluent:calendar-arrow-counterclockwise-16-filled',
                          color: 'white',
                        },
                      }"
                    />
                  </div>
                </div>
              </div>
              <div
                class="w-full lg:w-[40%] relative min-h-6 flex items-end select-none pointer-events-none"
              >
                <div
                  class="w-full flex items-end content-end -mt-[100px] flex-wrap"
                >
                  <div class="w-full text-center relative">
                    <div class="max-lg:mt-[90px]">
                      <img
                        src="https://bimberonline.com/petvanta/wp-content/uploads/sites/56/2022/05/img-section-01-min.png"
                        alt=""
                        class="max-w-full w-[75%] md:w-[40%] lg:w-[75%] align-middle inline-block h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
