<template>
    <div>
    <div class="wfa">
            <div class="wfb" @click="fun()">x</div>
            <div class="wfc">注册</div>
        </div>
        <div>
            <div class="wfaa">
                <span class="wfbb">账户</span>
                <input type="text" placeholder="请输入账户名" class="wfinput" v-model="username" @mouseleave="nameyz()">
            </div>
            <div class="wfaa">
                <span class="wfbb">密码</span>
                <input type="text" placeholder="请输入密码" class="wfinput" v-model="userpwd">
            </div>
            <div class="wfaa">
                <span class="wfbb">邮箱</span>
                <input type="text" placeholder="请输入邮箱地址" class="wfinput" v-model="useremail" @mouseleave="fun2()">
            </div>
            <div class="wfaa">
                <input type="text" placeholder="请输入验证码" class="wfinput" v-model="verify"><span class="wfmm" @click="fun1()">获取验证码</span>
            </div>
        </div>
        <div class="wfdd">
        <button  @click="adduser()" :disabled="btnbooll" :class="btnbooll ? 'wfcc' : 'wfcc wfcc2'">注册</button>
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            btnbooll:true,
            username:'',
            userpwd:'',
            useremail:'',
            verify:'', //用户输入验证码
            emailyz:'', //邮箱验证码
            emailyzz:""


        }
    },
     methods: {
        fun(){
            this.$router.go(-1);
        },
        // 用户名是否存在验证
        nameyz(){
               this.axios({
                url:"http://localhost:3000/get",//get发送数据方式
                method:"get",
                params:{username:this.usernamel} //get发送数据方式
            }).then((ok)=>{
                
                console.log(ok)
                 if(ok==0){
                        alert("用户名已存在！");
                    }
            })
        },
    // 邮箱验证码请求
        fun1(){
             this.axios({
                url:"http://localhost:3000/get",//get发送数据方式
                method:"get",
                params:{useremail:this.useremail} //get发送数据方式
            }).then((ok)=>{
                this.emailyz = ok
                console.log(ok)
            })

        },
    fun2(){
        var emaila=/^\d{3,}@\w{2,}\.(com|cn|net|com.cn)$/;
        if(emaila.test(this.useremail)==true){
            this.emailyzz="1";

        }else{
           this.useremail="邮箱格式错误";
           this.emailyzz="0";
    
        }
    },
        // 用户注册
        adduser(){
            if(this.emailyz == this.verify){
                var param=new URLSearchParams();
                param.append({"username":this.username,"userpwd":this.userpwd,"useremail":this.useremail});
                    this.axios({
                    url:"http://localhost:3000/post",
                    method:"post",
                    // post发送数据的时候使用data属性
                    data:param
                }).then((ok)=>{
                    console.log(ok);
                    alert("注册成功，请登录！");
                    this.$router.push("/denglutwo");
                })

            }else{
                alert("验证码不正确！")

            }
           
        }

    }, 
    // 监听按钮
    watch:{
           username(){
               if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           },

           userpwd(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           },
           useremail(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           }, 
           verify(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
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
    margin-left: 0.2rem;  
}
.wfcc2{
    background-color: rgb(255, 0, 0)
}
.wfmm{
    font-size: 0.4rem;
    display: inline-block;
    width: 29%;
    color:rgb(53, 51, 51);
}




</style>