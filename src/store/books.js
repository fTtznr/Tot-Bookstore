import { defineStore } from "pinia"
import { ref, reactive } from 'vue'


export const bookStore = defineStore("books", {

    state: () => {

        return {

            books: null,
            lastSeen: null,
            searchResult: reactive(null),
            highlights: null,
            deleteCounter: 0,
            filterReference: null

        }

    },

    actions:{

        async initBooks()
        {
  
            try{

                const req = await fetch("http://localhost:3000/books")
            
                this.books = await req.json()
                this.highlights = this.books.sort( (a, b) =>  b.likedPercent - a.likedPercent).slice(0,15)
                this.searchResult = this.highlights
                this.lastSeen = null,
                this.filterReference = null
                
            } catch (error) {}
            
            
        },

        home(){
            this.searchResult = this.highlights
        },

        async deleteBook(bookId)
        { 
            try{

                const req = await fetch(`http://localhost:3000/books/${bookId}`, {

                    method: "DELETE",
    
                })
            
                const res = await req.json()
    
                this.initBooks() 
                
            } catch (error) {}
        
        },

        async updateBook(book)
        { 
            try{

                const dataJSON = JSON.stringify(book)
            
                const req = await fetch(`http://localhost:3000/books/${book.id}`, {

                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: dataJSON

                })

                const res = await req.json()

                this.initBooks()
 
            } catch (error) {}  
        
        },

        changeQuantity(items){

            let cloneItems =  JSON.parse(JSON.stringify(items));
            
            for(let item of cloneItems) 
            {
                item.quantity -= item.qtde
                delete item.qtde
                this.updateBook(item)

            } 

        }
        
    }


})