<template>
	<div ref="print" @click="print" class="recordImg" id="printRecord">
		<el-table id="but" ref="printTable" :data="tableData" style="width: 100%" @row-click="test(arguments)">
			<el-table-column prop="date" label="日期">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="姓名">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="nihao" label="name">
			</el-table-column>
			<el-table-column prop="map['自理一']" label="name">
			</el-table-column>


			<template v-for="(item,key,index) in tableData[0].map">
				<el-table-column :prop="key" :label="key">
				</el-table-column>
			</template>
		</el-table>

		<hr>
		</el-table>
		<el-button class="bu" type="primary" @click="print">打印</el-button>
		<el-button class="bu" type="primary" @click="exportExcel">导出</el-button>
	</div>
</template>

<script>
	import Printjs from "print-js";
	import FileSaver from 'file-saver'
	import XLSX from 'xlsx'
	export default {
		data() {
			return {
				tableData: [{
						date: '2016-05-02',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1518 弄',
						map: {
							"自理一": 23,
							"自理二": 21,
							"自理三": 29,
						},
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						// map: [
						// 	["01", "自理一", 111],
						// 	["02", "自理二", 222]
						// ]
						map: {
							"自理一": 123,
							"自理二": 121,
							"自理三": 129,
						}
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						map: {
							"自理一": 23,
							"自理二": 21,
							"自理三": 29,
						}
						// map: [
						// 	["01", "自理一", 1111],
						// 	["02", "自理二", 2222]
						// ],
						// map1: {
						// 	'01': {
						// 		"自理一": 23
						// 	},
						// 	'02': {
						// 		"自理二": 21
						// 	}
						// },
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						// map: [
						// 	["01", "自理一", 111],
						// 	["02", "自理二", 222]
						// ]
						map: {
							"自理一": 123,
							"自理二": 121,
							"自理三": 129,
						}
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						// map: [
						// 	["01", "自理一", 111],
						// 	["02", "自理二", 222]
						// ]
						map: {
							"自理一": 123,
							"自理二": 121,
							"自理三": 129,
						}
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						// map: [
						// 	["01", "自理一", 111],
						// 	["02", "自理二", 222]
						// ]
						map: {
							"自理一": 123,
							"自理二": 121,
							"自理三": 129,
						}
					},
					{
						date: '2016-05-04',
						name: '王小虎',
						address: '上海市普陀区金沙江路 1517 弄',
						// map: [
						// 	["01", "自理一", 111],
						// 	["02", "自理二", 222]
						// ]
						map: {
							"自理一": 123,
							"自理二": 121,
							"自理三": 129,
						}
					},
				],
				nihao: 1
			}
		},

		methods: {
			test(argu) {
				console.log(argu);
			},
			print(id) {
				const html =this.$refs.print.innerHTML
				    // 新建一个 DOM
				    const div = document.createElement('div')
				    const printDOMID = 'printDOMElement'
				    div.id = printDOMID
				    div.innerHTML = html
				
				    // 提取第一个表格的内容 即表头
				    const ths = div.querySelectorAll('.has-gutter th');
				    const ThsTextArry = []
				    for (let i = 0, len = ths.length; i < len; i++) {
				        if (ths[i].innerText !== '') ThsTextArry.push(ths[i].innerText)
				    }
					
				    // 删除多余的表头
				    div.querySelector('.hidden-columns').remove()
				    // 第一个表格的内容提取出来后已经没用了 删掉
				    div.querySelector('.el-table__header-wrapper').remove()
				
				    // 将第一个表格的内容插入到第二个表格
				    let newHTML = '<tr>'
				    for (let i = 0, len = ThsTextArry.length; i < len; i++) {
				        newHTML += '<td style="text-align: center; font-weight: bold">' + ThsTextArry[i] + '</td>'
				    }
				
				    newHTML += '</tr>'
				    div.querySelector('.el-table__body-wrapper table').insertAdjacentHTML('afterbegin', newHTML)
				    // 将新的 DIV 添加到页面 打印后再删掉
				    document.querySelector('body').appendChild(div)
					console.log(newHTML);
					window.print();
					debugger
					
					
				// const style = "#but{ font-size:30px } th,td{border:1px solid black} .bu{width:100px}";
				// // debugger
				// Printjs({
				// 	printable: "printRecord",
				// 	type: "html",
				// 	scanStyles: false,
				// 	style: style
				// });
			},
			//定义导出Excel表格事件
			exportExcel() {
				let xlsxParam = {
					raw: true
				}; //转换成excel时，使用原始的格式
				// / generate workbook object from table /;
				/* 从表生成工作簿对象 */
				let wb = XLSX.utils.table_to_book(
					document.querySelector("#printRecord"), //elementui 表格的id
					xlsxParam
				);

				/* 获取二进制字符串作为输出 */
				var wbout = XLSX.write(wb, {
					bookType: "xlsx",
					bookSST: true,
					type: "array"
				});
				try {
					FileSaver.saveAs(
						//Blob 对象表示一个不可变、原始数据的类文件对象。
						//Blob 表示的不一定是JavaScript原生格式的数据。
						//File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
						//返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。
						new Blob([wbout], {
							type: "application/octet-stream"
						}),
						//设置导出文件名称
						"sheetjs.xlsx"
					);
				} catch (e) {
					if (typeof console !== "undefined") console.log(e, wbout);
			 }
				return wbout;
			}
		}
	}
</script>
