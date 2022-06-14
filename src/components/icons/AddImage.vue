<template>
  <div>
    <input
      ref="file"
      type="file"
      accept=".jpg, .jpeg, .png"
      style="display: none"
      @change="onChange($event)"
    />
    <div @click="$refs.file.click()" class="">
      <img v-if="selectedImage" class="book-img" height="128" :src="selectedImage">
      <loading-icon v-else-if="isImage" />
      <file-icon v-else />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { saveFile } from "../../fb";
import { v4 } from "uuid";
import FileIcon from "./FileIcon.vue";
import LoadingIcon from './LoadingIcon.vue';

export default {
  name: "AddImage",
  components: { FileIcon, LoadingIcon },
  emits: ['image'],
  setup(props, context){
    const isImage = ref(false);
    const selectedImage = ref();
    const image = ref();

    const onChange = (e) => {
      isImage.value = true;
      image.value = e.target.files[0];
      if(!image.value.name.endsWith('.jpg') && !image.value.name.endsWith('.jpeg') && !image.value.name.endsWith('.png')){
        alert('Lütfen "png", "jpg", "jpeg" uzantılı bir fotoğraf yükleyiniz...');
      }
      else{
        if(image.value.size < 300000){
          saveFile(v4() ,image.value).then((res) => {
            selectedImage.value = res; 
            isImage.value = false;
            context.emit('image', selectedImage.value);
          })
        }
        else{
          alert('Yüklenen fotoğraf boyutu maximum 300kb olabilir...');
          isImage.value = false;
        }
      
      }
    }

    return{
      selectedImage,
      onChange,
      isImage,
    }
  }
};
</script>

<style lang="scss" scoped>

.book-img{
  width: 125px;
  height: 190px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgb(6 78 177 / 10%);
}

</style>
