<template>
  <div id="scrollwrap">
      <ul>
          <li @click="scrollmethod(item)" v-for="(item,index) in infor" :key="index">{{item.name}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            active:true
        }
    },
    props:{
        infor:{
            type:Array,
            default(){
                return [{
                    id:'nihao',
                    name:'你好'
                }]
            }
        },
        distance:{
            type:Number,
            default:50
        }
    },
    methods:{
        scrollmethod(item){
            let distance = document.getElementById(item.id).offsetTop - this.distance;
            this.$nextTick(() => {
                window.scrollTo({
                    top: distance,
                    behavior: 'smooth'
                });
            });
        }
    }
}
</script>

<style scoped>
#scrollwrap{
    width: 100px;
    height: 300px;
    background: aquamarine;
    position: fixed;
    top: 30%;
    right: 2%;
}
ul{
    text-align: center;
}
li{
    cursor: pointer;
    margin: 10px;
    list-style: none;
}
</style>