<template>
    <div style="width: 100%">
    <!-- nav -->
<el-row :gutter="20" class="detailsNav">
  <el-col :span="4"><div class="grid-content bg-purple"><p class="close" @click="close()"><</p></div></el-col>
  <el-col :span="16"><div class="grid-content bg-purple"> 
            <p v-for="(v,i) in add" :key="i">
             <a :href="'#'+v.id">{{v.title}}</a>
            </p>
            </div>
            </el-col>
  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
</el-row>
<!-- banner -->
<Banner></Banner>

<!-- 名称价格 -->
<div class="content" style="font-size:.24rem">
    <div style="width:80%">
        <p style="font-size:.32rem;font-weight:600;">{{shopInfo.details_title}}{{shopInfo.scale}}g</p>
        <p style="color:gray">{{shopInfo.content}}</p>
        <p> <span style="color:red;font-size:.3rem;font-weight:600;color:gray">￥{{shopInfo.price}}</span>/<span>{{shopInfo.company}}</span></p>
    </div>
    <div style="width:20%"></div>
</div>

<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark time">现在下单，最快{{Time}}送达(免运费)</div></el-col>
</el-row>


    </div>
</template> 



<script>
import Banner from '../components/details/details_banner'
import data from '../mock/json/data.json'

export default {
    components:{
        Banner
    },
    data() {
        return {
            add:[
                {title:"商品",id:"1"},
                {title:"评价",id:"2"},
                {title:"菜谱",id:"3"},
                {title:"详情",id:"4"},
                {title:"推荐",id:"5"},
            ],
            Time:"",
            shopInfo:data
        }
    },
    methods: {
        close(){
            this.$router.go(-1)
        },
    	getTime(){
				setInterval(()=>{
					this.Time = new Date(Date.now() + 30 * 60 * 1000).toLocaleString().slice(0,-2);
				},1000)
			}
		},
		created(){
			this.getTime();
        },

}
</script>
<style scoped>
*{
    margin:0;
    padding: 0;
}
    .detailsNav{
        width: 100%;
        height:.8rem;
        font-size:.18rem;
        position: fixed;
        z-index: 3;
    }
    .detailsNav a{
        text-decoration: none;
        float:left;
        width:20%;
        text-align:center;
        line-height: .8rem;
        color: gray;
    } 
  .grid-content {
    min-height: .8rem;
  }
  .close{
       font-size:.36rem;
       text-align:center;
       line-height:.8rem;
  }
  .content{
      margin:.1rem;
      display: flex;
  }
  .time{
      background: gainsboro;
      font-size: .20rem;
      margin:.15rem;
      text-align: center;
      line-height: .8rem;
  }
</style>