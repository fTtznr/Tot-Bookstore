<template>

    <div class="search">
        
        <div class="remove-book-form">

            <h2 class="center">Aplicar Filtro</h2>

            <form @submit="filterSearch">

                <ul>

                    <li class="form-field">
                        <label for="title">Título do Livro:</label><br>
                        <input type="text" id="title" name="title" v-model="title" ><br><br>
                    </li>
                                  
                    
                    <li class="form-field">
                        <label for="author">Autor</label><br>
                        <input type="text" id="author" name="author" v-model="author"><br><br>
                    </li>

                    <li class="form-field">
                        <label for="isbn">ISBN</label><br>
                        <input type="isbn" id="isbn" name="isbn" v-model="isbn"><br><br>
                    </li>


                    <li class="form-field">
                        <label for="edition">Edição:</label><br>
                        <input type="text" id="edition" name="edition" v-model="edition"><br><br>
                    </li>
                                  
                    
                    <li class="form-field">
                        <label for="publisher">Editora</label><br>
                        <input type="text" id="publisher" name="publisher" v-model="publisher"><br><br>
                    </li>

                    <li class="form-field">
                        <label for="price">Preço:</label><br>
                        <input type="number" id="minPrice" name="minPrice" placeholder="Valor Mínimo" v-model="minPrice"><br>
                        <input type="number" id="maxPrice" name="maxPrice" placeholder="Valor Máximo" v-model="maxPrice"><br><br>
                    </li>

                    <li class="form-field">
                        <label for="quantity">Estoque:</label><br>
                        <input type="number" step="1" min="0" id="quantity" name="quantity" v-model="quantity"><br><br>
                    </li>

                    
                </ul>

                <br><br>

                <input type="submit" class="center" value="Buscar Livro">

            </form>

        </div>

        <ProductBox />

    </div>

</template>

<script>

import ProductBox from '@/components/ProductBox.vue'
import { bookStore } from '@/store/books'

export default
{
    name: "Search",

    components: 
    { 
      ProductBox
    },
    
    data(){

        return{

            title: null, 
            author: null,
            isbn: null, 
            edition: null,
            publisher: null,
            minPrice: null,
            maxPrice: null,
            quantity: null


        }
    },
     
    methods:{

        filterSearch(e){

            e.preventDefault()

            bookStore().searchResult = bookStore().filterReference

            bookStore().searchResult = bookStore().searchResult.filter(book => {


                let title = true 
                let author = true
                let isbn = true 
                let edition = true
                let publisher = true
                let minPrice = true
                let maxPrice = true
                let quantity = true


                if(this.title) title = (book.title.toLowerCase().includes(this.title.toLowerCase())) ? true: false
                if(this.author) author = (book.author.toLowerCase().includes(this.author.toLowerCase())) ? true: false
                if(this.isbn) isbn = (book.isbn == this.isbn) ? true: false
                if(this.edition) edition = (book.edition.toLowerCase().includes(this.edition.toLowerCase())) ? true: false
                if(this.publisher) publisher = (book.publisher.toLowerCase().includes(this.publisher.toLowerCase())) ? true: false
                if(this.minPrice) minPrice = (book.price >= this.minPrice) ? true: false
                if(this.maxPrice) maxPrice = (book.price <=  this.maxPrice) ? true: false
                if(this.quantity) quantity = (book.quantity == this.quantity) ? true: false

                return( 
                    title && 
                    author &&
                    isbn && 
                    edition &&
                    publisher &&
                    minPrice &&
                    maxPrice &&
                    quantity
                )
            

            })

        }

    }
    

}

</script>

<style scoped>

input{

    text-align: center;

}

</style>