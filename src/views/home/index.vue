<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="hover">
          访问量 
          <count-to :start-val="0" :end-val="21892" :duration="2600" class="card-panel-num" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          消息 
          <count-to :start-val="0" :end-val="35895" :duration="2600" class="card-panel-num" />
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">
          页数
          <count-to :start-val="0" :end-val="4189" :duration="2600" class="card-panel-num" />
        </el-card>
      </el-col>
    </el-row>
    <div class="footer-card">
      <el-row :gutter="12">
        <el-col :span="24">
          <el-card shadow="hover">
            <div class="myChart1">

            </div>
          </el-card>
        </el-col>
        
      </el-row>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import echarts from "echarts"
import CountTo from 'vue-count-to'
@Component({
  components: {CountTo},
})
export default class UItem extends Vue {
  option = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type:  ('category' as 'category'),
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: ('value' as 'value'),
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

  mounted(){
      this.$nextTick(() => {
        let elemnt = document.getElementsByClassName("myChart1")[0] as HTMLCanvasElement|HTMLDivElement
        let myChart = (echarts as any).init(elemnt, {    
          width: "auto",
        })
        myChart.setOption(this.option)
        // myChart.dispatchAction({type: 'highlight',seriesIndex: 0,dataIndex: 0});
        window.addEventListener("resize",function (){
          myChart.resize()
        })
      })
  }
}
</script>
<style lang="scss">
.footer-card {
  margin-top: 40px;
}
.myChart1{
    height: 400px;
}
</style>
