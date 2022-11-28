<template>

    <header class="header">
                
        
        <router-link to="/" class="logo">
            <div id="center-circle">
                <img src="@/img/logo.png">
            </div>
        </router-link>

        <div class="search-box">
            
            <input class="search-txt" type="search" name="search" placeholder="Type to search" v-model="search">
            
            <a class="search-btn"><i class="fas fa-search" @click="searchBook"/></a>
          
        </div>
        
        <div class="header-right">

            <router-link to="/" :class="{active: home}">Home</router-link>
            <router-link to="/books" :class="{active: livros}">Livros</router-link>
            <router-link to="/contact" :class="{active: contato}">Contato</router-link>
            <router-link to="/about" :class="{active: sobre}">Sobre</router-link>
            <router-link to="/cart"><img class="icon" src="@/img/cart.png" /></router-link>
            <router-link to="/profile"><img class="icon" src="@/img/user.png" /></router-link>

        </div>

        <Dashboard />

    </header>

    

</template>

<script>

import Dashboard from '@/components/Dashboard.vue';
import { menuStore } from '@/store/menu'
import { bookStore } from '@/store/books';

  export default
  {
    name: 'Header',

    components:{Dashboard},

    data()
    {
        return {

            search: null,
            home: false,
            livros: false,
            contato: false,
            sobre:false,
        }
    },

    watch:
    {

        $route() {
             this.$nextTick(this.menu);
             menuStore().page = ""
        }

    },
 
    methods:{

        menu(){
        
            switch (menuStore().page) {

                case "Home":

                    this.home = true
                    this.contato = false
                    this.sobre = false
                    this.livros = false

                    break
                
                case "Contato":

                    this.home = false
                    this.contato = true
                    this.sobre = false
                    this.livros = false

                    break
                
                case "Sobre":

                    this.home = false
                    this.contato = false
                    this.sobre = true
                    this.livros = false
                    
                    break
                
                case "Livros":

                    this.home = false
                    this.contato = false
                    this.sobre = false
                    this.livros = true
                
                    break
                
                default:

                    this.home = false
                    this.contato = false
                    this.sobre = false
                    this.livros = false

                    break

            }

        },

        searchBook()
        {
          
          bookStore().searchResult = bookStore().books.filter(book => String(book.title).toLowerCase().includes(this.search.toLowerCase()))

          bookStore().filterReference = bookStore().searchResult

          this.$router.push("/search");

        }       

    }

  }

</script>