<template>
  <div>
    <cube-form :model="model" :schema="schema" @submit="submitHandler"></cube-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      model: {
        username: "",
        password: ""
      },
      schema: {
        fields: [
          //用户名配置
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              required: true,
              type: "string",
              min: 3,
              max: 15
            },
            trigger: "blur",
            message: {
              required: "用户名不能为空",
              min: "用户名不能少于3个字符",
              max: "用户名不能多于15个字符"
            }
          },
          // 密码配置
          {

          }
        ]
      }
    };
  }
};
</script>
<style lang="stylus" scoped></style>
