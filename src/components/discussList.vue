<template>
  <div>
    <div
      class="discuss"
      v-for="item in discuss_list"
      :key="item"
    >
      <p><span :style="item.user_type==1?'color:#bc2e2e':''">{{item.nickname_comment}}</span><span v-if="item.reply_type==1"> 回复 <span :style="item.user_type==1?'color:#bc2e2e':''">{{item.tonickname}}</span></span>：{{item.comment}}</p><br />
    </div>
  </div>

</template>

<script>
export default {
  props: ["discuss_list"],
  data() {
    return {
    };
  },
  onLoad() {
    console.log(this.discuss_list);
  }
};
</script>

<style lang="scss" scoped>
.discuss {
  font-size: 28rpx;
  margin-top: 20rpx;
  color: #666;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 1; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
