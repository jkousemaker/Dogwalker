<template>
  <header class="p-elongated-wide flex sticky top-0 z-50 max-h-24">
    <BaseLogo />

    <nav class="flex flex-row gap-5 z-50 group max-smx:hidden">
      <UiButton
        :text="{ string: 'Home', color: 'black' }"
        link="/"
        type="btn-link btn-accent group-hover:after:brightness-[.3] group-hover:after:contrast-[.3] group-hover:-translate-y-1 origin-top after:origin-top hover:after:!brightness-100 hover:after:!contrast-[1] hover::after:scale-x-100 hover:after:translate-y-0 hover:after:opacity-100 hover:px-6 transition-all"
        class=""
      ></UiButton>
      <UiButton
        :text="{ string: 'Informatie', color: 'black' }"
        link="/about"
        @click="console.log($event.target)"
        type="btn-link btn-accent group-hover:after:brightness-[.3] group-hover:after:contrast-[.3] group-hover:-translate-y-1 origin-top after:origin-top hover:after:!brightness-100 hover:after:!contrast-[1] hover::after:scale-x-100 hover:after:translate-y-0 hover:after:opacity-100 hover:px-6 transition-all"
      />
      <UiButton
        :text="{ string: 'Contact', color: 'black' }"
        link="/contact"
        type="btn-link btn-accent group-hover:after:brightness-[.3] group-hover:after:contrast-[.3] group-hover:-translate-y-1 origin-top after:origin-top hover:after:!brightness-100 hover:after:!contrast-[1] hover::after:scale-x-100 hover:after:translate-y-0 hover:after:opacity-100 hover:px-6 transition-all"
      />
      <UiButton
        :text="{ string: 'Gallerij', color: 'black' }"
        link="/gallery"
        type="btn-link btn-accent group-hover:after:brightness-[.3] group-hover:after:contrast-[.3] group-hover:-translate-y-1 origin-top after:origin-top hover:after:!brightness-100 hover:after:!contrast-[1] hover::after:scale-x-100 hover:after:translate-y-0 hover:after:opacity-100 hover:px-6 transition-all"
      />
    </nav>
    <div class="md:flex-1"></div>
  </header>
</template>
