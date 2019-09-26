<template>
  <div class="search">
  	<input type="search">
  	<input type="button" value="搜索">

  	<router-link to="/home">返回首页</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>