<template>
	<div>
		<span @click="test2">你好世界！</span>
		<br>
		<br>
		<br>
		{{msg}}	
	</div>
</template>

<script>
	import {url,nihao} from '../utils/export1.js'
	export default {
		data(){
			return {
				msg:'url',
				// test1:'123'
			}
		},
		methods:{
			test(){
				this.$store.commit('www',33)
			},
			test1(){
				console.log('................');
				alert("nihao")
			},
			test2(){
				// this.$options.methods.test1();
				this.$router.push('test5')
				// this.test1();
			}
		}
	}
</script>

<style>
</style>
