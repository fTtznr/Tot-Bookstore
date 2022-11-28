<template>

    <div class="book-details">

        <div class="book-cover">
            <img :src="book.coverImg">
        </div>

        <div class="book-details-info">

            <p v-if="!title">
                <span class="label">{{book.title}} </span> 
                <span class="edit" v-show="session.user.admin" @click="() => title = !title">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Título: </span> 
                <input type="text" v-model="book.title"> 
                <span class="edit" @click="() => {title = !title; books.updateBook(book)}">Salvar</span>
            </p>


            <p v-if="!description">
                {{book.description}} 
                <span class="edit" v-show="session.user.admin" @click="() => description = !description">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Título: </span> 
                <textarea v-model="book.description" rows="10" cols="100"/>
                <span class="edit" @click="() => {description = !description; books.updateBook(book)}">Salvar</span>
            </p>


            <p>
                <audio controls>
                    <source src="@/audio/heheBoi.mp3" type="audio/mp3">
                </audio>
            </p>


            <p v-if="!author">
                <span class="label">Autor:</span> 
                {{book.author}} 
                <span class="edit" v-show="session.user.admin" @click="() => author = !author">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Autor:</span> 
                <input type="text" v-model="book.author"> 
                <span class="edit" @click="() => {author = !author; books.updateBook(book)}">Salvar</span>
            </p>


            <p v-if="!edition">
                <span class="label">Edição:</span> 
                {{book.edition}} 
                <span class="edit" v-show="session.user.admin" @click="() => edition = !edition">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Edição:</span> 
                <input type="text" v-model="book.edition"> 
                <span class="edit" @click="() => {edition = !edition; books.updateBook(book)}">Salvar</span>
            </p>



            <p v-if="!pages">
                <span class="label">Nº de páginas:</span> 
                {{book.pages}} 
                <span class="edit" v-show="session.user.admin" @click="() => pages = !pages">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Nº de páginas:</span> 
                <input type="number" step="1" v-model="book.pages"> 
                <span class="edit" @click="() => {pages = !pages; books.updateBook(book)}">Salvar</span>
            </p>



            <p v-if="!publisher">
                <span class="label">Editora:</span> 
                {{book.publisher}} 
                <span class="edit" v-show="session.user.admin" @click="() => publisher = !publisher">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Editora:</span> 
                <input type="text" v-model="book.publisher"> 
                <span class="edit" @click="() => {publisher = !publisher; books.updateBook(book)}">Salvar</span>
            </p>


            <p v-if="!publishDate">
                <span class="label">Data de Publicação:</span> 
                {{book.publishDate}} 
                <span class="edit" v-show="session.user.admin" @click="() => publishDate = !publishDate">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">Data de Publicação:</span> 
                <input type="text" v-model="book.publishDate"> 
                <span class="edit" @click="() => {publishDate = !publishDate; books.updateBook(book)}">Salvar</span>
            </p>


            <p v-if="!isbn">
                <span class="label">ISBN:</span> 
                {{book.isbn}} 
                <span class="edit" v-show="session.user.admin" @click="() => isbn = !isbn">Editar</span>
            </p>
            
            <p v-else>
                <span class="label">ISBN:</span> 
                <input type="text" v-model="book.isbn"> 
                <span class="edit" @click="() => {isbn = !isbn; books.updateBook(book)}">Salvar</span>
            </p> 
            

            <p v-if="!price && book.price" class="priceBox">
            
                <span class="label">R$ {{book.price}}</span> 
                <span class="edit" v-show="session.user.admin" @click="() => price = !price">Editar</span>
                
            </p>

            <p v-else>
                <span class="label">
                    R$ <input type="text"  v-show="session.user.admin" v-model="book.price"> 
                </span> 
                <span class="edit" v-show="session.user.admin" @click="() => {price = !price; books.updateBook(book)}">Salvar</span>
            </p>

            <p v-if="book.price>0 && book.quantity > 0"><span class="label">  </span><AddtoCart :book="book"/></p>
            <p v-else>Indisponível</p>


            <div v-if="session.isLoggedIn && session.user.admin">

                <p class="priceBox" v-if="!quantity">
                    <span class="label">Quantidade em Estoque: </span> 
                    {{book.quantity}} 
                    <span class="edit" v-show="session.user.admin" @click="() => quantity = !quantity">Editar</span>
                </p>
                
                <p v-else>
                    <span class="label">Quantidade em Estoque:</span> 
                    <input type="text" v-model="book.quantity"> 
                    <span class="edit" @click="() => {quantity = !quantity; books.updateBook(book)}">Salvar</span>
                </p>

                <p><Confirmation :data="data" @confirm="deleteBook(book.id)"/></p>     

            </div>
            

        </div>

    </div>

</template>


<script>

import AddtoCart from '@/components/AddtoCart.vue';
import Confirmation from '@/components/Confirmation.vue';
import { bookStore } from '@/store/books';
import { sessionStore } from '@/store/session';

export default
 {
 
    name: "Book",

    components: {
        AddtoCart,
        Confirmation 
    },

    data(){

        return{

            book: null,
            books: null,
            session: null,
            data: null,
            title:false,
            description: false,
            isbn: false,
            author:false,
            edition:false,
            pages: false,
            publisher: false,
            publishDate: false,
            price: false,
            quantity: false

        }

    },

    created(){

        this.books = bookStore()
        this.book = this.books.lastSeen
        this.session = sessionStore()

        this.data = {

            title: "Excluir",
            msg: "Tem certeza que deseja excluir este Livro?",
            confirmOption: "Excluir"
        }

    },

    methods:{

        deleteBook(bookId){

            this.books.deleteBook(bookId)

            //confirmacao
            //verificar o carrinhho

            this.$router.push("/");

        },

    }
 
 }

</script>

<style scoped>

input{
    width: auto;
}
.label{
    font-weight: bold;
}

.edit{

    cursor: pointer;
    color:var(--dark-blue);
    margin-left: 10px;

}
.edit:hover{

    color:var(--blue);
    

}
</style>