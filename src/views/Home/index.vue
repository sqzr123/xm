<template>
  <div>
    <div class="contint">
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="18"
              ><div class="grid-content bg-purple">
                <el-row>
                  <el-col :span="4"
                    ><div class="grid-content bg-purple logo">
                      <img src="../../assets/logo/logo.png" alt="" />
                    </div>
                  </el-col>
                  <el-col :span="18"
                    ><div class="grid-content bg-purple-light list">
                      
                    </div></el-col
                  >
                </el-row>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">2</div></el-col
            >
          </el-row>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>

export default {
  created () { },
  data () {
    return {}
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.contint {
  width: 1366px;
  height: 768px;
  margin: 0 auto;
}
.logo {
  width: 156px;

  background-size: 100% 100%;
}
.list {
  margin-left: 10px;
}
</style>
