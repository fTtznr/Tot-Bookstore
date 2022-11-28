<template>

    <div>
    
        <div class="center">
            <Message :msg="msg" v-show="msg" />
            <img class="small" src="@/img/user.png">
        </div>
        
        <div class="profile">

            <div v-show="session.isLoggedIn && session.user.admin">     

                <div class="signup">

                    <h2>Criar novo Administrador</h2>

                    <form @submit="signUpAdm">

                        <label for="nameAdm">Nome:</label><br>
                        <input type="text" id="nameAdm" name="nameAdm" required v-model="name"><br><br>
                        
                        <label for="emailAdm">Email:</label><br>
                        <input type="email" id="emailAdm" name="emailAdm" required v-model="email"><br><br>
                        
                        <label for="passwordAdm">Senha:</label><br>
                        <input type="password" id="passwordAdm" name="passwordAdm" required v-model="password"><br><br>
                        
                        <input type="submit" value="Criar novo Administrador"><br><br>

                    </form>
                    
                </div>

            </div>    

        </div>

    </div>
    
</template>


<script>

import Message from '@/components/Message.vue'
import { sessionStore } from '@/store/session'


export default {

    name: 'AddAdmin',

    components: {
        Message
    },

    data() {

        return {

            name: null,
            email: null,
            password: null,
            msg: null,
            session:null

        }

    },

    created(){

        this.session = sessionStore()
    
    },


    methods: {  

       async signUpAdm(e) {

            e.preventDefault()

            const data = {

                name: this.name,
                email: this.email,
                password: this.password,
                admin: true

            }

            const dataJSON = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/users", {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJSON
            })

            const res = await req.json()
            
            this.name = null
            this.email = null
            this.password = null

            this.msg = "Conta criada com sucesso! Autentique-se pela primeira vez."

       }

    }

}

</script>