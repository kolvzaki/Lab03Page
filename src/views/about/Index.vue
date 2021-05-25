<template>
<div>
  <div class="mycontain">
    <div class="title">
      <h3>
        本Demo相关说明
      </h3>
    </div>
    <div class="content">
      <table>
        <li>
          <span>数据来源: </span>
          <a href="https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_time_series" target="_blank">GitHub地址</a>
        </li>
        <li>
          <span>
            Demo前端:
          </span>
          <a href="https://github.com/kolvzaki/Lab03Page">Github仓库</a>
        </li>
        <li>
          <span>
            Demo后端:
          </span>
          <a href="https://github.com/kolvzaki/Lab03BE">Github仓库</a>
        </li>
        <li>
          <span>因时区问题，源数据更新不定时且日期比中国少一天！</span>
        </li>
      </table>
    </div>

    <div class="myfooter">
      <span>Designed by Kolvzaki</span>
    </div>

  </div>
</div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style lang="less" scoped>
.mycontain{
  margin: 0 auto;
  width: 800px;
  height: 550px;
  border: 3px solid #000;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  .title{
    text-align: center;
    width: inherit;
    height: 40px;
    background-color: greenyellow;
  }
  .content{
    font-size: 60px;
  }
  .myfooter{
    text-align: center;
    width: inherit;
    height: 30px;
    background-color: skyblue;
  }
  a{
    text-decoration: none;
    color: lawngreen;
  }
  a:hover{
    color: red;
  }
}
</style>