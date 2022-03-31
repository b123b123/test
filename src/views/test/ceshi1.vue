<template>
  <div>
      <div>woshi-ceshi1</div>
      <div>
          <ceshi2 v-bind="$attrs" v-on="$listeners"></ceshi2>
      </div>
      <div>
          测试一:{{val1}}
      </div>
      <div>woshi-ceshi1</div>
  </div>
</template>

<script>
import ceshi2 from './ceshi2.vue'
export default {
    props:{
        val1:{
            type:Number,
            default:111
        }
    },
    components:{
        ceshi2
    }
}
</script>

<style>

</style>