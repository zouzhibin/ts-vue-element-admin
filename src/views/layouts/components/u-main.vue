<template>
    <div class="m-layout-content">
        <div class="title">
            <div>{{title}}</div>
        </div>
        <div class="m-layout-inner">
            <router-view :key="key"></router-view>
        </div>
    </div>

</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
    components:{}
})
export default class UMain extends Vue{
    private get key():string{
        return this.$route.fullPath
    }
    private get title():string{
        return this.$route.meta.title
    }
}

</script>
<style lang="scss" scoped>
    .m-layout-content{
        flex: 1;
        display: flex;
        flex-direction: column;
        .title{
            line-height: 48px;
        }
        .m-layout-inner{
            flex: 1;
            padding:20px 32px;
            background: white;
        }
    }
</style>
