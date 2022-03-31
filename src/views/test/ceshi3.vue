<template>
  <div>
      <slot name="header" v-bind:opo="ceshi3" v-bind:ni="nihao()">1</slot>
      <p>
        测试插槽子级{{ceshi3}}
      </p>
      <slot name="footer">2</slot>
  </div>
</template>

<script>
export default {
    data(){
        return {
            ceshi3:3
        }
    },
    methods:{
        nihao(){
            return 3;
            let nihao = 3;
            console.log(nihao);
        }
    }
}
</script>

<style>

</style>