<script>
import { BookService } from '@/shared/services/book.service.js'
import { Book } from '@/shared/models/book.entity.js'

export default {
  name: 'the-user-profile',
  data() {
    return {
      books: [],
      bookApiFake:new BookService(),
      social_media: 'Social Media',
      illustrated_books: 'Illustrated Books',
      portfolio: 'Portfolio',
      currentName: sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).username : '',
      currentImage: sessionStorage.getItem('currentUser') ? JSON.parse(sessionStorage.getItem('currentUser')).imgUrl : '',
    };
  },
  async created() {
    this.bookApiFake.getBook().then((response) => {
      for (const bookData of response.data){
        const { image }= bookData;
        const book = new Book('','','','','', image);
        this.books.push(book);
      }
    }).catch((error) => {
      console.error('Error fetching books:', error);
    });
  },
  computed:{
    getCapitalizeName(){
      return this.currentName.charAt(0).toUpperCase() + this.currentName.slice(1);

    }
  }

};

</script>

<template>
  <div class="user-profile">
    <div class="banner">
      <div class="banner-background"></div>
      <div class="profile-image">
        <img :src="currentImage" alt="Profile image">
        <div class="text"> {{getCapitalizeName}}</div>
      </div>
    </div>
    <div class="flexbox-container">
      <div class="flex-item">
        <div class="social-media">
          <div class="media-title">{{ $t('artistProfile.social_media') }}</div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/x-logo.png" alt="X logo">
            <a href="https://www.x.com/" target="_blank">https://www.x.com/</a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/instagram-logo.png" alt="Instagram logo">
            <a href="https://www.instagram.com/" target="_blank">https://www.instagram.com/</a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/facebook-logo.png" alt="Facebook logo">
            <a href="https://www.facebook.com/" target="_blank">https://www.facebook.com/</a>
          </div>
          <div class="flex-container-2">
            <img class="small-image" src="/src/assets/images/tiktok-logo.png" alt="Tiktok logo">
            <a href="https://www.tiktok.com/" target="_blank">https://www.tiktok.com/</a>
          </div>
        </div>
      </div>
      <div class="flex-item">
        <div class="bio">
          <div class="bio-title">Bio</div>
        </div>
        <div class="published-book" >
          <div class="published-book-title">{{ $t('published_books') }}</div>
          <div class="book-container">
            <div v-for="(book, index) in books" :key="index">
              <img class="normal-image" :src="book.imgUrl " alt="Book image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative;
}

.banner-background {
  position: absolute;
  top: 5%;
  left: 0;
  width: 100%;
  height: 40vh;
  background-color: lightcoral;
  z-index: 1;
}

.profile-image {
  position: relative;
  text-align:center;
  padding: 20px;
  z-index: 3;
}

.profile-image img {
  position: relative;
  width: 300px;
  z-index: 1;
}

.text {
  position: relative;
  color: black;
  font: bold 30px/30px Archivo, sans-serif;
  z-index: 2;
  top:-10%;
}

.flexbox-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
}


.flex-item {
  padding: 10px;
  max-width: 60vw;
  font: 20px/30px Archivo, sans-serif;
  color: black;
}

.flex-container-2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 20vw;
  margin: 15px 0 15px 0;
}
.book-container{
  display: grid;
  grid-template-columns:  33.33% 33.33% 33.33% ;
  gap: 10px;
  grid-auto-rows: auto;
}
.flex-container img {
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.small-image {
  width: 10%;
  height: auto;
  margin: 10px 10px 10px 0;
}

.normal-image {
  width: 100%;
  height: 100%;
  margin: 10px 10px 10px 0;
}

.bio {
  margin-top: 20px;
}

.bio-title {
  font-weight: 600;
  margin-bottom: 10px;
}

.published-book {
  margin-top: 20px;
}

.published-book-title {
  font-weight: 600;
}

.media-title {
  font-weight: 600;
}

.flex-container p {
  display: flex;
  justify-content: center;
}

.flex-container-2 a{
  display: flex;
  justify-content: center;
  color: black;
  text-decoration: underline;
}
</style>