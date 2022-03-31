<template>
  <div class="nihaon">
      <div>待结算申请</div>
       <el-table
    :data="tableData"
    border
    :cell-style="colorCell"
    :header-cell-style="{background:'blue'}"
    :row-class-name="tableRowClassName"
    :header-row-style="{color:'red'}"
    max-height = "330">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      fixed
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">处理</el-button>
      </template>
    </el-table-column>
  </el-table>
   <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[10, 20, 30, 40]"
      background
      :page-size="10"
      layout="prev, pager, next,sizes"
      :total="100">
    </el-pagination>
  </div>
  </div>
</template>

<script>
export default {
    props:{
        tableData:Array,
    },
    data(){
        return{
            currentPage2:1
        }
    },
    methods:{
        handleClick(data){
            console.log(data);
            console.log(data.address);
            this.$router.push('test2')
        },
        colorCell({row, column, rowIndex, columnIndex}){
            if(columnIndex == "0" && row.date == "2016-05-02"){
                return 'color:red;'
            }
            
        },
        tableRowClassName({row, rowIndex}) {
          if(rowIndex % 2 == 0){
            return 'warning-row';
          }else{
            return 'success-row';
          }
        },
        handleCurrentChange(e){
            console.log('当前',e);
        },
        handleSizeChange(){
            console.log('');
        }
    }

}
</script>

<style scoped>
::v-deep .el-table .warning-row {
    background: blueviolet;
}
 ::v-deep .el-table .success-row {
    background: yellow;
}
::v-deep .el-table__body .el-table__row.hover-row td{
    background-color: aqua!important;
}
/* ::v-deep .el-table tbody tr:hover  td {
  background-color: red!important;
  color: #000;
} */
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #fff;
  color: #000;
  border: 1.5px solid blue;
}
.el-pagination{
    position: absolute;
    bottom: 2%;
    right: 2%;
}
</style>