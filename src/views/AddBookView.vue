<template>
    
    <div class="add-book-form">

        <h2 class="center">Adicionar Livro</h2>

        <Message :msg="msg" v-show="msg" />

        <form @submit="createBook">

            <ul>
                <li class="form-field">
                    <label for="title">Título do Livro:</label><br>
                    <input type="text" id="name" name="title" v-model="title"><br><br>
                </li>
                
                <li class="form-field">                    
                    <label for="coverImg">Capa do livro:</label><br>
                    <input type="book-id" id="coverImg" name="coverImg" v-model="coverImg"><br><br>
                </li>                    
                
                <li class="form-field">
                    <label for="author">Autor</label><br>
                    <input type="text" id="author" name="author" v-model="author"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="description">Descrição</label><br>
                    <input type="description" id="description" name="description" v-model="description"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="language">Idioma</label><br>
                    <input type="language" id="language" name="language" v-model="language"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="isbn">ISBN</label><br>
                    <input type="isbn" id="isbn" name="isbn" v-model="isbn"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="genre">Gêneros</label><br>
                    <input type="genre" id="genre" name="genre" v-model="genres"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="bookFormat">Formato</label><br>
                    <input type="bookFormat" id="bookFormat" name="bookFormat" v-model="bookFormat"><br><br>
                </li>
            
                <li class="form-field">
                    <label for="edition">Edição</label><br>
                    <input type="edition" id="edition" name="edition" v-model="edition"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="number-pages">Número de Páginas</label><br>
                    <input type="number-pages" id="number-pages" name="number-pages" v-model="pages"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="publisher">Editora</label><br>
                    <input type="publisher" id="publisher" name="publisher" v-model="publisher"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="publishDate">Data de Publicação</label><br>
                    <input type="publishDate" id="publishDate" name="publishDate" v-model="publishDate"><br><br>
                </li>
        
                <li class="form-field">
                    <label for="characters">Personagens</label><br>
                    <input type="characters" id="characters" name="characters" v-model="characters"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="price">Preço</label><br>
                    <input type="price" id="price" name="price" v-model="price"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="rating">Rating</label><br>
                    <input type="rating" id="rating" name="rating"  v-model="rating"><br><br>
                </li>
                
                <li class="form-field">
                    <label for="quantity">Estoque</label><br>
                    <input type="publishDate" id="quantity" name="quantity" v-model="quantity"><br><br>
                </li>

            </ul>
            <input type="submit" class="center" value="Adicionar Livro">

        </form>

    </div>

</template>

<script>

import { bookStore } from '@/store/books'
import Message from '@/components/Message.vue'


export default {

    name: "AddBook",

    components: {
        Message,
    },

    data(){

        return{

            title: null,
            coverImg: null,
            author: null,
            description: null,
            language: null,
            isbn: null,
            genres: null,
            bookFormat: null,
            edition: null,
            pages: null,
            publisher: null,
            publishDate: null,
            characters: null,
            price: null,
            rating: null,
            quantity: null,
            msg:null

        }


    },

    methods:{

        async createBook(e) {

            e.preventDefault()

            const data = {

                title: this.title,
                coverImg: this.coverImg,
                author: this.author,
                description: this.description,
                language: this.language,
                isbn: this.isbn,
                genres: this.genres,
                bookFormat: this.bookFormat,
                edition: this.edition,
                pages: this.pages,
                publisher: this.publisher,
                publishDate: this.publishDate,
                characters: this.characters,
                price: this.price,
                rating: this.rating,
                quantity: this.quantity,
                likedPercent: 0

            }

            const dataJSON = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/books", {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJSON
            })

            const res = await req.json()

            this.title = null,
            this.coverImg = null,
            this.author = null,
            this.description = null,
            this.language = null,
            this.isbn = null,
            this.genres = null,
            this.bookFormat = null,
            this.edition = null,
            this.pages = null,
            this.publisher = null,
            this.publishDate = null,
            this.characters = null,
            this.price = null,
            this.rating = null,
            this.quantity = null

            this.msg = "Livro cadastrado com sucesso!"

            bookStore().initBooks()

        }, 


    }
   
    
    
}

</script>

<style scoped>

input{

text-align: center;    

}

</style>