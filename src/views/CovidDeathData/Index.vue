<template>
  <div class="main-contain">
    <div class="top-contain">
      <div class="left-contain">
        <el-switch v-model="onlyChina"  active-color="#13ce66" active-text="只显示中国地区"
                   inactive-color="#ff4949" active-value="y" inactive-value="n"
                   inactive-text="显示全部地区" style="display: block"
        >
        </el-switch>
        <el-button type="success" @click="getOnlyChina">
          刷新表格
        </el-button>
      </div>
      <div class="center-contain">
        <span>展示国家/地区数</span>
        <el-slider v-model="showValue"
                   :min="10"
                   :max="30" input-size="medium" label="数量" show-input :show-tooltip="false"
        >

        </el-slider>
      </div>
      <div class="right-contain">
        <el-input v-model="searchForm.search_value" placeholder="请输入查找内容"></el-input>
        <el-select v-model="searchForm.search_key" placeholder="请选择查找范围">
          <el-option
              v-for="item in options"
              :key="item.label"
              :value="item.value"
              :label="item.label"
          >
          </el-option>
        </el-select>
        <el-button type="primary" @click="showMsg">查找</el-button>
      </div>
    </div>
    <el-divider content-position="center">新冠死亡病例实时数据分布图</el-divider>
    <div class="chart-contain">

      <div class="histogram-contain">
        <el-card>
          <div  id="histogram" style="width:650px;height: 550px"></div>
        </el-card>
      </div>

      <div class="line-contain">
        <el-card>
          <div id="line" style="width:600px;height: 550px"></div>
        </el-card>
      </div>


    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import state from "../../store/state";
import {getDeathData,getTotalDeath,getDeathOnlyChina} from "../../api/api";

const echarts = require('echarts')

