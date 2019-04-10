<template>
  <div
    @click="ruledetail"
    v-if="rule"
  >
    <p class="head_rule">点击查看{{rule}}规则
      <img
        class="rule_icon"
        src="/static/images/rule_icon.png"
        alt=""
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["rule", "type"],
  data() {
    return {
      rule: ""
    };
  },
  methods: {
    ruledetail() {
      console.log(this.type);
    }
  }
};
</script>

<style lang="scss" scoped>
.head_rule {
  width: 300rpx;
  text-align: center;
  margin: 30rpx auto 40rpx;
  border-radius: 50px;
  border: 0.5px solid #bc2e2e;
  color: #bc2e2e;
  font-size: 24rpx;
  height: 50rpx;
  line-height: 50rpx;
  .rule_icon {
    width: 18rpx;
    height: 18rpx;
  }
}
</style>
