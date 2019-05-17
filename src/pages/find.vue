<template>
  <div class="page">
    <!-- 顶部搜索 -->
    <div class="search">
      <div class="search_content" bindtap="searchAction">
        <img class="search_icon" src="/static/images/search.png">
        <span class="search_text">搜索文章内容</span>
      </div>
    </div>

    <van-tabs swipeable>
      <van-tab title="读点">
        <div class="corpus">
          <corpusList :corpus_list="corpus_list"/>
        </div>
      </van-tab>
      <van-tab title="发现">
        <specialList :special_list="special_list"/>
      </van-tab>
      <van-tab title="课程">
        <specialList :special_list="special_list"/>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { get } from "@/util";
import corpusList from "@/components/corpusList";
import specialList from "@/components/specialList";
export default {
  components: {
    corpusList,
    specialList
  },
  data() {
    return {
      corpus_list: [],
      special_list: []
    };
  },
  methods: {
    async requestList() {
      // 读点列表
      const corpus_list = await get("article_list");
      this.corpus_list = corpus_list.list;
      console.log("读点");
      console.log(this.corpus_list);
      // 专题列表
      const special_list = await get("special_list");
      this.special_list = special_list.list;
      console.log("专题");
      console.log(this.special_list);
    }
  },
  onLoad() {
    this.requestList();
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
  .search {
    border-top: 1rpx solid#fff;
    width: 750rpx;
    height: 98rpx;
    background: #fff;
    .search_content {
      width: 690rpx;
      height: 60rpx;
      margin-top: 20rpx;
      margin-left: 30rpx;
      border-radius: 40rpx;
      border: 1rpx solid #d9d9d9;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .search_icon {
        width: 32rpx;
        height: 32rpx;
        margin-right: 12rpx;
      }

      .search_text {
        font-size: 28rpx;
        color: #7f7f7f;
      }
    }
  }
  .corpus {
    padding: 20rpx 0;
  }
}
</style>
