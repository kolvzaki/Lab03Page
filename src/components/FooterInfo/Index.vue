<template>
<div class="footer-contain">
  <div class="img-contain"><el-image :src="require('@/assets/footer_img.jpg')"></el-image></div>
  <div class="slogan"><span>生命重于泰山，科学防范新冠！</span></div>
  <div class="time-contain">
    <span>当前时间: <span style="color: red">{{nowDate}}</span></span>
  </div>
</div>
</template>

<script>
import Moment from "moment";

export default {
  name: "Index",
  data(){
    return{
      nowDate: Moment().format('MMMM Do YYYY, h:mm:ss a'),
      freshTime: Moment().endOf('day').fromNow()
    }
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(()=>{
      _this.nowDate = Moment().format('MMMM Do YYYY, h:mm:ss a');
      _this.freshTime = Moment().endOf('day').fromNow()
    },1000)
  },
  beforeDestroy() {
    if(this.timer){
      clearInterval(this.timer)
    }
  }
}
</script>

<style scoped lang="less">
.footer-contain{
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: rgba(51,51,51,0.8);
  height: 85px;
}
.el-image{
  padding-top: 5px;
  width: 80px;
  height: 80px;

}
.slogan{
  letter-spacing: 0.1em;
  font-size: 35px;
  color: azure;
  text-shadow: 0 0 10px #fff;
}

.time-contain{
  position: relative;
  right: 150px;
  color: #fff;
  display: flex;
  flex-flow: column ;
  .refresh-contain{
    margin-top: 10px;
  }
}

</style>