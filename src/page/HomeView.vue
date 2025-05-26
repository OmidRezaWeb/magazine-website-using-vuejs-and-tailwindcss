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
      <div class="font-general-bold text-5xl lg:text-7xl leading-13 lg:leading-24 lg:w-3/6">
        DON'T CLOSE YOUR EYES
      </div>

      <div class="lg:w-3/6">
        <P class="my-5"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit nemo fugiat ad in
          sunt laboriosam! Lorem ipsum dolor sit amet consectetur adipisicing elit. A suscipit nemo
          fugiat ad in sunt laboriosam!</P
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
      <img src="../assets/image/gallery/banner.png" alt="banner" />
    </div>
  </section>
  <!-- news -->
  <section class="p-2 max-w-7xl m-auto grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-3 mt-10">
    <div class="col-span-4 md:col-span-8 lg:col-span-9">
      <!-- news card -->
      <div class="flex flex-col md:flex-row gap-3 border-b border-black pb-16 mt-16">
        <img src="../assets/image/gallery/news-1.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">Hope dies last</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">ART</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 border-b border-black pb-16 mt-16">
        <img src="../assets/image/gallery/news-2.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">The best art museums</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">SCUPTURES</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 border-b border-black pb-16 mt-16">
        <img src="../assets/image/gallery/news-3.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">The devil is the details</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">ART</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 border-b border-black pb-16 mt-16">
        <img src="../assets/image/gallery/news-4.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">An indestructible hope</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">ART</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 border-b border-black pb-16 mt-16">
        <img src="../assets/image/gallery/news-5.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">Street art fastival</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">STREET ART</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col md:flex-row gap-3 pb-16 mt-16">
        <img src="../assets/image/gallery/news-6.png" alt="" class="w-full h-full object-cover" />
        <div class="flex flex-col gap-3 p-2">
          <h4 class="font-general-semibold text-4xl">Through the eyes of steret artist</h4>
          <p class="font-general-regular text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis totam
            amet repudiandae molestias quaerat, iure reiciendis nobis, eligendi vero, ipsam
            doloremque? Eaque reprehenderit, adipisci distinctio repellat repudiandae beatae sunt.
          </p>
          <div class="flex flex-row gap-3 flex-wrap justify-between">
            <div class="">
              <span><strong class="me-2 font-general-semibold">Text </strong> Jakob Gronberg</span>
              <span><strong class="me-2 font-general-semibold">Date </strong>16 .March 2025 </span>
              <span><strong class="me-2 font-general-semibold">Duration </strong> 1 Min</span>
            </div>
            <span class="p-2 border rounded-full px-4 w-fit">STREET ART</span>
          </div>
        </div>
      </div>

      <a href="#" class="flex items-center justify-start gap-3 font-general-semibold mb-20">ALL ARTICLES <img src="../assets/image/icon/arrow-right.png" alt=""></a>
    </div>
    <!-- news sidebar -->
    <div class="hidden lg:block lg:col-span-3">
      <div class="flex flex-col gap-4 items-start mb-10">
        <h6 class="font-general-bold text-base">PULSE MAGAZINE</h6>
        <P class="font-general-regular text-5xl font-general-semibold">03/2025</P>
        <img src="../assets/image/gallery/news-side.png" alt="" />
        <button class="text-lg bg-black text-white p-2">BUTTON</button>
      </div>

      <div class="flex flex-col gap-4 items-start">
        <h6>MOST POPULAR</h6>
        <div class="flex w-full border-b border-black pb-7">
          <span class="font-general-semibold text-2xl w-20">01</span>
          <div class="flex flex-col gap-2">
            <h4 class="font-general-semibold text-2xl">Steet art festival</h4>
            <p><strong class="font-general-semibold">Text </strong> Cristofer Vaccaro</p>
          </div>
        </div>

        <div class="flex w-full border-b border-black pb-7">
          <span class="font-general-semibold text-2xl w-20">02</span>
          <div class="flex flex-col gap-2">
            <h4 class="font-general-semibold text-2xl">Steet art festival</h4>
            <p><strong class="font-general-semibold">Text </strong> Cristofer Vaccaro</p>
          </div>
        </div>

        <div class="flex w-full mb-10">
          <span class="font-general-semibold text-2xl w-20">03</span>
          <div class="flex flex-col gap-2">
            <h4 class="font-general-semibold text-2xl">Steet art festival</h4>
            <p><strong class="font-general-semibold">Text </strong> Cristofer Vaccaro</p>
          </div>
        </div>
        <div class="bg-gray-50 p-4 w-full">
          <h5 class="font-general-semibold my-2">NEWSLETTER</h5>
          <h5 class="font-general-semibold text-3xl">Design News to your inbox</h5>
          <form class="flex flex-wrap justify-end">
            <input type="email" placeholder="Email" class="w-full border-none bg-white p-1 px-2 outline-none my-5"/>
            <button class="bg-black text-white p-2 px-4 font-general-light">Sing Up</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
