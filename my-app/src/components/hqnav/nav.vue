<template>
    <div>
        <div class="z1">
            <span>&lt;</span>
            <p>{{iteme}}</p>
            <img src="../../../static/img/h14.png">
        </div>
    </div>
</template>
<script>

export default {
    props:{
       iteme:String
    }
}
</script>
<style scoped>
    .z1{
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: space-around;
        line-height: 1rem;
        background-color: rgb(44, 110, 197);
        position: fixed;
        top: 0;
    }
    .z1 span{
        color: aliceblue;
        font-size: 0.5rem;
    }
    .z1 p{
        font-size: 0.3rem;
        color: aliceblue;   
    }
    .z1 img{
        width: 0.5rem;
        height: 0.5rem;
        display: inline-block;
        margin-top: 0.3rem;
    }
</style>