<template>
  <div>
      <div>定期评估</div>
      <el-table
      :data="tableData"
      :cell-style="colorCell"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期1"
        width="180">
      </el-table-column>
       <el-table-column
        prop="date2"
        label="日期2"
        class-name="nihao"
        width="180">
            <template slot-scope="scope">
              <div :class="compu(scope)">{{scope.row.date2}}</div>
            </template>
      </el-table-column>
      <el-table-column
        label="币值"
        width="180">
            <template slot-scope="scope">
              <div>{{parseInt((new Date()  - new Date(scope.row.date2))/1000/60/60/24)}}</div>
            </template>
      </el-table-column>
      <el-table-column
        prop="cha"
        label="差"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
    props:{
        tableData:Array,
    },
    methods:{
         colorCell({row, column, rowIndex, columnIndex}){
            // var dt = new Date(row.date2).getTime();
            // var now = new Date().getTime();
            // var cha = now - dt < 1000*60*60*24; 
            // console.log(cha);
            // if(columnIndex == "2" && row.cha == "好"){
            //     if(columnIndex == "1"){
                    // return 'color : red'
            //     }
            // }
        },
        compu(scope){
            let test;
            if(parseInt((new Date()  - new Date(scope.row.date2))/1000/60/60/24) <= 7){
                return 'specialColor0';
            }else if(parseInt((new Date()  - new Date(scope.row.date2))/1000/60/60/24) <= 250){
                return 'specialColor1';
            }else{
                return 'specialColor2';
            }
        }
    }
}
</script>

<style scoped>
.specialColor0{
    color: red;
}
.specialColor1{
    color: yellow;
}
.specialColor2{
    color: green;
}
/* ::v-deep .nihao{
    background: greenyellow;
} */

</style>