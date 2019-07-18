<template>
    <div class="x">
        <div class="f">
            <img src="../../../static/img/h17.png">
            <span>{{title}}</span>
        </div>
        <div class="f1">
            <img :src="imgurl">
        </div>
    </div>  
</template>
<script>

export default {
    components:{
        
    },
    props:{
        title:String,
        imgurl:String
    }
}
</script>
<style scoped>
    .x{
        height: 4.5rem;
    }
    .f{
        height: 1rem;
        display: flex;
       
    }
    .f>img{
        width: 10%;
        height: 70%;
        padding: 0.2rem 0.2rem;
    }
    .f>span{
        line-height: 1rem;
        display: inline-block;
        font-size: 0.25rem;
    }
    .f>img{
        float: left;
    }
    .f1{
        width: 100%;
        height: 3rem;
    }
    .f1 img{
        width: 90%;
        height: 100%;
        padding: 0 0.35rem;
    }
</style>