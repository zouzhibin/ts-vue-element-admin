<template>
  <el-scrollbar
          :class="{ 'side-bar-container': true, 'is-collapse': isCollapse }"
          style="height:100%"
  >
    <div class="logo-container-vertical">
      <img
              src="../../../assets/logo.png"
              class="header-logo"
      />
      <span class="title">ts-vue-element</span>
    </div>
    <el-menu
            background-color="rgba(36, 47, 87, 0.847058823529412)"
            mode="vertical"
            text-color="rgba(255, 255, 255, 0.647058823529412)"
            active-text-color="white"
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            :collapse-transition="false"
            @close="handleClose"
            :collapse="isCollapse"
          
    >
        <u-item :item="route" :key="route.path" v-for="(route) in staticRouter" :base-path="route.path"> </u-item>

    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import {staticRouter} from '@/router/modules/staticRouter'
import { RouteConfig } from 'vue-router'
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'
import UItem from './u-item.vue'
@Component({
  components:{
    UItem
  }
})
export default class Sidbar extends Vue{
  @Getter('isCollapse') public isCollapse!: boolean
  public staticRouter:Array<RouteConfig> = staticRouter
  public mounted(){
    // console.log('sss',this.isCollapse)
  }
  handleOpen(key:any, keyPath:any) {
      // console.log(key, keyPath);
  }
  handleClose(key:any, keyPath:any) {
      // console.log(key, keyPath);
  }
}
</script>
<style>

</style>
<style lang="scss" scoped>
  ::v-deep {
    .el-menu--vertical{
      background-color: rgba(36, 47, 87, 0.847058823529412);
    }
    .el-menu--vertical .el-menu-item:hover{
      background-color: rgba(24, 144, 255, 0.2)!important;
    }
    .el-scrollbar__wrap{
      background-color: rgba(36, 47, 87, 0.847058823529412);
    }
    .el-menu-item .is-active {
      background-color: rgba(24, 144, 255, 0.2)!important;
    }
  }
.side-bar-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 220px;
  height: 100vh;
  overflow: hidden;
  //   background: $base-menu-background;
  box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
  transition: all 0.2s ease-in-out;
  background-color: rgba(36, 47, 87, 0.847058823529412);

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 100%;
    min-height: 400px;
  }

  .logo-container-vertical {
    position: relative;
    height: 64px;
    overflow: hidden;
    line-height: 64px;
    background-color: rgba(36, 47, 87, 0.847058823529412);
    text-align: center;
  }
  .header-logo {
    width: 30px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .title {
    display: inline-block;
    overflow: hidden;
    font-size: 20px;
    font-weight: 600;
    line-height: 55px;
    color: #fff;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    max-width: calc(220px - 50px);
  }

  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }

    .el-menu {
      border: 0;
    }
    .el-submenu__title:hover{
      background-color: rgba(24, 144, 255, 0.2)!important;
    }
    .el-menu-item:hover{
      background-color: rgba(24, 144, 255, 0.2)!important;
    }
  }

  &.is-collapse {
    width: 64px;
    border-right: 0 !important;
    ::v-deep {
      .el-menu--collapse {
        border-right: 0 !important;

      }
      .el-submenu__icon-arrow {
        right: 10px;
        margin-top: -4px;
      }
      .el-submenu__title {
        span {
          display: none;
        }
      }
      .title {
        display: none;
      }
      .el-menu-item{
        span{
          display: none;
        }
      }
    }
  }
  ::v-deep {
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
    .el-menu {
      border: 0;
    }
    .svg-inline {
      &--fa {
        width: 1rem;
      }
    }

    .el-menu-item {
      height: 46px !important;
      overflow: hidden;
      // padding-left: 53px!important;
      line-height: 46px !important;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}


</style>
