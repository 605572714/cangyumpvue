<template>
  <div>
    <div class="top">
      <table>
        <th>我是标题</th>
        <tr>
          <td>1234</td>
          <td>2345</td>
        </tr>
        <tr>
          <td>1234</td>
          <td>2345</td>
        </tr>
        <tr>
          <td>1234</td>
          <td>2345</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad(options) {
    console.log(options);
  }
};
</script>

<style lang="scss" scoped>
</style>
