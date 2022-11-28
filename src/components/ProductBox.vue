<template>
   
    <div class="product-box">
         
        <div class="product" v-for="book in bookStore.searchResult" :key="book.id">
 
             <div class="product-img">
                <img :src="book.coverImg" @click="bookDetail(book)">
            </div>
   
             <div class="product-info">
 
                <h3>{{book.title}}</h3> 

                <span v-if="book.price>0 && book.quantity>0" class="price"><h4> R$ {{book.price}}</h4></span> 
                <span v-else>Indisponível</span>

                <p>{{book.description.slice(0,250)}}...</p>

                <p style="text-align:center" v-show="book.price>0 && book.quantity>0"><AddtoCart :book="book"/></p>
             
            </div>

        </div>
     
    </div>
 
 </template>
 
 
 <script>
    
    import { bookStore } from '@/store/books';
    import AddtoCart from './AddtoCart.vue';
 
    export default
    {
    
        name: "ProductBox",

        components: {AddtoCart},

        data(){

            return{

                bookStore: null
            
            }
        
        },

        created(){

           this.bookStore = bookStore()

        },

        methods:
        {

            bookDetail(book){

                this.bookStore.lastSeen = book
                this.$router.push("/book");

            },

        }
    
    }
    
 </script>