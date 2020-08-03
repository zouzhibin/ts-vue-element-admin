<template>
    <div class="m-layout-content">
        <div class="enterprise-manage">
            <div class="enterprise-manage-header">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item >
                        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-select v-model="formInline.region" placeholder="活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                        <el-button>重置</el-button>
                    </el-form-item>
                </el-form>
                <div>
                    <el-button type="primary" @click="onSubmit">新增</el-button>
                </div>
            </div>
            <div>
                <el-table
                        :data="tableData"
                        style="width: 100%">
                    <el-table-column
                            prop="date"
                            label="企业"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="登录帐号"
                            >
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="状态">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="充值手续费比率">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="提现手续费比率">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="创建/更新时间">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="操作">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div>
                    <el-pagination
                            :current-page="queryForm.pageNo"
                            :page-size="queryForm.pageSize"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            background
                            :layout="layout"
                            :total="1000">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Getter, Action } from 'vuex-class'
import { Vue, Component } from "vue-property-decorator";
@Component({
    components:{
    }
})
class Management extends Vue {
    formInline = {
        user: '',
        region: ''
    }
    layout = "total, sizes, prev, pager, next, jumper"
    queryForm= {
        pageNo: 1,

        pageSize: 10,
    }
    tableData=[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    onSubmit() {
        console.log('submit!');
    }
    handleClick(row) {
        console.log(row);
    }
    handleSizeChange(){

    }
    handleCurrentChange(){

    }
}

export default Management
</script>
<style lang="scss" >
.enterprise-manage{
    .enterprise-manage-header{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}
</style>
