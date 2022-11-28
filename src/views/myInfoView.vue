<template>

    <div class="center">

        
        <div class="book-details">

            <div class="book-cover">
                <img src="@/img/user.png">
            </div>

            <div class="book-details-info">

                <p v-if="!name">
                    <span class="label">{{session.user.name}}</span> 
                    <span class="edit" @click="() => name = !name">Editar</span>
                </p>
                
                <p v-else>
                    <span class="label">Nome:</span> 
                    <input type="text" v-model="session.user.name"> 
                    <span class="edit" @click="() => {name = !name; session.updateUser()}">Salvar</span>
                </p>
                

                <p v-if="!email">
                    <span class="label">Email:</span> 
                    {{session.user.email}} 
                    <span class="edit" @click="() => email = !email">Editar</span>
                </p>
                
                <p v-else>
                    <span class="label">Email:</span> 
                    <input type="text" v-model="session.user.email"> 
                    <span class="edit" @click="() => {email = !email; session.updateUser()}">Salvar</span>
                </p>

                <p v-if="!password">
                    <span class="label">Senha:</span> 
                    {{session.user.password}} 
                    <span class="edit" @click="() => password = !password">Editar</span>
                </p>
                
                <p v-else>
                    <span class="label">Senha:</span> 
                    <input type="text" v-model="session.user.password"> 
                    <span class="edit" @click="() => {password = !password; session.updateUser()}">Salvar</span>
                </p>

                <p v-if="session.user.admin">

                    <input type="checkbox" id="adm" name="adm" value="true" v-model="session.user.admin" @click="() => session.updateUser()">  Administrador
                    
                

                </p>


            </div>

        </div>
    
    </div>

</template>


<script>

import { sessionStore } from '@/store/session';

export default
 {
 
    name: "myInfo",

    data(){

        return{

            session: null,
            name: false,
            email: false,
            password: false            

        }

    },

    created(){

        this.session = sessionStore()

    },

    methods:{


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