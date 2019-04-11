<template>
  <div>
    <historyList :history_list="list" />
  </div>
</template>

<script>
import { get } from "@/util";
import historyList from "@/components/historyList";
export default {
  components: {
    historyList
  },
  data() {
    return {
      page: 0,
      list:null
    };
  },
  onLoad() {
    this.request();
  },
  methods: {
    async request() {
      const list = await get("sale_screenings_list", {
        page: this.page
      });
      this.list = list.list;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
