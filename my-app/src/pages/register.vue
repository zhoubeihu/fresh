<template>
    <div>
    <div class="wfa">
            <div class="wfb" @click="fun()">x</div>
            <div class="wfc">注册</div>
        </div>
        <div>
            <div class="wfaa">
                <span class="wfbb">邮箱</span><input type="text" placeholder="请输入账户名" class="wfinput" v-model="inputa">
            </div>
            <div class="wfaa">
                <input type="text" placeholder="请输入密码" class="wfinput" v-model="inputb"><span class="wfmm">获取验证码</span>
            </div>
        </div>
        <div class="wfdd">
        <button class="wfcc" >注册</button>
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            btnbool:true,
            inputa:'',
            inputb:''
        }
    },
     methods: {
        fun(){
            this.$router.go(-1);
        }
    }, 
    
    watch:{
           inputa(){
               if(this.inputa!=""&&this.inputb!=""){
                   this.btnbool=false
               }else{
                this.btnbool=true
               }
           },
           inputb(){
            if(this.inputa!=""&&this.inputb!=""){
                   this.btnbool=false
               }else{
                this.btnbool=true
               }
           }, 
        }

}
</script>
<style scoped>
.wfa{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    color:rgb(53, 51, 51);
}
.wfb{
    float: left;
    line-height: 1rem;

}
.wfc{
    width: 80%;
    float: left;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
}

.wfaa{
    margin: 0 auto;
    width: 95%;
    height: 1.4rem;
    border-bottom: 1px solid #ccc;
}
.wfbb{
    font-size: 0.4rem;
    display: inline-block;
    width: 1.8rem;
    color:rgb(53, 51, 51);

}
.wfinput{
    height: 0.6rem;
    width: 70%;
    border: none;
    font-size: 0.3rem;
}

.wfcc{
    width: 94.5%;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #ccc;
    height: 1rem;
    line-height: 1rem;
    border-radius: 0.1rem;
    border: none;   
}
.wfmm{
    font-size: 0.4rem;
    display: inline-block;
    width: 1rem;
    color:rgb(53, 51, 51);
}




</style>