export default {
  name: "Index",
  data(){
    return{
      onlyChina: 'n',
      searchForm:{
        search_key: "",
        search_value: "",
      },
      showValue: 10,
      options:[
        {
          value: "country",
          label: "国家"
        },
        {
          value: "region",
          label: "地区"
        }
      ],


      histogramX:[],
      histogramData:[],

      lineChartX: [],
      lineChartData:[],

    }
  },

  mounted() {
    this.getDeath()
    this.getTotalDeath()
  },

  methods:{
    ...mapActions(['save_death']),
    ...mapActions(['save_total_death']),

    showMsg(){
      this.$message.info('该Demo暂无此功能！敬请期待!')
      return false
    },

    async getDeath(){

      await getDeathData().then(res=>{
        this.save_death(res.data)
        this.histogramX = []
        this.histogramData = []

        for(let i = 0 ;i<state.death_case.length;i++){
          this.histogramX.push(state.death_case[i].countryName)
          this.histogramData.push(state.death_case[i].cases)
        }

        const histogramChart = echarts.init(document.getElementById('histogram'))
        histogramChart.setOption({
          title:{
            text:'新冠死亡病例较多的国家/地区'
          },
          tooltip:{
            show: true,
            trigger: 'item',
          },
          grid:{
            left: 'center',
            top:'80',
            width: '65%',
            height: '70%',
          },
          xAxis:{
            data: this.histogramX,
            name: 'Country/Region',
            nameLocation:'end',
            nameTextStyle:{
              padding: [5,0,0,-5],
            },
            nameGap: 15,
            axisTick:{
              show: false,
            },
            axisLabel:{
              show: true,
              rotate:30,
              margin: 10,

            }

          },
          yAxis:{},
          series:[
            {
              name: '死亡病例数',
              type: 'bar',
              data: this.histogramData,
              barWidth: 30,
              itemStyle: {
                normal:{
                  color : function (params){
                    let colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                    return colorList[params.dataIndex];
                  }
                }
              },

            }
          ]
        },true)

      }).catch(err=>{
        console.log(err)
      })

    },

    async getOnlyChina(){
      await getDeathOnlyChina(this.onlyChina,this.showValue).then(res=>{

        this.save_death(res.data)

        this.histogramX = []
        this.histogramData = []

        if(this.onlyChina === 'y'){
          for(let i = 0 ;i<state.death_case.length;i++){
            this.histogramX.push(state.death_case[i].regionName)
            this.histogramData.push(state.death_case[i].cases)
          }
        }
        else{
          for(let i = 0 ;i<state.death_case.length;i++){
            this.histogramX.push(state.death_case[i].countryName)
            this.histogramData.push(state.death_case[i].cases)
          }
        }

        const histogramChart = echarts.getInstanceByDom(document.getElementById('histogram'))
        histogramChart.setOption({
          title:{
            text:'新冠死亡病例较多的国家/地区'
          },
          tooltip:{
            show: true,
            trigger: 'item',
          },
          grid:{
            left: 'center',
            top:'80',
            width: '65%',
            height: '70%',
          },
          xAxis:{
            data: this.histogramX,
            name: 'Country/Region',
            nameLocation:'end',
            nameTextStyle:{
              padding: [5,0,0,-5],
            },
            nameGap: 15,
            axisTick:{
              show: false,
            },
            axisLabel:{
              show: true,
              rotate:30,
              margin: 10,

            }

          },
          yAxis:{},
          series:[
            {
              name: '死亡病例数',
              type: 'bar',
              data: this.histogramData,
              barWidth: 30,
              itemStyle: {
                normal:{
                  color : function (params){
                    let colorList = ['#C33531','#EFE42A','#64BD3D','#EE9201','#29AAE3', '#B74AE5','#0AAF9F','#E89589','#16A085','#4A235A','#C39BD3 ','#F9E79F','#BA4A00','#ECF0F1','#616A6B','#EAF2F8','#4A235A','#3498DB' ];
                    return colorList[params.dataIndex];
                  }
                }
              },

            }
          ]
        },true)

      })
      .catch(err=>{
        console.log(err)
      })
    },

    async getTotalDeath(){
      await getTotalDeath().then(res=>{

        this.save_total_death(res.data)

        this.lineChartX = []
        this.lineChartData = []

        for(let i = 0 ; i<state.total_death.length;i++){
          this.lineChartX.push(state.total_death[i].date)
          this.lineChartData.push(state.total_death[i].cases)
        }

        const lineChart = echarts.init(document.getElementById('line'))
        lineChart.setOption({
          title: {
            text: '过去7日全球死亡总病例',
            x: 'center'
          },
          grid:{
            left: 'center',
            top:'80',
            width: '70%',
            height: '75%',
          },
          xAxis:[
            {
              data: this.lineChartX,
              name: 'Date',
              nameLocation:'end',
              nameTextStyle:{
                padding: [5,0,0,-5],
              },
              nameGap: 15,
              axisTick:{
                show: true,
                inside: true,
              },
              axisLabel:{
                show: true,
                margin: 10,

              }
            }
          ],
          yAxis:{
            axisTick:{
              show: true,
              inside: true,
            },
            axisLine:{
              show: true,
            },
            min:3000000,
            max:3500000,
          },
          series:[
            {
              name: '死亡病例数',
              type: 'line',
              smooth: 0.5,
              data: this.lineChartData,
              itemStyle: {
                normal: {
                  lineStyle: {
                    width: 3,
                    color: 'rgba(255,0,0,0.8)',
                  }
                }
              }
            }
          ],
          tooltip:{
            trigger: 'axis',
          },
        })

      }).catch(err=>{
        console.log(err)
      })
    }

  }

}
</script>

<style scoped lang="less">
.top-contain{
  display: flex;
  justify-content: space-between;
  align-items: center;


  .center-contain{
    width: 300px;
    .el-button{
      position: relative;
      left: 35%;
      top: 0px;
    }
  }

  .right-contain{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50px;
    width: 600px;
    .el-input{
      width: 300px;
    }
    .el-select{
      width: 150px;
    }
    .el-button{
      width: 80px;
    }
  }
  .left-contain{
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    .el-button{
      position: relative;
      top: 22px;
      left: -10px;
    }
  }
}

.chart-contain{
  display: flex;
  justify-content: space-around;
  align-items: center;
  .el-card{
    height: 600px;
    width: 680px;
    border-color: 	#FF00FF;
    position: relative;
    top: 20px;
  }
}

.el-divider{
  background-color: red;
  height: 2px;
  position: relative;
  top: 15px;
  .el-divider__text{
    font-size: 20px;
    font-weight: bolder;
    letter-spacing: 0.1em;
  }
}
.main-contain{
  width: 100%;
  height: 100%;
}
</style>