<template>

    <div>
        <img class="icon, addCart" src="@/img/cart.png" @click="addCart(book)" v-show="!msg"/> 
        <Message :msg="msg" v-show="msg" />
    </div>

</template>

<script>

import { cartStore } from '@/store/cart'
import Message from '@/components/Message.vue'

export default {

    name: "AddtoCart",

    props: {book: Object},

    components:{

        Message
    },
    
    data(){

        return{
            msg: null
        }
    },

    methods:{

        addCart(book)
        {

            cartStore().addCart(book)

            this.msg = "Item adicionado ao carrinho"
            
            setTimeout(() => this.msg ="", 3000)

        }

    }
    
}

</script>