<template>
  <div v-if="!item.hidden">
    <template
      v-if="
        hasOneShowingChild(item.children, item) &&
          (!onlyOneChildren.children || onlyOneChildren.noShowingChildren) &&
          !item.alwaysShow
      "
    >
      <u-link :to="resolvePath(onlyOneChildren.path)">
        <el-menu-item :index="item.path">
          <i
            :class="onlyOneChildren.meta.icon"
            v-if="onlyOneChildren.meta.icon"
          ></i>
          <span slot="title">{{ onlyOneChildren.meta.title }}</span>
        </el-menu-item>
      </u-link>
    </template>

    <el-submenu :index="resolvePath(item.path)" v-else popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon" v-if="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <template v-for="ite in item.children">
        <u-item :item="ite" :key="ite.path" :base-path="resolvePath(ite.path)"></u-item>
      </template>
    </el-submenu>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { RouteConfig } from "vue-router";
import ULink from "./u-link.vue";
import path from 'path'
import { isExternal } from "@/utils/validate";
@Component({
  name: 'u-item',
  components: { ULink },
})
export default class UItem extends Vue {
  @Prop({
    type: Object,
    default: () => {},
  })
  item!: RouteConfig;
  @Prop({
    type: String,
    default: "",
  })
  basePath!: string;

  @Getter("isCollapse") public isCollapse!: boolean;
  @Action("changeCollapse") public changeCollapse!: Function;
  onlyOneChildren = null;

  public mounted() {}
  handleCollapse(): void {
    this.changeCollapse();
  }
  resolvePath(routePath:string) {
    if (isExternal(routePath)) {
      return routePath;
    }
    if (isExternal(this.basePath)) {
      return this.basePath;
    }
    return path.resolve(this.basePath, routePath);
  }
  hasOneShowingChild(children = [], parent: any) {
    const showingChildren = children.filter((item: any) => {
      if (item.hidden) {
        return false;
      } else {
        // Temp set(will be used if only has one showing child)
        this.onlyOneChildren = item;
        return true;
      }
    });
    console.log("showingChildren", showingChildren);
    // When there is only one child router, the child router is displayed by default
    if (showingChildren.length === 1) {
      return true;
    }

    // Show parent if there are no child router to display
    if (showingChildren.length === 0) {
      this.onlyOneChildren = { ...parent, path: "", noShowingChildren: true };
      return true;
    }

    return false;
  }
}
</script>
<style scoped lang="scss">
::v-deep .is-active {
  background-color: rgba(24, 144, 255, 0.2) !important;
}
a{
    background-color: transparent;
}
a, a:focus, a:hover {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}
</style>
