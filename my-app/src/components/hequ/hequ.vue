<template>
    <div>
        <Hequ v-for="(v,i) in arr" :key="i" :title="v.title" :content="v.content" :fei="v.fei" :jiaqian="v.jiaqian"></Hequ>
    </div>
</template>
<script>
import Hequ from "./hequ1"
export default {
    components:{
        Hequ
    },
    props:{
        arr:Array
    }
}
</script>
<style scoped>
   
</style>