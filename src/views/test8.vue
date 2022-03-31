<template>
  <my-input v-model="value" @nihao="onchange"></my-input>
</template>

<script>
 import MyInput from '../components/input.vue';
 export default {
    components: {
      MyInput
    },
    data() {
      return {
        value: ''
      }
    },
    methods:{
      onchange(e){
        console.log(e);
        console.log(this.value);
      }
    }
  }
</script> 