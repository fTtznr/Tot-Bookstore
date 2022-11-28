<template>

    <footer class="footer">
                                
        <div id="center-circle">
            <img src="@/img/logo.png">
        </div>
        
        <div class="left">
            <ul>

                <li><router-link to="/" class="active">Home</router-link></li>
                <li><router-link to="/contact">Contato</router-link></li>
                <li><router-link to="/about">Sobre</router-link></li>
                <li><router-link to="/cart"><img class="icon" src="@/img/cart.png" /></router-link></li>
                <li><router-link to="/profile"><img class="icon" src="@/img/user.png" /></router-link></li>

            </ul>
        </div>

        <div class="right">
            <p>Made in São Carlos.</p>
        </div>

    </footer>

</template>


<script>

  export default
  {
    name: 'Footer'
  }

</script>