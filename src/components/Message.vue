<template>
    <div class="alert success">
        <span class="closebtn">&times;</span>{{msg}}
    </div>
</template>

<script>

export default {

    name: "Message",

    props:{

        msg:  String

    },

    mounted(){

        let close = document.getElementsByClassName("closebtn");
        let i;

        for (i = 0; i < close.length; i++) {
            close[i].onclick = function(){
                let div = this.parentElement;
                div.style.opacity = "0";
                setTimeout(function(){ div.style.display = "none"; }, 600);
            }
        }
    }

}


</script>


<style scoped>
    .alert {
        padding: 20px;
        background-color: #f44336;
        color: white;
        opacity: 1;
        transition: opacity 0.6s;
        margin-bottom: 15px;
        margin-left: 15px;
    }

    .alert.success {background-color: #04AA6D;}
    .alert.info {background-color: #2196F3;}
    .alert.warning {background-color: #ff9800;}

    .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    .closebtn:hover {
        color: black;
    }
</style>