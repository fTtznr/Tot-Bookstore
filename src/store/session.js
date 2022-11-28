import { defineStore } from "pinia"

export const sessionStore = defineStore("session", {

    state: () => {

        return {

            isLoggedIn: true,
            user: {
                admin: true,
                name: "adm",
                id: 1
            },
            checkout: false

        }

    },

    actions:{

        logout(){

            this.isLoggedIn = false
            this.user = {admin: false}

        },

        async deleteAccount(){

            try{
                
                const req = await fetch(`http://localhost:3000/users/${this.user.id}`, {

                    method: "DELETE",
    
                })
            
                const res = await req.json()
    
                this.logout()  

            } catch (error) {}

        },

        async updateUser()
        { 
            try{

                const dataJSON = JSON.stringify(this.user)
            
                const req = await fetch(`http://localhost:3000/users/${this.user.id}`, {
    
                    method: "PATCH",
                    headers: {"Content-Type": "application/json"},
                    body: dataJSON
    
                })
    
                const res = await req.json()
                
            } catch (error) {}
  
        
        }

    }


})