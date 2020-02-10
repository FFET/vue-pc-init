<template>
  <div id="login">
    <div class="login-from">
      <div class="logo">
        <!--<img :src="logoImg" />-->
        后台管理
      </div>
      <input placeholder="请输入用户名" v-model="username" />
      <input placeholder="请输入密码" v-model="password" type="password" />
      <button @click="fnLogin" type="primary">登录</button>
    </div>
  </div>
</template>

<script>
import logoImg from "../../assets/images/logo.png";
import Request from "@utils/request";
import api from "@utils/api";
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
    async fnLogin() {
      const { username, password } = this;
      // call api
      const response = await Request.request({
        url: api.common.login,
        method: "post",
        data: { username, password }
      });
      if (response.state) {
        sessionStorage.setItem("token", response.data);
        this.$router.push({ path: "/" });
      } else {
        console.log("eeee");
      }
    }
  }
};
</script>

<style lang="less" scoped>
#login {
  display: flex;
  flex-direction: column;
  background-image: url(https://ss1.bdstatic.com/lvoZeXSm1A5BphGlnYG/skin/12.jpg);
  background-size: 100% 100%;
  justify-content: center;
  height: 100vh;
  align-items: center;
}

.login-from {
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-radius: 17px;
  padding: 20px;
}
.logo {
  text-align: center;
  margin: 30px 0;
  font-size: 30px;
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
  margin-top: 10px;
  margin-bottom: 30px;
}
</style>
