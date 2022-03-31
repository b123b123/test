<template>
  <div>
    {{message | test("nihao")}}
    <br>
    <br>
    <button @click="change">点击 +</button>
    学习git实验中
  </div>
</template>

<script>
let wrap = {
  message:2
}
export default {
  data(){
    return wrap;
  },
  methods:{
    change(){
      this.message ++
    }
  },
  filters:{
    test(val,val2){
      console.log(val);
      console.log(val2);
      return val;
    }
  }
}
</script>

<style>

</style>