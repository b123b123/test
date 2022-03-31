import Mock from "mockjs"
const url = {
    tableDataOne: "nihaoshijie",
    tableDataTwo: "http://20211104mock.com/tableDataTwo",
    tableDataThree: "http://20211104mock.com/tableDataThree",
}

// export default [Mock.mock(url.tableDataOne, {
//     'dataSource|5': [{
//         'key|+1': 1,
//         'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
//         'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
//         'mockAction|1': ['下载', '试听', '喜欢']
//     }]
// }),Mock.mock(url.tableDataTwo, {
//     'dataSource|10': [{
//         'key|+1': 1,
//         'mockTitle|1': ['哑巴', 'Butter-fly', '肆无忌惮', '摩天大楼', '初学者'],
//         'mockContent|1': ['你翻译不了我的声响', '数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘'],
//         'mockAction|1': ['下载', '试听', '喜欢']
//     }]
// })]

export default [Mock.mock(url.tableDataOne,{
    'dataOne|10':[{
        'key|+1':1,
        'name|':function() {
            return this.key
          },
        'mockContent|1':['你翻译不了我的声响','数码宝贝主题曲', '摩天大楼太稀有', '像海浪撞破了山丘']
    }]
})]