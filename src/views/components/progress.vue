<template>
  <div class="m-progress">
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
    <el-divider></el-divider>
    <div>
      <el-progress
        :text-inside="true"
        :stroke-width="26"
        :percentage="70"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="24"
        :percentage="100"
        status="success"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="22"
        :percentage="80"
        status="warning"
      ></el-progress>
      <el-progress
        :text-inside="true"
        :stroke-width="20"
        :percentage="50"
        status="exception"
      ></el-progress>
    </div>
    <el-divider></el-divider>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress
      type="circle"
      :percentage="50"
      status="exception"
    ></el-progress>
    <el-divider></el-divider>
    <el-progress :percentage="percentage" :color="customColor"></el-progress>

    <el-progress
      :percentage="percentage"
      :color="customColorMethod"
    ></el-progress>

    <el-progress :percentage="percentage" :color="customColors"></el-progress>
    <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease"></el-button>
        <el-button icon="el-icon-plus" @click="increase"></el-button>
      </el-button-group>
    </div>
  </div>
</template>
<script>
import { Getter, Action } from "vuex-class";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {},
})
class Management extends Vue {
  percentage = 20;
  customColor = "#409eff";
  customColors = [
    { color: "#f56c6c", percentage: 20 },
    { color: "#e6a23c", percentage: 40 },
    { color: "#5cb87a", percentage: 60 },
    { color: "#1989fa", percentage: 80 },
    { color: "#6f7ad3", percentage: 100 },
  ];

  customColorMethod(percentage) {
    if (percentage < 30) {
      return "#909399";
    } else if (percentage < 70) {
      return "#e6a23c";
    } else {
      return "#67c23a";
    }
  }
  increase() {
    this.percentage += 10;
    if (this.percentage > 100) {
      this.percentage = 100;
    }
  }
  format(percentage) {
    return percentage === 100 ? "满" : `${percentage}%`;
  }
  decrease() {
    this.percentage -= 10;
    if (this.percentage < 0) {
      this.percentage = 0;
    }
  }
}

export default Management;
</script>
<style lang="scss">
.m-progress {
  // max-width: 600px;
  .el-progress {
    margin-bottom: 15px;
  }
}
</style>
