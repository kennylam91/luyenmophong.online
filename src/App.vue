<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="page">
    <div id="footer-bar" class="footer-bar-1">
      <a href="" class="active-nav"><i class="fa fa-home"></i><span>Home</span></a>
      <a href=""><i class="fa fa-star"></i><span>Features</span></a>
      <a href=""><i class="fa fa-heart"></i><span>Pages</span></a>
      <a href=""><i class="fa fa-search"></i><span>Search</span></a>
      <a href="" data-menu="menu-settings"><i class="fa fa-cog"></i><span>Settings</span></a>
    </div>

    <!-- <RouterView /> -->
    <!-- <p>hello world</p> -->
    <!-- Menu Settings Highlights-->
    <div class="page-content header-clear-small">
      <div class="card card-style">
        <div class="content mb-0">
          <h1 class="text-center mb-0">Packed with Goodies</h1>
          <p class="text-center color-highlight font-11 mt-n1">The Absolute Best Products & Care for You</p>
          <p class="boxed-text-xl mt-n3">
            Over 10 years of Experience in Building Gorgeous Products only for you! We are Envato Elite.
          </p>
          <div class="divider"></div>
        </div>
        <div class="row me-2 ms-2 mb-0">
          <div class="col-6 text-center">
            <i class="fa fa-trophy color-yellow-dark fa-3x"></i>
            <h2 class="mt-3 mb-1">Future Proof</h2>
            <p>Built to last, with the latest quality code</p>
          </div>
          <div class="col-6 text-center">
            <i class="fab fa-cloudscale color-highlight fa-3x"></i>
            <h2 class="mt-3 mb-1">Powerful</h2>
            <p>Speed, Features and Flexibility all in One!</p>
          </div>
          <div class="col-6 text-center">
            <i class="fa fa-check color-green-dark fa-3x"></i>
            <h2 class="mt-3 mb-1">Easy to Use</h2>
            <p>Customers love our work for it's ease.</p>
          </div>
          <div class="col-6 text-center">
            <i class="fa fa-life-ring color-blue-dark fa-3x"></i>
            <h2 class="mt-3 mb-1">Customer Care</h2>
            <p>We treat others like we want to be treated.</p>
          </div>
        </div>
      </div>

      <div class="card card-style">
        <div class="content mb-4">
          <h1 class="text-center mb-0">Care & Quality</h1>
          <p class="text-center color-highlight font-11 mt-n1 pb-0">No stone left unturned, no aspect overlooked.</p>
          <p class="text-center font-20 mt-n2">
            <i class="fa fa-star color-yellow-dark"></i>
            <i class="fa fa-star color-yellow-dark"></i>
            <i class="fa fa-star color-yellow-dark"></i>
            <i class="fa fa-star color-yellow-dark"></i>
            <i class="fa fa-star color-yellow-dark"></i>
          </p>
          <div class="splide single-slider slider-no-arrows slider-no-dots" id="single-slider-home-quotes">
            <div class="splide__track">
              <div class="splide__list">
                <div class="splide__slide">
                  <h2 class="text-center font-300 line-height-xl content mb-0 mt-0">
                    The code is always great with any Enabled template, the customer support that wins me over always.
                  </h2>
                </div>
                <div class="splide__slide">
                  <h2 class="text-center font-300 line-height-xl content mb-0 mt-0">
                    The best support I have ever had, it's so good I purchased another theme. Highlighy Recommended.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <a href="#"
            class="btn btn-m btn-center-l text-uppercase font-900 bg-red-dark rounded-sm shadow-xl mt-4 mb-0">More
            Testimonials</a>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
