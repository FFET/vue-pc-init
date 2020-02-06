<template>
  <div id="login">
    <div class="logo">
      <img :src="logoImg" />
    </div>
    <input placeholder="请输入用户名" v-model="username" />
    <input placeholder="请输入密码" v-model="password" />
    <button @click="fnLogin" type="primary">登录</button>
  </div>
</template>

<script>
import logoImg from "../../assets/images/logo.png";
export default {
  name: "Login",
  data() {
    return {
      logoImg,
      username: "",
      password: ""
    };
  },
  components: {},
  methods: {
    fnLogin() {
      console.log("login");
      const { username, password } = this;
      console.log(username, password);
      // call api
      sessionStorage.setItem("token", username);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  flex-direction: column;
}

.logo {
  text-align: center;
  margin: 0.5rem 0;
  > img {
    width: 80px;
    height: 80px;
  }
}

input {
  padding: 0.2rem 0.3rem;
  font-size: 16px;
  margin-bottom: 10px;
}

button {
  background-color: #ffff;
  border: 0;
  color: #333;
  font-size: 16px;
  line-height: 30px;
}
</style>
