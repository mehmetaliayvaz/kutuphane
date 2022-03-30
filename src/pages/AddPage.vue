<template>
  <div id="category" class="py-5">
    <div class="container-app">
      <div>
        <div class="row">
          <div class="col-12 col-md-12 mb-12">
            <add-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import AddCard from "../components/cards/AddCard.vue";

export default {
  name: "AddPage",
  components: {
    AddCard,
  },
};
</script>

<style>
</style>