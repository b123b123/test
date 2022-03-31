<template>
	<div>
		测试引入、导出
		<hr>
		{{nihao()}}
		<hr>
		{{yinru.nihao4}}
	</div>
</template>

<script type="text/javascript">
	import {nihao,nihao1} from '../utils/export2.js';
	export default {
		data(){
			return {
				yinru:nihao1()
			}
		},
		methods:{
			nihao(){
				console.log(nihao1);
				return 1;
			}
		}
	}
</script>

<style type="text/css">
</style>