<template>
  <div>
      我是子组件！经测试，子组件的作用域数据是子组件的。
      <input type="text" v-model="datason">
  </div>
</template>

<script>
export default {
    props:{
        'value':{
            type:[Number,String]
        }
    },
    created(){
        this.datason = this.value;
    },
    watch:{
        value(val){
            this.datason = val;
        },
        datason(valu){
            this.$emit('input',valu)
        }
    },
    data(){
        return {
            datason:''
        }
    },
    methods:{
        nihaoson(){
            console.log('datason...',this.datason);
        }
    }
}
</script>

<style>

</style>