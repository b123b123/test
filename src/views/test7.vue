<template>
  <div>
      <h3 v-for="item in attr" :key="item">
        {{
          item == 2 ? 0 : item
        }}
      </h3>
  </div>
</template>

<script>
export default {
  data(){
    return {
      attr:[1,2,3,4,5]
    }
  }
}
</script>

<style>

</style>