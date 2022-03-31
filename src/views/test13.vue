<template>
  <div>
      测试插槽父级{{attrs}}
      <br>
      <nihao>
          <span slot="header" slot-scope="qoq">
              {{qoq}}
          </span>
      </nihao>
  </div>
</template>

<script>
import ceshi3 from './test/ceshi3.vue'
export default {
    components:{
        nihao:ceshi3
    },
    data(){
        return{
            attrs:3
        }
    }
}
</script>

<style>

</style>