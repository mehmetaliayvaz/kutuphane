<template>
  <div id="add-book">
    <div class="container-app">
      <div class="add-book flex-column flex-lg-row justify-content-md-between">  
        <div class="add-book-image me-lg-5 mb-5 mb-lg-0">
          <AddImage />
          <div>Resim Yükle</div>
        </div>
        <div class="book-info mb-5 mb-lg-0">
          <div class="book-info-row">
            <div class="book-info-row-title">
              <h5>Kitap Adı</h5>
              <span>:</span>
            </div>
            <div class="book-info-row-desc">
              <input type="text" v-model="books.name" />
            </div>
          </div>
          <div class="book-info-row">
            <div class="book-info-row-title">
              <h5>Yazarı</h5>
              <span>:</span>
            </div>
            <div class="book-info-row-desc">
              <input type="text" v-model="books.author" />
            </div>
          </div>
          <div class="book-info-row">
            <div class="book-info-row-title">
              <h5>Yayınevi</h5>
              <span>:</span>
            </div>
            <div class="book-info-row-desc">
              <input type="text" v-model="books.publisher" />
            </div>
          </div>
          <div class="book-info-row">
            <div class="book-info-row-title">
              <h5>Not</h5>
              <span>:</span>
            </div>
            <div class="book-info-row-desc">
              <input type="text" v-model="books.note" />
            </div>
          </div>
          <div class="book-info-row">
            <div class="book-info-row-title">
              <h5>Kategori</h5>
              <span>:</span>
            </div>
            <div class="book-info-row-desc">
              <select name="category" v-model="books.category" id="category">
                <option value="fantastic">Fantastik</option>
                <option value="entertainment">Eğlence</option>
                <option value="drama">Drama</option>
                <option value="history">Tarih</option>
                <option value="philosophy">Felsefe</option>
                <option value="biography">Biyografi</option>
                <option value="novel">Roman</option>
              </select>
            </div>
          </div>
        </div>
        <div class="add-button">
          <button @click="addBook">Ekle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { colRef } from "../fb";
import AddImage from "../components/icons/AddImage.vue";
import { addDoc } from 'firebase/firestore'

export default {
  name: "AddPage",
  components: {
    AddImage,
  },
  setup(){
    const books = ref({
      image: '',
      name: '',
      author: '',
      publisher: '',
      note: '',
      category: null,
    });

    const addBook = () => {
      addDoc(colRef('books'), books.value)
      .then((res) => {
        console.log(res);
      })
    }
    

    return{
      books,
      addBook,
    }
  }
};
</script>

<style lang="scss" scoped>

#add-book{
  padding: 10rem 0;
}

.add-book {
  display: flex;
  align-items: center;

  max-width: 770px;
  padding: 35px 50px 35px 60px;
  background-color: #fff;

  &-image {
    text-align: center;
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #9f9f9f;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    svg {
      margin-bottom: 0.5rem;
    }
  }
  .book-info {
    width: 300px;

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
        select {
          width: 45%;
          border: none;
          border-bottom: 1px solid #bebebe;
        }
        input {
          border: none;
          border-bottom: 1px solid #bebebe;

          color: #000;
        }
        white-space: nowrap;
        width: 100%;
        display: flex;
        justify-content: start;
      }
    }
  }
  .add-button {
    button {
      background-color: #ff5722;
      flex-wrap: nowrap;
      padding: 0.5rem 2.5rem;
      color: #fff;
      border: none;
      border-radius: 24px;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
    }
  }
}


input[type="text"]{
  &:focus-visible{
    outline: none !important;
  }
}

</style>