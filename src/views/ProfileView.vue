<template>

    <div>
    
        <div class="center">
            <Message :msg="msg" v-show="msg" />
            <img class="small" src="@/img/user.png">
        </div>
        
        <div class="profile">

            <div v-show="!session.isLoggedIn">     

                <div class="signup" v-show="createAccount">

                    <h2>Sign Up</h2>

                    <form @submit="signUp">

                        <label for="nameSignUp">Nome:</label><br>
                        <input type="text" id="nameSignUp" name="nameSignUp" required v-model="suName"><br><br>
                        
                        <label for="emailSignUp">Email:</label><br>
                        <input type="email" id="emailSignUp" name="emailSignUp" required v-model="suEmail"><br><br>
                        
                        <label for="passwordSignUp">Senha:</label><br>
                        <input type="password" id="passwordSignUp" name="passwordSignUp" required v-model="suPassword"><br><br>
                        
                        <input type="submit" value="Criar"><br><br>

                    </form>
                    
                </div>

                <div class="login" v-show="!createAccount">

                    <h2>Login</h2>

                    <form @submit="login">

                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email" required v-model="email"><br><br>
                        
                        <label for="password">Senha:</label><br>
                        <input type="password" id="password" name="password" required v-model="password"><br><br>
                        
                        <input type="submit" value="Entrar"><br><br>

                    </form>

                </div>

                <div class="suggestion" @click="changeForm">{{suggestion}}</div>    

            </div>    

            <Dashboard />

        </div>

    </div>
    
</template>


<script>

import Message from '@/components/Message.vue'
import Dashboard from '@/components/Dashboard.vue'
import { sessionStore } from '@/store/session'


export default {

    name: 'Profile',

    components: {
        Message,
        Dashboard
    },

    data() {

        return {

            email: null,
            password: null,
            suName: null,
            suEmail: null,
            suPassword: null,
            isLogged: false,
            createAccount: false,
            suggestion: "Criar uma conta",
            msg: null,
            session:null

        }

    },

    created(){

        this.session = sessionStore()
    
    },

    mounted(){

        if(this.session.checkout) this.msg = "Por favor, autentique-se ou crie um nova conta para finalizar o seu pedido."

    },


    methods: {  

       async signUp(e) {

            e.preventDefault()

            const data = {

                name: this.suName,
                email: this.suEmail,
                password: this.suPassword,
                admin:false

            }

            const dataJSON = JSON.stringify(data)

            const req = await fetch("http://localhost:3000/users", {

                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: dataJSON
            })

            const res = await req.json()
            
            this.suName = null
            this.suEmail = null
            this.suPassword = null

            this.changeForm()

            this.msg = "Conta criada com sucesso! Autentique-se pela primeira vez."

       }, 

       async login(e) {

            e.preventDefault()

            const req = await fetch("http://localhost:3000/users")
            const users = await req.json()

            let found = false
            let user = null

            for(let u of users){

                if( (u.email === this.email) && (u.password === this.password) ) {

                    found = true
                    user = u
                    break

                }

            }

            if(found) {

                let session = sessionStore()

                session.isLoggedIn = true
                session.user = user

                
                if(this.session.checkout) this.$router.push("/checkout");
                else this.$router.push("/");
            
            } else this.msg = "Usuário ou senha incorretos!"

        },
        
        changeForm(){
            
            this.createAccount = !this.createAccount

            if(this.createAccount) this.suggestion = "Log in"
            else this.suggestion = "Criar uma conta"
        }

    }

}

</script>