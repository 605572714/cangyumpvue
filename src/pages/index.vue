<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin fix size="large"></i-spin>
    </div>
    <!-- 顶部搜索框 -->
    <van-search :value="value" placeholder="搜索文章内容"/>
    <!-- 首页轮播 -->
    <TopSwiper :imgUrls="imgUrls"/>
    <!-- 四个bunner -->
    <IndexButton/>
    <!-- 首页推荐 -->
    <recommend-list :recommend_list="recommend_list"/>
    <!-- 首页团购 -->
    <div>
      <h1>本期团购</h1>
      <recommend-list :prepare="prepare"/>
    </div>
    <!-- 精选文章 -->
    <div>
      <div class="article">精选文章</div>
      <corpusList :corpus_list="corpus_list"/>
      <div class="article" @click="goFind">点击查看更多</div>
    </div>
  </div>
</template>

<script>
import { get, getCheckToken } from "@/util";
import config from "@/config";
import TopSwiper from "@/components/TopSwiper";
import IndexButton from "@/components/IndexButton";
import RecommendList from "@/components/RecommendList";
import corpusList from "@/components/corpusList";
export default {
  components: {
    TopSwiper,
    IndexButton,
    RecommendList,
    corpusList
  },
  data() {
    return {
      imgUrls: [],
      recommend_list: [],
      // prepare: [],
      corpus_list: [],
      loading: true
    };
  },
  onLoad() {
    this.swiperList();
    this.recommendList();
    this.corpusList();
    getCheckToken();
  },
  methods: {
    //   首页轮播
    async swiperList() {
      const imgUrls = await get("carousel_recommend_list", {
        type: 1
      });
      this.imgUrls = imgUrls;
      console.log("轮播图");
      console.log(this.imgUrls);
    },
    // 首页推荐
    async recommendList() {
      const recommend_list = await get("home_recommend_list");
      this.recommend_list = recommend_list.list;
      var len = this.recommend_list.length;
      console.log("首页推荐");
      console.log(this.recommend_list);
      var len = this.recommend_list.length;
      var prepare = [];
      for (var i = 0; i < len; i++) {
        if (this.recommend_list[i].type == 13) {
          var data_str = this.recommend_list[i].json_content.replace(
            /&quot;/g,
            '"'
          );
          var data = JSON.parse(data_str);
          prepare.push(data);
          this.prepare = prepare;
        }
      }
      console.log("团购列表");
      console.log(this.prepare);
    },
    // 精选文章
    async corpusList() {
      const corpus_list = await get("article_list");
      this.corpus_list = corpus_list.list;
      this.loading = false;
      console.log("精选文章");
      console.log(this.corpus_list);
    },
    // 跳转发现页面
    goFind() {
      this.$router.push({ path: "find", isTab: true });
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 34rpx;
  text-align: center;
  padding: 30rpx;
  margin-top: 20rpx;
  background: #fff;
  /* padding-bottom: 10px; */ /* font-weight: bold; */
}
.article {
  padding: 30rpx;
  text-align: center;
  background: #fff;
  font-size: 34rpx;
}
</style>
