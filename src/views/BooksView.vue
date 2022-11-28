<template>
    <ProductBox />
</template>

<script>

import ProductBox from '@/components/ProductBox.vue'
import { menuStore } from '@/store/menu'
import { bookStore } from '@/store/books'

export default
{
    name: "Books",

    components: 
    { 
      ProductBox
    },

    created(){

      bookStore().searchResult = bookStore().books
      menuStore().page = "Livros"

    }

}

</script>