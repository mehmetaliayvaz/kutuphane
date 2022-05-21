<template>
  <div id="login">
    <div class="login-container">
      <div class="content">
        <span>İsim</span>
        <input type="text" v-model="user.name" placeholder="Mehmet" />
      </div>
      <div class="content">
        <span>E-mail</span>
        <input type="email" v-model="user.email" placeholder="123xyz@deneme.com" />
      </div>
      <div class="content">
        <span>Password</span>
        <input type="password" v-model="user.password" placeholder="*******" />
      </div>

      <div class="content button">
        <span class="">Giriş Yap</span>
        <button @click="createUser()">Kayıt Ol</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { auth } from "../fb";
import { useRouter } from "vue-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import LoginCard from "../components/cards/LoginCard.vue";

export default {
  name: "LoginPage",
  components: {
    LoginCard,
  },
  setup(){
    const router = useRouter();

    const user = ref({
      name: '',
      email: '',
      password: '',
    });
    
    const createUser = () => {
      createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then((res) => {
          loginUser();
        })
        .catch((err) => {
          console.log(err);
        })
    }


    const loginUser = () => {
      signInWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          router.push('/');
        })
        .catch((err) => {
          console.log(err)
        });

    }


    return{
      createUser,
      loginUser,
      user,
    } 
  }
};
</script>

<style lang="scss" scoped>

</style>