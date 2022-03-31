<template>
  <div id="app">
    <!-- {{ message.split("").reverse().join("") }} -->
    <!-- {{"reverse" + "   nihao   " + reverse}} -->
    <!-- {{message = "你好世界"}} -->
    <!-- {{site}},
    {{site = 123}},
    {{site}}
    {{message}} -->
    {{ message }} <br />
    <br />
    <button @click="change">点击+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 1,
      
    };
  },
  // watch:{
  //   message(val){
  //     console.log(val);
  //   }
  // },
  computed: {
    // reverse(){
    //   return this.message.split("").reverse().join("")
    // }
    // site:{
    //   get(){
    //     return this.message.split("").reverse().join("")
    //   },
    //   set(test){
    //     console.log(test);
    //     this.message = "" + test;
    //   }
    // }
  },
  methods: {
    change() {
      this.message++;
    },
    test(){
      console.log("nihiaoshijie...");
    }
  },
};
</script>
