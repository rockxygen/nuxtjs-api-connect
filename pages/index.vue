<template>
  <div class="container">
    <input type="text" v-model="message">
    <button @click="sendData" class="button--green">Send Data</button>
    <hr><br>
    <p v-for="person in loadedData" :key="person.id"> {{ person.name  }}</p>
    <button @click="getData" class="button--green">Get Data</button>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    data(){
      return {
        loadedData: null,
        message: null
      }
    },
    methods : {
      // API Get Data
      getData(){
        axios.get("http://localhost:3000/api/get-all-data").then(response => {
          this.loadedData = response.data.items;
        });
      },
      // API Post Data
      sendData(){
        axios.post("http://localhost:3000/api/send-data", { message: this.message }).then(response => {
          console.log(response.data);
        });
      }
    }
  }
</script>