<template>
  <div>
      测试网格布局！
      测试单位值fr ———— 分配剩余空间;
      <div class="div">
           <ta-input class="grida" placeholder="Basic usage">
               <template v-slot:addonBefore>
                   <span>
                       你好世界！
                   </span>
               </template>
           </ta-input>
           <ta-input class="gridb"  placeholder="Basic usage"/>
           <ta-input class="gridc"  placeholder="Basic usage"/>
           <ta-input class="gridd"  placeholder="Basic usage"/>
           <ta-input class="gridd"  placeholder="Basic usage"/>
           <ta-input class="gridd"  placeholder="Basic usage"/>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.div{
    display: grid;
    /* grid-template-columns: repeat(2,1fr); */
    grid-template-columns:1fr 1fr 2fr;
    /* grid-template-rows: repeat(2,1fr); */
    grid-gap:30px;
}
/* .div{
    display: grid;
    grid-template-areas: 
        "a b c"
        "d d c"    
    ;
    width: 300px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    place-items: center;
    grid-gap: 20px;
}
.grida{
    grid-area: a;
}
.gridb{
    grid-area: b;
}
.gridc{
    grid-area: c;
}
.gridd{
    grid-area: d;
}
::v-deep .ant-input-group-addon{
    border:none;
    background:#fff;
    text-align: right;
} */
</style>