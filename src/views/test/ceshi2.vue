<template>
    <div>
        <div>ceshi2</div>
        <input type="text" v-bind="$attrs" @input="observerInput"> <br>
        测试二:{{val}}
        <div>ceshi2</div>
    </div>
</template>

<script>
export default {
    props:{
        val:{
            type:Number,
            default:222
        }
    },
    methods:{
        observerInput(el){
            this.$emit('input', el.target.value)
        }
    }
}
</script>

<style>

</style>