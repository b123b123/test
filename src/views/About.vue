<template>
  <div>
    {{message}}
    <br>
    <br>
    <button @click="change">点击 +</button>
    <br>
    <br>
    <div>
      {{formatName(mockData)}}
    </div>
    <hr>
    <ul>
      <li v-for="(value,index) in list" :key="index">
        {{value.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import "../../mock";
let wrap = {
  message:1,
  mockData:"mock数据",
  list:''
}
export default {
  data(){
    return wrap;
  },
  methods:{
    change(){
      this.message ++;
      this.$axios.get("nihaoshijie").then(res=>{
        console.log(res);
        this.list = res.data.dataOne;
        console.log(this.list);
      })
    },
	formatName(name){
	   let newStr;
	   if (name.length === 2) {
	   newStr = name.substr(0, 1) + '*';
	   } else if (name.length > 2) {
	     let char = '';
	     for (let i = 0, len = name.length - 2; i < len; i++) {
	       char += '*';
	     }
	     newStr = name.substr(0, 1) + char + name.substr(-1, 1);
	   } else {
	     newStr = name;
	   }
	   return newStr;
	}
  },
  // filters:{
  //   test(val,val2){
  //     console.log(val);
  //     console.log(val2);
  //     return val;
  //   }
  // }
}
</script>

<style scoped>
li{
  list-style: none;
}

</style>