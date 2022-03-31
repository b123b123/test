<template>
  <div>
      <h1 id="ni">你</h1>
      <h1 id="hao">好</h1>
      <h1 id="shi">世</h1>
      <h1 id="jie">界</h1>
      <h1 id="tan">！</h1>
      <scroll :infor="[{id:'ni',name:'你'},{id:'hao',name:'好'},{id:'shi',name:'世'},{id:'jie',name:'界'},{id:'tan',name:'!'}]"
      ></scroll>
  </div>
</template>

<script>
import scroll from '../components/scroll.vue'
export default {
    data(){
        return{
            
        }
    },
    components:{
        scroll
    }
}
</script>

<style scoped>
h1{
    height: 500px;
}
#ni{
    background: palegoldenrod;
}
#hao{
    background-color: aquamarine;
}
#shi{
    background-color: orange;
}
#jie{
    background-color: skyblue;
}
#tan{
    background-color: wheat;
}
</style>