<template>
  <section class="container-fluid p-0">
    <div>
      <b-carousel 
        id="carousel1"
        :interval="4000"
        v-model="slide"
        style="text-shadow: 1px 1px 2px #333;"
        controls
        indicators
        background="#ccc"
        img-width="1920"
        img-height="600"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide  
          img-src="https://picsum.photos/1920/600/?image=70">
          <div class="caption">
            <h1 class="title">
              Playground Website
            </h1>
            <h2 
              v-if="name === undefined" 
              class="subtitle">
              Welcome to my playground website
            </h2>
            <h2 
              v-else 
              class="subtitle">
              Welcome back {{ name }}
            </h2>
          </div>
        </b-carousel-slide>

        <!-- Text slides with image -->
        <b-carousel-slide 
          caption="First slide"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
          img-src="https://picsum.photos/1920/600/?image=52"
        />

        <!-- Slides with custom text -->
        <b-carousel-slide img-src="https://picsum.photos/1920/600/?image=54">
          <h1>Hello world!</h1>
        </b-carousel-slide>

        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1920/600/?image=58"/>

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
          <img 
            slot="img" 
            class="d-block img-fluid w-100" 
            src="https://picsum.photos/1920/600/?image=55" 
            alt="image slot">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: this.$store.name
    }
  }
}
</script>

<style>
.container-fluid {
  min-height: 100vh;
  display: flex;
  background-color: #ccc;
}

.title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: inherit;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: inherit;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
