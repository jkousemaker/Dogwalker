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
            <TransitionVertical
              :y="{ value: 300 }"
              :opacity="{ duration: 500 }"
              class="absolute left-44 top-4 z-0"
            >
              <div class="bg-accent3 aspect-square h-[30px] rounded-full"></div>
            </TransitionVertical>
            <TransitionVertical
              :y="{ value: -600 }"
              :opacity="{ duration: 500 }"
            >
              <p class="styled-header leading-fwide target">Neem contact</p>
            </TransitionVertical>
            <div class="relative">
              <TransitionVertical
                :scale="{ value: 0.6 }"
                :opacity="{ duration: 500 }"
                class="absolute rotate-0 right-0 -top-10"
              >
                <div
                  class="aspect-square w-[100px] md:w-[150px] bg-accent/40"
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
          </div>
          <TransitionVertical
            :scale="{ value: 0 }"
            :opacity="{ duration: 500 }"
          >
            <p class="description mb-10 z-20">
              Auctor augue mauris augue neque gravida in fermentum et
              sollicitudin. Integer malesuada nunc vel risus commodo viverra.
              Vulputate sapien nec sagittis aliquam. Vel fringilla est
              ullamcorper eget nulla facilisi etiam.
            </p>
          </TransitionVertical>
          <div class="w-full flex relative">
            <form
              @submit.prevent="submit()"
              class="w-full flex gap-2 flex-wrap relative z-10"
            >
              <template v-if="msg">
                <p
                  v-if="msg.success"
                  class="text-success font-bold text-xl mb-2"
                >
                  {{ msg.success }}
                </p>
                <p v-else-if="msg.error" class="error-msg">
                  {{ msg.error }}
                </p>
              </template>
              <div class="w-full flex flex-wrap gap-2">
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Voornaam"
                    v-model="form.from_fname"
                    name="fname"
                    id="fname"
                    class="input input-bordered w-full"
                    :class="{
                      'input-error': v$.from_fname.$error,
                    }"
                  />
                  <span
                    class="error-msg text-md leading-none"
                    v-if="v$.from_fname.$error"
                  >
                    {{ v$.from_fname.$errors[0].$message }}
                  </span>
                </div>
                <div class="flex-1">
                  <input
                    type="text"
                    placeholder="Achternaam"
                    v-model="form.from_lname"
                    name="lname"
                    id="lname"
                    class="input input-bordered w-full"
                    :class="{
                      'input-error': v$.from_lname.$error,
                    }"
                  />
                  <span
                    class="error-msg text-md leading-none"
                    v-if="v$.from_lname.$error"
                  >
                    {{ v$.from_lname.$errors[0].$message }}
                  </span>
                </div>
              </div>
              <div class="w-full flex flex-wrap gap-2">
                <div class="w-full lg:flex-1">
                  <input
                    type="text"
                    placeholder="Email Adres"
                    v-model="form.from_email"
                    name="email"
                    id="email"
                    class="input input-bordered w-full"
                    :class="{
                      'input-error': v$.from_email.$error,
                    }"
                  />
                  <span
                    class="error-msg text-md leading-none"
                    v-if="v$.from_email.$error"
                  >
                    {{ v$.from_email.$errors[0].$message }}
                  </span>
                </div>
                <div class="w-full lg:flex-1">
                  <input
                    type="tel"
                    placeholder="Telefoon Nummer"
                    v-model="form.from_phonenumber"
                    name="phonenumber"
                    id="phonenumber"
                    class="input input-bordered w-full"
                    :class="{
                      'input-error': v$.from_phonenumber.$error,
                    }"
                  />
                  <span
                    class="error-msg text-md leading-none"
                    v-if="v$.from_phonenumber.$error"
                  >
                    {{ v$.from_phonenumber.$errors[0].$message }}
                  </span>
                </div>
              </div>
              <div class="w-full">
                <textarea
                  class="textarea textarea-bordered w-full z-10"
                  placeholder="Bericht"
                  name="message"
                  id="message"
                  v-model="form.message"
                  :class="{
                    'textarea-error': v$.message.$error,
                  }"
                ></textarea>
                <span
                  class="error-msg text-md leading-none"
                  v-if="v$.message.$error"
                >
                  {{ v$.message.$errors[0].$message }}
                </span>
              </div>
              <div class="w-full">
                <button
                  type="submit"
                  class="btn pill-but btn-primary hover:btn-accent padded z-5 text-white"
                >
                  <div class="but-text">
                    <p v-if="waiting" class="header">Aan het versturen</p>
                    <p v-else class="header">Verstuur Bericht</p>
                  </div>
                  <span v-if="waiting" class="loading loading-spinner"></span>
                  <Icon v-else name="mingcute:arrow-right-fill" />
                </button>
              </div>
            </form>
          </div>
          <div
            class="bg-gradient-to-tl from-accent2/60 from-20% to-transparent to-80% opacity-50 absolute -right-10 bottom-0 aspect-square h-[200px] rounded-full z-0"
          ></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import emailjs from "@emailjs/browser";
import {
  required,
  email,
  sameAs,
  minLength,
  helpers,
  integer,
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const form = reactive({
  from_fname: "",
  from_lname: "",
  from_email: "",
  from_phonenumber: "",
  message: "",
});

const rules = {
  from_fname: {
    required: helpers.withMessage("Dit mag niet leeg zijn", required),
  },
  from_lname: {
    required: helpers.withMessage("Dit mag niet leeg zijn", required),
  },
  from_email: {
    required: helpers.withMessage("Dit mag niet leeg zijn", required),
    email: helpers.withMessage("Dit moet een geldig email adres zijn.", email),
  },
  from_phonenumber: {
    required: helpers.withMessage("Dit mag niet leeg zijn", required),
  },
  message: {
    required: helpers.withMessage("Dit mag niet leeg zijn", required),
    minLength: helpers.withMessage(
      "Dit moet minimaal 10 letters bevatten",
      minLength(20)
    ),
  },
};

const v$ = useVuelidate(rules, form);

const waiting = ref(false);
const msg = ref({ success: "", error: "" });

const submit = () => {
  v$.value.$validate();

  if (!v$.value.$error) {
    waiting.value = true;
    emailjs
      .send("service_0m1vmm8", "template_u4tre4l", form, "SktjkWGO_u390XAnZ")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          msg.value.success = "Email is succesvol verstuurd.";
          waiting.value = false;
        },
        function (error) {
          console.log("FAILED...", error);
          msg.value.error =
            "Er was een foutmelding, probeer het later opnieuw.";
          waiting.value = false;
        }
      );
  }
};
const appConfig = useAppConfig();

const text = appConfig.title + " | Contact";

const title = ref(text);

useHead({
  title,
});
</script>
