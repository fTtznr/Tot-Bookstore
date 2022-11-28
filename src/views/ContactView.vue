<template>

    <div id="about">

        <h2>Contato</h2>

        <p>tot_bookstore@tot.br</p>

    </div>
   

</template>


<script>

import { menuStore } from '@/store/menu'

export default{

    mounted(){
        menuStore().page = "Contato"
    }
}

</script>