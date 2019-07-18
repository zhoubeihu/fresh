<template>
    <div>
        <Hequnav iteme="尝一颗阿克苏吊干杏秒变小甜心❤"></Hequnav>
        <Hequ :arr="hequ"></Hequ>
        
    </div>
</template>
<script>
import Hequ from "../components/hequ/hequ"
import Hequnav from "../components/hqnav/nav"
export default {
    components:{
        Hequ,
        Hequnav
    },
    data(){
        return{
            hequ:[]
        }
    },
    created(){
        this.axios({
            url:"/link/zxf/data",
            method: "get",
        }).then((ok)=>{ 
            // console.log(ok.data.hequ[0].title)      
           this.hequ=ok.data.hequ
        })
    }
}
</script>
<style scoped>

</style>