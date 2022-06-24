 <template>
  <div>
    <tree-transfer
      :title="title"
      :from_data="fromData"
      :to_data="toData"
      :defaultProps="{ label: 'label' }"
      @add-btn="add"
      @remove-btn="remove"
      :mode="mode"
      height="540px"
      filter
      openAll
      :transferOpenNode="bool"
    >
    </tree-transfer>
  </div>
</template>

<script>
import treeTransfer from "el-tree-transfer"; // 引入

export default {
  hello: "999",
  created() {
    // this.hello = "111";
    console.log("this1 ==> ", this);
    console.log("this1 ==> ", this.$options.hello);
    // this.$set(this, "hello", "nihao");
    // console.log("this2 ==> ", this.hello);
    // this.hello = "666";
    // console.log("this3 ==> ", this.hello);
  },
  data() {
    return {
      title: ["你好", "世界"],
      bool: false,
      mode: "transfer", // transfer addressList
      fromData: [
        {
          id: "1",
          pid: 0,
          label: "一级 1",
          children: [
            {
              id: "1-1",
              pid: "1",
              label: "二级 1-1",
              disabled: true,
              children: [],
            },
            {
              id: "1-2",
              pid: "1",
              label: "二级 1-2",
            },
          ],
        },
      ],
      toData: [],
    };
  },
  methods: {
    // 切换模式 现有树形穿梭框模式transfer 和通讯录模式addressList
    changeMode() {
      if (this.mode == "transfer") {
        this.mode = "addressList";
      } else {
        this.mode = "transfer";
      }
    },
    // 监听穿梭框组件添加
    add(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
    // 监听穿梭框组件移除
    remove(fromData, toData, obj) {
      // 树形穿梭框模式transfer时，返回参数为左侧树移动后数据、右侧树移动后数据、移动的{keys,nodes,halfKeys,halfNodes}对象
      // 通讯录模式addressList时，返回参数为右侧收件人列表、右侧抄送人列表、右侧密送人列表
      console.log("fromData:", fromData);
      console.log("toData:", toData);
      console.log("obj:", obj);
    },
  },
  components: { treeTransfer }, // 注册
};
</script>

    <style>
</style>