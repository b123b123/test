<template>
  <div>
      <div>test9</div>
      <div>
          <zujian v-model="nihao" :val="666"></zujian>
      </div>
      <div>test9</div>
      <hr>
      {{nihao}}
  </div>
</template>

<script>
import zujian from './test/ceshi1.vue'
export default {
    data(){
        return{
            nihao:0
        }
    },
    components:{
        zujian
    }
}
</script>

<style>

</style>