<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
  background-color="#006699" text-color="#fff" active-text-color="red"
  >
    <el-menu-item index="1">
      <router-link to="/">首页</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/deathData">死亡率</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/recoveredData">康复率</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link to="/about">关于</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "Index",
  data(){
    return{
      activeIndex: '1'
    }
  },
  methods:{
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">

a{
  text-decoration: none;
}
.el-menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  .el-menu-item{
    font-size: 25px;
  }

}
</style>