<template>
    <div>
        <u-sidebar></u-sidebar>
        <section class="g-layout-container" :class="isCollapse ? 'is-collapse-main' : ''">
            <u-header></u-header>
            <u-main class="g-layout-content">
            </u-main>
        </section>
    </div>
</template>
<script lang="ts">
import { Getter, Action } from 'vuex-class'
import { Vue, Component } from "vue-property-decorator";
import USidebar from './components/u-sidebar.vue'
import UHeader from './components/u-header.vue'
import UMain from './components/u-main.vue'
@Component({
    name:'layout',
    components:{
        USidebar,
        UHeader,
        UMain
    }
})
export default class Layouts extends Vue {
    @Getter('isCollapse') public isCollapse!: boolean
    protected get title(){
        const router:any = this.$router
        return router.history.current.meta.title
    }
}
</script>
<style lang="scss" scoped>
    .g-layout-container{
        position: relative;
        min-height: 100%;
        margin-left: 220px;
        background: #f6f8f9;
        display: flex;
        // height: 100vh;
        flex-direction: column;
        transition: all 0.2s ease-in-out;
    }
    .is-collapse-main{
        margin-left:65px
    }
    .g-layout-content{
        margin:0px 24px 24px 24px;
        flex: 1;
        display: flex;
        flex-direction: column;
        .title{
            line-height: 48px;
        }
    }
</style>
