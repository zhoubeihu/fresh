<template>
    <div>
        <div class="zxf1">
            <img src="../../../static/img/h1.png" alt="as">
            <span class="zxf3">{{title}}</span>
        </div>       
        <div class="z1">
            <span v-if="bool" @click="funa()">{{content}}</span>
            <strong v-else @click="funb()">{{content}}</strong>
            <b @click="fun()" v-if="!bool" class="duo">全文</b>
            <img src="../../../static/img/h7.png" alt="">
            <div class="z2">
                <img src="../../../static/img/h8.png">
                <span>{{fei}}</span>
                <i>{{jiaqian}}</i>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        imgurl:String,
        title:String,
        content:String,
        fei:String,
        jiaqian:String
    },
    data(){
        return{
            bool:false
        }
    },
    methods: {
        fun(){
            this.bool=true;
        },
        funa(){
            this.bool=false;
        },
        funb(){
            this.bool=true;
        }
    },
}
</script>
<style scoped>
    .zxf1{
        height: 1rem;
        line-height: 1rem;
        margin: 0 0.5rem;
        margin-top: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .zxf1 img{
        width: 0.5rem;
        height: 0.5rem;
        margin-top: 0.2rem;
    }
    .zxf3{
        font-size: 0.3rem;
        display: inline-block;
        margin: 0 
    } 
    .z1{
        height: 3rem;
    }
    .z1 img{
        width: 100%;
        height: 100%;
    }
    .z1 span{
        font-size: 0.3rem;
        line-height: 0.5rem;
        display: inline-block;
        color: #494949;
        /* height: 5rem; */
    }
    .z1 strong{
        font-weight: 200;
        font-size: 0.3rem;
        color: #494949;
        line-height: 0.5rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
        /* height: 7rem;  */
    }
    .duo{
        font-size: 0.4rem;
        display: inline-block;
        position: absolute;
        top:3.9rem;
        right: 0.1rem;
        color: aqua;
    }
    .z2{
        width: 100%;
        height: 2rem;
        
    }
    .z2 img{
        width: 20%;
        height: 50%;
    }
    .z2>span{
        display: inline-block;
        font-size: 0.3rem;
    }
    .z2>i{
        font-size: 0.3rem;
    }
</style>