<template>

  <div>
    <Header/>
    <div class="main-container"><router-view/></div>
    <Footer />
  </div>

</template>


<script>

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import { bookStore } from '@/store/books'

  export default
  {
    name: 'App',

    components: 
    { 
      Header, 
      Footer
    },
  
    created()
    {

      bookStore().initBooks()

    }
  
  }

</script>