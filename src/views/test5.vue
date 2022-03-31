<template>
  <div>
    你好世界！！！
    <div class="div1">
      <div class="rightCard" @click.prevent="goTo">
          <div>
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="divTwo">
              <div class="word">定期评估</div>
              <div class="num">{{num}}</div>
          </div>
      </div>
      <div class="rightCard"  @click.prevent="goToSelect">
          <div>
              <img src="../assets/logo.png" alt="">
          </div>
          <div class="divTwo">
              <div class="word">待结算申请</div>
              <div class="num">8</div>
          </div>
      </div>
    </div>
    <div class="div2">
        <component :is="componentSelect" :tableData="nihao"></component>
    </div>
  </div>
</template>

<script>
import comOne from '../components/ComponentOne.vue';
import comTwo from '../components/ComponentTwo.vue';
export default {
    components:{
        comOne,
        comTwo
    },
    data(){
        return{
            componentSelect:'comOne',
            num:9,
            nihao: [{
            date: '2016-05-02',
            date2: '2020-12-05',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            date2: '2021-05-05',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            date2: '2021-05-07',
            cha:'好',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },{
            date: '2016-05-03',
            date2: '2021-12-01',
            cha:'差',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        }
    },
    methods:{
        goTo(){
            this.num ++;
            console.log('nihao...');
            this.componentSelect = 'comOne';
        },
        goToSelect(){
            this.componentSelect = 'comTwo';
        }
    }
};
</script>

<style scoped>
.word{
    font-size: 14px;
}
.num{
    font-size: 20px;
    font-weight: bold;
}
.rightCard:hover{
    box-shadow: 0px 1px 2px 1px #ddd;
    background: #fff;
    transform: translate(0px,2px);
}
.divTwo div:nth-child(2){
    margin-top: 5px;
}
.divTwo div{
    text-align: left;
    margin-top: -5px;
}
.rightCard .divTwo{
    margin-left: 10px;
}
.rightCard img{
    width: 50px;
}
.rightCard:nth-child(2){
    margin-left: 50px;
}
.rightCard{
    width: 150px;
    height: 40px;
    background: #eee;
    border-radius: 10px;
    padding:20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid transparent;
    transition: all 0.2s;
}
.div1 {
  background: red;
  height: 100px;
  display: flex;
}
.div2 {
  background: yellow;
  height: 300px;
}
</style>