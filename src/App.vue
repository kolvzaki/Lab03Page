<template>
 <div>
   <el-container>
     <el-header style="padding: 0 0">
       <HeaderMenu/>
     </el-header>

     <el-main>
       <router-view/>
     </el-main>

     <el-footer style="padding: 0 0">
       <FooterInfo/>
     </el-footer>

   </el-container>
 </div>
</template>

<script>
import HeaderMenu from './components/HeaderMenu/Index.vue'
import FooterInfo from './components/FooterInfo/Index.vue'

export default {
  name:'App',
  components:{
    HeaderMenu,
    FooterInfo
  },
  data(){
    return{

    }
  },
}

</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}

.el-header{

}

.el-footer{

}

.el-main{
  height: 615px;
  background-color: rgba(255,255,255,0.6);
}
</style>
