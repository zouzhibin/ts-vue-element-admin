<template>
  <!-- 企业 -->
  <div class="overview-center">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>访问数量统计</span>
      </div>
      <div class="footer-chart">
        <div class="footer-chart-inner">
          <div class="footer-chart-header">
            <div>
              <el-radio-group v-model="radio1" @change="changeRadioAction">
                <el-radio-button label="today">今日</el-radio-button>
                <el-radio-button label="yesterday">昨日</el-radio-button>
                <el-radio-button label="week">本周</el-radio-button>
                <el-radio-button label="month">本月</el-radio-button>
                <el-radio-button label="all">全部</el-radio-button>
              </el-radio-group>
            </div>
            <div class="total-order">
              总订单数:
              <count-to
                :start-val="0"
                :end-val="total_order"
                :duration="2600"
                class="card-panel-num"
              />
            </div>
          </div>
        </div>

        <div class="myChart2"></div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import echarts, { EChartOption } from "echarts";
import { Vue, Component } from "vue-property-decorator";
import CountTo from "vue-count-to";
let otcCountNameList: any = {
  merchant_finish_money: {
    per: "merchant_finish_per",
    name: "已完成",
    amount: "merchant_finish_amount",
    count: "merchant_finish_count",
  },
  merchant_cancel_money: {
    name: "已取消",
    per: "merchant_cancel_per",
    amount: "merchant_cancel_amount",
    count: "merchant_cancel_count",
  },
  merchant_trading_money: {
    name: "交易中",
    per: "merchant_trading_per",
    amount: "merchant_trading_amount",
    count: "merchant_trading_count",
  },

  merchant_freeze_money: {
    name: "未激活",
    per: "merchant_freeze_per",
    amount: "merchant_freeze_amount",
    count: "merchant_freeze_count",
  },
  merchant_create_money: {
    name: "已创建",
    per: "merchant_create_per",
    amount: "merchant_create_amount",
    count: "merchant_create_count",
  },
};

@Component({
  components: {
    CountTo,
  },
})
export default class Enterprise extends Vue {
  loading = false;
  radio1 = "today";
  total_order = 0;
  option: EChartOption<EChartOption.SeriesPie> = {
    tooltip: {
      trigger: "item",
      // formatter:tooltip '{a} <br/>{b}: {c} '
      // formatter:tooltip '{a} <br/>{b}: {c} '
    },
    color: [
      "#40a8f1",
      "#56ca77",
      "#f9d251",
      "#ee4967",
      "#a45fe0",
      "#9460ff",
      "#c3e2f6",
      "#efdcde",
    ],
    legend: {
      icon: "circle",
      orient: "horizontal",
      right: 0,
      top: "middle",
      width: 800, // 宽度
      // bottom:20,
      itemGap: 20, // 间隔
      data: [],
      // formatter:()=>''
      textStyle: {
        rich: {
          a: {
            fontSize: 14,
            verticalAlign: "middle",
            align: "left",
            width: 60,
            padding: [-25, 0, 5, 6],
          },
          b: {
            // color:'rgba(0, 0, 0, 0.427450980392157)',
            width: 50,
            fontSize: 14,
            align: "left",
            padding: [-30, 10, 0, 0],
            // lineHeight:100
          },
          c: {
            width: 150,
            // color:'rgba(0, 0, 0, 0.427450980392157)',
            fontSize: 13,
            align: "left",
            padding: [-25, 10, 0, 20],
            // lineHeight:100
          },
          d: {
            width: 150,
            // color:'rgba(0, 0, 0, 0.427450980392157)',
            fontSize: 13,
            align: "left",
            padding: [-20, 10, 0, 150],
            // lineHeight:100
          },
        },
      },
    },
    series: [
      {
        name: "订单数",
        type: "pie",
        radius: ["30%", "45%"],
        center: ["15%", "53%"], //这个属性调整图像的位置
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },

        emphasis: {
          label: {
            show: true,
            fontSize: 30,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [],
      },
    ],
  };
  changeRadioAction(val: string) {
    console.log(val);
    this.fetchDate(val);
  }
  formatterTooltipAction(val: any, item: any, arrs: any) {
    let orders = `订单数: ${val.data.value}`;
    let orderper = `订单占比: ${val.data.per}`;
    let orderNum = `USDT: ${val.data.amount}`;
    return [orders, orderper, orderNum].join("<br>");
  }
  async fetchDate(type?: string) {
    this.loading = true;
    let params = {
      date: type ? type : "today",
    };
    try {
      let Statistic = {
        total_order: 178,
        today_newly: -25,
        merchant_create_per: 1.69,
        merchant_create_count: 3,
        merchant_create_amount: 3.8863,
        merchant_create_money: 30,
        merchant_cancel_per: 46.63,
        merchant_cancel_count: 83,
        merchant_cancel_amount: 184.1462,
        merchant_cancel_money: 1255.11,
        merchant_freeze_per: 0,
        merchant_freeze_count: 0,
        merchant_freeze_amount: 0,
        merchant_freeze_money: 0,
        merchant_finish_per: 26.4,
        merchant_finish_count: 47,
        merchant_finish_amount: 163.5673,
        merchant_finish_money: 915,
        merchant_trading_per: 25.28,
        merchant_trading_count: 45,
        merchant_trading_amount: 191.2747,
        merchant_trading_money: 191.27,
      };
      this.total_order = Statistic.total_order;
      this.initEchart(Statistic);
    } catch (e) {}

    this.loading = false;
  }
  formatterAction(value: string, item: any, arrs: any) {
    for (let item of arrs) {
      if (item.name === value) {
        return `{a|${value}} {b| |  ${item.value} } {c|数量: ${item.amount}} \n\n {d|金钱:   ${item.money}}`;
      }
    }
    return value;
  }
  initEchart(Statistic: any) {
    let arrs: any[] = [];
    let legendArr = [];
    for (let attr in otcCountNameList) {
      console.log(Statistic[attr]);
      let key = otcCountNameList[attr]["per"];
      let amount = otcCountNameList[attr]["amount"];
      let count = otcCountNameList[attr]["count"];
      let obj = {
        value: Statistic[count],
        name: otcCountNameList[attr].name,
        per: Statistic[key],
        money: Statistic[attr],
        amount: Statistic[amount],
      };
      legendArr.push(otcCountNameList[attr].name);
      arrs.push(obj);
    }
    console.log(arrs);
    (this.option.series as any)[0].data = arrs;
    (this.option.legend as EChartOption.Legend).data = legendArr;
    (this.option.legend as EChartOption.Legend).formatter = (value: string) =>
      this.formatterAction(value, Statistic, arrs);
    (this.option.tooltip as any).formatter = (value: string) =>
      this.formatterTooltipAction(value, Statistic, arrs);
    this.$nextTick(() => {
      let myChart1 = echarts.init(
        document.getElementsByClassName("myChart2")[0] as
          | HTMLDivElement
          | HTMLCanvasElement
      );
      myChart1.setOption(this.option);
      window.addEventListener("resize", function() {
        myChart1.resize();
      });
    });
  }
  mounted() {
    this.fetchDate();
  }
}
</script>

<style lang="scss" scoped>
.overview-center{
    margin-top: 20px;
}
.footer-chart-header{
    display: flex;
    align-items: center;
}
.total-order{
    margin-left: 15px;
}
.myChart2 {
  width: 100%;
  height: 100%;
}
.footer-chart{
    height: 400px;
}
</style>
