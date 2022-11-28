<template>

    <div class="center" v-show="session.isLoggedIn">

        Bem vindo, {{session.user.name}}!<br><br>

        <router-link to="/myInfo">Minhas Informações</router-link><br><br>

        <router-link to="/addCreditCard">Registrar Cartão de Crédito</router-link><br><br>

        <router-link to="/addAddress">Registrar Endereço</router-link><br><br>


        <div v-show="session.user.admin">

            <router-link to="/addBook">Registrar Livro</router-link><br><br>
            <router-link to="/addAdmin">Registrar Administrador</router-link><br><br>

        </div>

        <a href="#" @click="session.logout">Log out</a><br><br>


        <Confirmation :data="data" @confirm="session.deleteAccount"/><br><br>
        
    </div>
    
</template>

<script>

import { sessionStore } from '@/store/session'
import Confirmation from './Confirmation.vue'

export default {

  components: { Confirmation },

    name: "Dashboard",

    data(){

        return{

            session: null,
            
            data: null

        }
    },

    created(){

        this.session = sessionStore()

        this.data = {

            title: "Deletar conta",
            msg: "Tem certeza que deseja deletar a sua conta?",
            confirmOption: "Deletar"
        }
    }

}

</script>

<style scoped>

a{
    text-decoration: none;
    color: var(--dark-blue);
    transition: 500ms;
}

a:hover{
    color: var(--blue);
    transform: scale(1.5);
}

</style>