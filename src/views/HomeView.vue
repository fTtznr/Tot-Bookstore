<template>

  <div>

    <div class="slideshow">

      <img class="mySlides" src="@/img/bookCover/banner01.jpg">
      <img class="mySlides" src="@/img/bookCover/banner02.jpg">
      <img class="mySlides" src="@/img/bookCover/banner03.jpg">
      <img class="mySlides" src="@/img/bookCover/banner04.jpg">
      
      <button class="slide-button display-left" @click="plusDivs(-1)">&#10094;</button>
      <button class="slide-button display-right" @click="plusDivs(1)">&#10095;</button>

    </div>

    <button @click="topFunction()" id="scroll-button"><img class="icon" src="@/img/uparrow.png"></button>
  
    <h1 class="center">Destaques</h1>

    <ProductBox />

  </div>

</template>


<script>

import ProductBox from '@/components/ProductBox.vue'
import { menuStore } from '@/store/menu'
import { bookStore } from '@/store/books'

export default
{
  name: "Home",

  components: 
  { 
    ProductBox
  },

  data()
  {
    return {
  
      slideIndex: null
    
    }
  },

  mounted(){

    bookStore().home()
    
    menuStore().page = "Home"

    this.slideIndex = 1
    this.showDivs(this.slideIndex)

  },

  methods:{

    plusDivs(n){
      this.showDivs(this.slideIndex += n)
    },

    showDivs(n) {
      
      var i;
      var x = document.getElementsByClassName("mySlides");
      
      if(n > x.length){
        this.slideIndex = 1
      }
      
      if(n < 1){
        this.slideIndex = x.length
      }
      
      for(i = 0; i < x.length; i++){
        x[i].style.display = "none";  
      }
      
      x[this.slideIndex-1].style.display = "block";  
    
    }

  }

}

</script>