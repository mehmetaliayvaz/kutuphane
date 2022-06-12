<template>
  <div id="login">
    <div class="login-container">
      <div v-if="loginState" class="content">
        <span>İsim Soyisim</span>
        <input type="text" v-model="user.name" autocomplete="off" />
        <span v-if="v$.name.$invalid && showError" class="warning-text">Lütfen isim soyisim giriniz.</span>
      </div>
      <div class="content">
        <span>E-mail</span>
        <input type="email" v-model="user.email" autocomplete="off" />
        <span v-if="v$.email.$invalid && showError" class="warning-text">Lütfen email giriniz.</span>
      </div>
      <div class="content">
        <span>Password</span>
        <input type="password" v-model="user.password" autocomplete="off" />
        <span v-if="v$.password.$invalid && showError" class="warning-text">Lütfen parola giriniz.</span>
      </div>

      <div>
        <div class="content my-3">
          <button @click="loginState ? createUser() : loginUser()">{{ loginState ? 'Kayıt Ol' : 'Giriş Yap'  }}</button>
        </div>
        <div class="d-flex justify-content-end">
          <button class="btn" @click="(loginState = !loginState), (showError = false)" style="font-size: 12px;">
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
import { useStore } from "vuex";
import toastr from "../plugins/toastr";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import LoginCard from "../components/cards/LoginCard.vue";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, requiredIf, email  } from "@vuelidate/validators";

export default {
  name: "LoginPage",
  components: {
    LoginCard,
  },
  setup(){
    const store = useStore();
    const router = useRouter();
    const loginState = ref(true);
    const showError = ref(false);

    const user = ref({
      name: '',
      email: '',
      password: '',
    });

    const rules = ref({
      name: { required: requiredIf(loginState.value), $autoDirty: true },
      email: { required, email, $autoDirty: true },
      password: { required, $autoDirty: true },
    });

    const v$ = useVuelidate(rules.value, user);
    
    const createUser = () => {
      showError.value = true;
      if(!v$.value.$invalid){
        createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then((res) => {
          loginUser();
        })
        .catch((err) => {
          alert(err);
        })
      }
    }


    const loginUser = () => {
      showError.value = true;
      if(!v$.value.$invalid){
        signInWithEmailAndPassword(auth, user.value.email, user.value.password)
          .then((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            store.commit('setUser', res);

            if(loginState.value){
              toastr.success('Kayıt başarılı');
            }
            else{
              toastr.success('Giriş başarılı');
            }

            router.push('/');

          })
          .catch((err) => {
            alert(err);
          });
      }

    }


    return{
      createUser,
      loginUser,
      user,
      loginState,
      v$,
      showError,
    } 
  }
};
</script>

<style lang="scss" scoped>
.warning-text{
  color: red;
}
</style>