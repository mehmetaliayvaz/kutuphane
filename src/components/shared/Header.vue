<template>
  <div id="header" class="header px-3">
    <h1 class="">Anasayfa</h1>
    <div class="exit">
      <div class="me-1">Çıkış Yap</div>
      <span class="exit-icon">
        <ExitIcon />
      </span>
    </div>
  </div>
</template>

<script>
import ExitIcon from "../icons/ExitIcon.vue";
export default {
  name: "Header",
  components: { ExitIcon },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  background: #fff;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  .exit {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    user-select: none;
    opacity: 0.9;

    .me-1 {
      display: block;
      font-size: 16px;
      color: #787878;
    }
    &:hover {
      opacity: 1.5;
    }
  }
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
}
</style>
