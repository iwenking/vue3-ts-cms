<template>
  <nav>
    <router-link to="/login">登录</router-link> |
    <router-link to="/main">主页 </router-link>
  </nav>
  <router-view />
  <el-button type="danger">哈哈哈哈</el-button>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
