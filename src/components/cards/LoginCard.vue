<template>
  <div class="login-container">
    <div class="content">
      <span>İsim</span>
      <input type="text" placeholder="Mehmet" />
    </div>
    <div class="content">
      <span>E-mail</span>
      <input type="email" placeholder="123xyz@deneme.com" />
    </div>
    <div class="content">
      <span>Password</span>
      <input type="password" placeholder="*******" />
    </div>

    <div class="content button">
      <span class="">Giriş Yap</span>
      <input type="submit" value="Kayıt Ol" />
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginCard",
  components: {},
};
</script>

<style lang="scss" scoped>
.login-container {
  border-radius: 50px;
  padding: 45px 100px;
  background-color: rgba(#ffffff, 0.6);
  .content {
    margin-bottom: 10px;
    span {
      display: block;
      color: #000;
      font-size: 12px;
      font-weight: 400;
    }
    input {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 10px;
      border: none;
      min-width: 416px;
      padding-left: 10px;
      &::placeholder {
        color: rgba($color: #000000, $alpha: 0.4);
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
</style>