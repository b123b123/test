<template>
	<div>
		{{msg}},{{data}}
		<br>
		<br>
		<br>
		{{data1}}
	</div>
</template>	

<script>
	// import way from "../utils/files.js"
	import {way,a as nihao} from "../utils/files.js"
	export default {
		data(){
			return {
				msg:'你好世界',
				data: nihao,
				data1:way(1,2)
			}
		}
	}
</script>

<style>
</style>
