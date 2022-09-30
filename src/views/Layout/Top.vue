<template>
  <div class="container"></div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      sub: false,
      name: '',
      title: this.$route.meta.title
    }
  },
  methods: {
    getout () { // 退出登录清除 localStorage
      window.localStorage.clear()
      this.$store.commit('user/login')
      // this.$store.commit('login/show')
    }, // 退出登录
    to () {
      this.falg = !this.falg
    }
  },
  created () {
  },
  mounted () {

  },
  updated () {

  }

}
</script>

<style scoped lang='less'>
.container {
  width: 100%;
  height: 90px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.82) 30%,
    rgba(0, 0, 0, 0.61) 56%,
    rgba(0, 0, 0, 0)
  );
}

.top {
  width: 1920px;
  height: 100%;
  margin: 0 auto;
  display: flex;
}

.top .logo {
  background: url(@/assets/logo/logo.png) no-repeat;
  height: 47px;
  width: 170px;
  margin-top: 10px;
  margin-left: 260px;
}

.top > ul {
  display: flex;
  align-items: center;
  margin-left: 340px;
}

.top > ul > li {
  width: 100px;
  height: 70px;
  position: relative;
}

.top > ul > li a {
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.top > ul > li:hover::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 48px;
  bottom: 0;
  right: auto;
  height: 4px;
  width: 75px;
  border-radius: 4px;
  background-color: #ffa031;
}

.top > ul > li:nth-child(1):hover::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 48px;
  bottom: 0;
  right: auto;
  height: 4px;
  width: 40px;
  border-radius: 4px;
  background-color: #ffa031;
}

.top a {
  font-size: 18px;
}
</style>
