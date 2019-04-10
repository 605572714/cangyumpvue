<template>
  <div>
    <!-- 加载状态 -->
    <div v-if="loading">
      <i-spin
        fix
        size="large"
      ></i-spin>
    </div>
    <van-search
      :value="value"
      placeholder="搜索文章内容"
    />
    <TopSwiper :imgUrls="imgUrls" />
    <IndexButton />
    <recommend-list :recommend_list="recommend_list" />
    <recommend-list :prepare="prepare" />
    <div class="article">精选文章</div>
    <corpusList :corpus_list="corpus_list" />
    <div
      class="article"
      @click="goFind"
    >点击查看更多</div>
  </div>
</template>

<script>
import { get } from "@/util";
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
      corpus_list: [],
      loading: true
    };
  },
  methods: {
    //   首页轮播
    async swiperList() {
      const imgUrls = await get("carousel_recommend_list", {
        type: 1
      });
      this.imgUrls = imgUrls;
      console.log(this.imgUrls);
    },
    // 首页推荐
    async recommendList() {
      const recommend_list = await get("home_recommend_list");
      this.recommend_list = recommend_list.list;
      var len = this.recommend_list.length;
      console.log(this.recommend_list);
      while (len--) {
        if (this.recommend_list[len].type == 13) {
          const prepare = this.recommend_list[len];
          this.prepare = prepare;
          var obj1_str = this.prepare.json_content.replace(/&quot;/g, '"');
          var obj1 = JSON.parse(obj1_str);
          this.prepare = obj1;
        }
      }
      console.log(this.prepare);
    },
    // 精选文章
    async corpusList() {
      const corpus_list = await get("article_list");
      this.corpus_list = corpus_list.list;
      this.loading = false;
      console.log(this.corpus_list);
    },
    // 跳转发现页面
    goFind() {
      wx.switchTab({
        url: "../find/main"
      });
    }
  },
  mounted() {
    this.swiperList();
    this.recommendList();
    this.corpusList();
  }
};
</script>

<style lang="scss" scoped>
.article {
  padding: 30rpx;
  text-align: center;
  background: #fff;
  font-size: 34rpx;
}
</style>
