<template>
  <div>
    <div>你好世界!</div>
    <el-input v-bind="$attrs" v-on="$listeners" @change="onchange">
    </el-input>
  </div>
</template>

<script>
export default {
    name:'nihao',
    methods:{
        onchange(){
            this.$emit('nihao','123...');
        }
    }
};
</script>