<template>
  <div id="login">
    <LoginCard />
  </div>
</template>

<script>
import { ref } from "vue";
import LoginCard from "../components/cards/LoginCard.vue";
import LoginCard1 from "../components/cards/LoginCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginCard,
  },
};
</script>

<style lang="scss" scoped>
#login {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../public/img/login-bg.png");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
</style>