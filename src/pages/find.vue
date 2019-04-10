<template>
  <div class="page">
    <van-tabs swipeable>
      <van-tab title="读点">
        <div class="corpus">
          <corpusList :corpus_list="corpus_list" />
        </div>
      </van-tab>
      <van-tab title="发现">
        <specialList :special_list="special_list" />
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
  mounted() {
    this.requestList();
  }
};
</script>

<style lang="scss" scoped>
.page {
  background: #fff;
  .corpus {
    padding: 20rpx 0;
  }
}
</style>
