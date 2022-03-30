<template>
  <div class="book-card">
    <div class="book-card-img">
      <img src="/img/bookimage.png" alt="" />
    </div>
    <div class="book-info">
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Kitap Adı</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>Osmanlı Dönemi</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Yazarı</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>İlber</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Yayınevi</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>Can</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Kit</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>Osmanlı</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Kitap Adı</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>Osmanlı Dönemi</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
};
</script>

<style lang="scss" scoped>
.book-card {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #fff;
  max-width: 450px;
  max-height: 200px;

  &-img {
    margin-right: 2rem;
  }

  .book-info {
    width: 100%;

    span {
      display: flex;
      font-size: 14px;
      font-weight: 400;
      color: #787878;
      align-items: center;
      justify-content: center;
      text-align: right;
    }

    h5 {
      min-width: 25px;
      font-size: 14px;
      line-height: 21px;
      font-weight: bold;
      color: #787878;
      margin: 0;
    }

    &-row {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.2rem 0;

      &-title {
        max-width: 75px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-right: 1rem;
      }

      &-desc {
        white-space: nowrap;
        width: 100%;
        display: flex;
        justify-content: start;
      }
    }
  }
}
</style>