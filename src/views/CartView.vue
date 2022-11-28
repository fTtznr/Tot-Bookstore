<template>

  

    <div class="cart">

        <div v-if="cart.items.length">

            <h1 class="capital center">Carrinho de Compras</h1>

            <div class="cart-product">

                <div class="cart-product-img"></div>

                <div class="cart-product-info">

                    <div class="cart-product-details">Título</div>

                    <div class="cart-product-details">Preço unitário</div>

                    <div class="cart-product-details">Quantidade</div>

                    <div class="cart-product-details icon">Remover</div>

                </div>
                
            </div>

            <div class="cart-product" v-for="book in cart.items" :key="book.id">
                
                <div class="cart-product-img">
                    <img :src="book.coverImg"  @click="bookDetail(book)">
                </div>

                <div class="cart-product-info">

                    <div class="cart-product-details">
                        {{book.title}}
                    </div>

                    <div class="cart-product-details">
                        {{book.price}}
                    </div>

                    <div class="cart-product-details">
                       <button @click="cart.decrease(book)">-</button> {{book.qtde}} <button @click="cart.increase(book)">+</button> 
                    </div>

                    <div class="cart-product-details icon trash">
                        <i class="fa-solid fa-trash-can" @click="cart.removeItem(book)" />
                    </div>

                </div>

            </div> 

            <div class="center" v-if="cart.totalPrice !=0"> 
                <strong>Total: R$ {{ cart.totalPrice.toFixed(2) }}</strong>
                <br><br>
                <button @click="checkout">Finalizar Pedido</button>
            </div>

        </div>

        <div v-else>

            <h1 class="capital center">Seu carrinho está vazio!</h1>

        </div>
                    
    </div> 

</template>


<script>
import { cartStore } from '@/store/cart'
import { bookStore } from '@/store/books'
import { sessionStore } from '@/store/session'

export default{

    name: "Cart",

    data(){

        return{

            cart: null
        
        }

    },

    created(){

        this.cart = cartStore()
        
    },

    methods:{

        bookDetail(book){

            bookStore().lastSeen = book
            this.$router.push("/book");

        },

        checkout(){

            if(sessionStore().isLoggedIn) this.$router.push("/checkout");

            else {

                sessionStore().checkout = true
                this.$router.push("/profile");

            }
            
        }

    }

}

</script>

<style scoped>
button {

    background-color: #555555;
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 0 auto;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    
}

button:hover{
    
    transform: scale(1.15);
    cursor: pointer;
}

</style>