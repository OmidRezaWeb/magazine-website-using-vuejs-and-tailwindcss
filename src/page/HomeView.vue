<script setup></script>

<template>
  <!-- hero -->
  <section class="p-2 2xl:p-0 max-w-7xl m-auto">
    <h2
      class="flex items-center justify-between font-general-bold font-black text-6xl md:text-7xl lg:text-9xl my-5"
    >
      <span v-for="(char, index) in 'ART & LIFE'.split('')" :key="index">{{ char }}</span>
    </h2>
    <p
      class="bg-black text-white flex items-center justify-start gap-5 overflow-x-auto whitespace-nowrap p-2 no-scrollbar"
    >
      <span class="font-general-semibold">NEWS TICKER+++</span> Lorem ipsum dolor sit amet,
      consectetur adipisicing elit. Alias voluptate repellendus consequatur facilis.
    </p>
  </section>
  <!-- banner -->
  <section class="p-2 max-w-7xl m-auto flex flex-col gap-3 mt-10">
    <div class="md:flex items-center flex flex-col md:flex-row justify-between gap-3">
      <div class="font-general-bold text-5xl lg:text-7xl leading-13 lg:leading-24  lg:w-3/6">DON'T CLOSE YOUR EYES</div>

      <div class="lg:w-3/6">
        <P class="my-5"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit nemo fugiat ad in
          sunt laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit nemo fugiat ad in
          sunt laboriosam!</P
        >
        <div class="flex flex-col md:flex-row flex-nowrap gap-7">
          <div class="">
            <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
            <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
            <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
          </div>
          <div class="">
            <span class="p-2 border rounded-full px-4">LABEL</span>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <img src="../assets/image/gallery/banner.png" alt="banner">
    </div>


  </section>
</template>
