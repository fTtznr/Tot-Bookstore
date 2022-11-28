<template>

    <div id="about">
  
      <h2>Pedido Realizado!</h2>
  
      <p>
        Obrigado por comprar na Tot Bookstore.
      </p>
  
    </div>
    
  </template>
  
  <script>
  
    import { cartStore } from '@/store/cart'
    import { sessionStore } from '@/store/session'
    import { bookStore } from '@/store/books'
  
    export default {
    
        mounted(){

            bookStore().changeQuantity(cartStore().items)
            cartStore().checkout(sessionStore().user.id)
            sessionStore().checkout = false
    
        }
  
  }
  
  </script>