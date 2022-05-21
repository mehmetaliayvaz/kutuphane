<template>
  <div id="login">
    <div class="login-container">
      <div v-if="loginState" class="content">
        <span>İsim Soyisim</span>
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

      <div>
        <div class="content my-3">
          <button @click="loginState ? createUser() : loginUser()">{{ loginState ? 'Kayıt Ol' : 'Giriş Yap'  }}</button>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn" @click="loginState = !loginState" style="font-size: 12px;">
            {{ loginState ? 'Giriş Yapmak için Tıkla' : 'Kayıt Olmak için Tıkla'  }}
          </button>
        </div>
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
    const loginState = ref(true);

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
          alert(err);
        })
    }


    const loginUser = () => {
      signInWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then((res) => {
          localStorage.setItem('user', JSON.stringify(res));
          router.push('/');
        })
        .catch((err) => {
          alert(err);
        });

    }


    return{
      createUser,
      loginUser,
      user,
      loginState,
    } 
  }
};
</script>

<style lang="scss" scoped>

</style>