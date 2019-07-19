<template>
    <div>
        <Hqsha v-for="(v,i) in arr" :key="i" :title="v.title" :imgurl="v.imgurl"></Hqsha>
    </div>
</template>
<script>
import Hqsha from "./hqsh1"
export default {
    components:{
        Hqsha
    },
    data(){
        return{
            
        }
    },
    props:{
        arr:Array
    }
}
</script>
<style scoped>
   .z{
       height: 3rem;
   }
</style>