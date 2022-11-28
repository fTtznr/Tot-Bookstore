<template>

  <div id="about">

    <h2>Sobre</h2>

    <p>
      A maior livraria online desde 1999.
    </p>

  </div>
  
</template>

<script>

import { menuStore } from '@/store/menu'

export default {

  mounted(){

    menuStore().page = "Sobre"

  }

}

</script>