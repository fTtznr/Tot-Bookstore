import { defineStore } from "pinia"

export const cartStore = defineStore("cart", {

    state: () => {

        return {

            items: []

        }

    },

    actions:{

        addCart(book)
        {

            if(this.items){

                let inCart = false

                for(let item of this.items)
                {
                    if(item.id === book.id) 
                    {

                        item.qtde += 1
                        inCart = true
                        break
                    
                    }

                }

                if(!inCart) 
                {
                    book.qtde = 1
                    this.items.push(book)
                }

            }else{

                book.qtde = 1
                this.items = [book]
            }

        },

        searchCart(book){

            let index = -1
            
            for(const [i, item] of this.items.entries())
            {

                if(item.id === book.id) 
                {

                    index = i
                    break
                
                }

            }

            return index

        },

        removeItem(book){

            let index = this.searchCart(book)

            if(index != -1) this.items.splice(index, 1)

        },

        increase(book){

            let item = this.items[this.searchCart(book)] 

            if(item.qtde < item.quantity ) item.qtde++

        },

        decrease(book){

            let item = this.items[this.searchCart(book)] 
 
            if(item.qtde > 1) item.qtde--
              
        },

        async checkout(userID) {

            try {

                let books = []

                for(let item of this.items) {

                    books.push(
                    {
                        book: item.id,
                        qtde: item.qtde
    
                    })

                }
                
                const data = {

                    items: books,
                    user: userID,
                    date: new Date().toJSON()
    
                }

                console.log(data)
    
                const dataJSON = JSON.stringify(data)
    
                const req = await fetch("http://localhost:3000/orders", {
    
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: dataJSON
                })
    
                const res = await req.json()
                
                this.items = []
                
            } catch (error) {}

        }

    },

    getters: {

        totalPrice(){

            let total = 0

            if(this.items)
            {

                for(let item of this.items) total += item.qtde * item.price

            }

            return total

        }

    }

})