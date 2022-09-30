<template>
  <div id="index" class="flex-d">
    <!-- <div class="z-index"><Top></Top></div> -->
    <div class="flex1"><router-view></router-view></div>
  </div>
</template>

<script>
import Top from '@/views/Layout/Top.vue'
export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: { Top }
}
</script>

<style scoped lang='less'>
#index {
  height: 100%;
  .router {
    overflow: auto;
    position: relative;
    margin-top: -90px;
  }
}
.z-index {
  position: relative;
  z-index: 999;
}
</style>
