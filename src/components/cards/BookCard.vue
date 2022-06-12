<template>
  <div class="book-card p-3 p-md-4">
    <div class="book-card-img me-3 me-md-4">
      <img :src="book.image != '' ? book.image : '/img/default-book.jpg'" />
    </div>
    <div class="book-info">
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Kitap Adı</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>{{ book.name }}</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Yazar</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>{{ book.author }}</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Yayınevi</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>{{ book.publisher }}</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Kategori</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>{{ book.category }}</span>
        </div>
      </div>
      <div class="book-info-row">
        <div class="book-info-row-title">
          <h5>Yorum</h5>
          <span>:</span>
        </div>
        <div class="book-info-row-desc">
          <span>{{ book.note }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    book: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style lang="scss" scoped>
.book-card {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  max-height: 250px;

  .book-card-img{
    img{
      width: 100px;
      height: 150px;
      object-fit: cover; 
    }
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