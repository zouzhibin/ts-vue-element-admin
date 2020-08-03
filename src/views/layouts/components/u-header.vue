<template>
    <div class="m-container" >
        <div class="left-panel">
            <div :class="isCollapse?'el-icon-s-fold':'el-icon-s-unfold'"  class="fold-unfold" @click="handleCollapse"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter, Action } from 'vuex-class'
@Component({
    components:{}
})
export default class Header extends Vue{
    @Getter('isCollapse') public isCollapse!: boolean
    @Action('changeCollapse') public changeCollapse!:Function
    public mounted(){
        console.log('sss',this.isCollapse)
    }
    handleCollapse():void {
        this.changeCollapse()
    }
}
</script>
<style lang="scss" scoped>
.m-container {
    position: relative;
    /*min-height: 100%;*/
    /*margin-left: 220px;*/
    background: white;
    /*transition: all 0.2s ease-in-out;*/
    .left-panel{
        display: flex;
        align-items: center;
        justify-items: center;
        height: 64px;
        max-height:64px;
    }
    .fold-unfold {
        margin-left: 10px;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.65);
        cursor: pointer;
    }
}
.is-collapse-main {
    margin-left: 64px;
}
</style>
