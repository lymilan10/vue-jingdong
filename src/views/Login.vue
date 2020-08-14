<template>
  <div>
    <img
      class="headerimg"
      src="https://bkimg.cdn.bcebos.com/pic/6d81800a19d8bc3ef3656f908d8ba61ea8d3457e?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg"
      alt
    />
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
      schema: {
        fields: [
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名",
            },
            rules: {
              //校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15,
            },
            trigger: "blur",
            message: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名不能多于15个字符",
            },
          },
          //密码配置
          {
            type: "input",
            modelKey: "password",
            label: "密码",
            props: {
              placeholder: "请输入密码",
              type: "password",
              eye: {
                open: false,
              },
            },
            rules: {
              //校验规则
              required: true,
              type: "string",
              min: 3,
              max: 15,
            },
            trigger: "blur",
          },
          {
            type: "submit",
            label: "登陆",
          },
        ],
      },
    };
  },
  methods: {
    async submitHandler(e) {
      e.preventDefault();
      try {
        const result = await this.$http.get("/api/login", {
          params: this.model,
        });
        console.log(result);
        console.log(result.token);
        if (result.code == "0") {
          this.$store.commit("setToken", result.token);
          //本地存储
          window.localStorage.setItem("token", result.token);
          // this.$router.replace({path:'/botnav/index'}) //去首页
          //判断路由是否带参数，带参数就去参数地址，否则就去首页
          if (this.$route.query.redirect) {
            this.$router.replace({ path: this.$route.query.redirect });
          } else {
            this.$router.replace({ path: "/botnav/index" }); //去首页
          }
        } else {
          alert(result.msg);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style lang="stylus" scoped>
.headerimg {
  height: 150px;
  width: 70%;
}
</style>