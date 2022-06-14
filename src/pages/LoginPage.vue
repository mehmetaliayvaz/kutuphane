<template>
  <div id="login">
    <div class="login-container">
      <img src="/img/kutuphanem-logo.png" alt="" class="login-logo mb-4">
      <div v-if="loginState" class="content">
        <span class="login-title">İsim Soyisim</span>
        <input type="text" v-model="user.name" autocomplete="off" />
        <span v-if="v$.name.$invalid && showError" class="warning-text">Lütfen isim soyisim giriniz.</span>
      </div>
      <div class="content">
        <span class="login-title">E-mail</span>
        <input type="email" v-model="user.email" autocomplete="off" />
        <span v-if="v$.email.$invalid && showError" class="warning-text">Lütfen email giriniz.</span>
      </div>
      <div class="content">
        <span class="login-title">Password</span>
        <input type="password" v-model="user.password" autocomplete="off" />
        <span v-if="v$.password.$invalid && showError" class="warning-text">Lütfen parola giriniz.</span>
      </div>

      <div>
        <div class="content my-3">
          <button @click="loginState ? createUser() : loginUser()" class="login-btn">
            {{ loginState ? 'Kayıt Ol' : 'Giriş Yap'  }}
          </button>
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
import { ref, watch } from "vue";
import { auth, getBooks } from "../fb";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import toastr from "../plugins/toastr";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useVuelidate from "@vuelidate/core";
import { required, maxLength, requiredIf, email  } from "@vuelidate/validators";

export default {
  name: "LoginPage",
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
    
    watch(() => loginState.value, () => {
      rules.value.name = { required: requiredIf(loginState.value) };
    });

    const createUser = () => {
      console.log('hey1')
      showError.value = true;
      if(!v$.value.$invalid){
        console.log('hey2')
        createUserWithEmailAndPassword(auth, user.value.email, user.value.password)
        .then((res) => {
          loginUser();
        })
        .catch((err) => {
          toastr.error('Email ve şifrenizi kontrol ediniz.');
        })
      }
    }


    const loginUser = () => {
      console.log('hey3')
      showError.value = true;
      if(!v$.value.$invalid){
        console.log('hey4')
        signInWithEmailAndPassword(auth, user.value.email, user.value.password)
          .then((res) => {
            localStorage.setItem('user', JSON.stringify(res));
            store.commit('setUser', res);

            getBooks(res.user.email);

            if(loginState.value){
              toastr.success('Başarıyla Kayıt Oldunuz.');
            }
            else{
              toastr.success('Başarıyla Giriş Yaptınız.');
            }

            router.push('/');

          })
          .catch((err) => {
            toastr.error('Email ve şifrenizi kontrol ediniz.');
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
  font-size: 12px;
}

#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("/img/login-bg.png");
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
}

.login-logo{
  width: 400px;
}

.login-container {
  border-radius: 50px;
  padding: 45px 100px;
  background-color: rgba(#ffffff, 0.8);
  .content {
    margin-bottom: 1.3rem;
    .login-title{
      font-weight: 600;
      margin-bottom: 3px;
      display: block;
    }
    input, button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 10px;
      border: none;
      width: 100%;
      padding-left: 10px;
      &::placeholder {
        color: rgba($color: #000000, $alpha: 0.4);
      }
    }
    .login-btn{
      transition: 0.2s;
      &:hover{
        background: rgb(224, 224, 224);
      }
    }
  }
  .button {
    span {
      cursor: pointer;
      text-align: right;
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
}

@media(max-width: 768px){
  .login-container{
    padding: 1rem;
  }
  .login-logo{
    width: 250px;
  }
}

</style>