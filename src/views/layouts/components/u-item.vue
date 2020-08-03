<template>
    <div v-if="!item.hidden">
        <el-menu-item :index="item.path" v-if="!(item.children&&item.children.length)" >
            <!--        <i class="el-icon-menu"></i>-->
            <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
        <el-submenu :index="item.path" v-else>
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{item.meta.title}}</span>
            </template>
            <template v-for="ite in item.children">
                <u-item :item="ite" :key="ite.path"></u-item>
            </template>
        </el-submenu>
    </div>
</template>
<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'
import { RouteConfig } from 'vue-router'
@Component({
    components:{}
})
export default class UItem extends Vue{
    @Prop({
        type: Object,
        default: () => {}
    })
    item!: RouteConfig;
    @Getter('isCollapse') public isCollapse!: boolean
    @Action('changeCollapse') public changeCollapse!:Function
    public mounted(){
    }
    handleCollapse():void {
        this.changeCollapse()
    }
}
</script>
<style scoped lang="scss">
    ::v-deep .is-active {
        background-color: rgba(24, 144, 255, 0.2)!important;
    }
</style>
