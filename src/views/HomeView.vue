<template>
  <div class="container mt-5">
    <h2 class="fst-italic text-center mb-5">Lista de Posts</h2>
    <div class="row" v-for="post of posts" :key="post.id">
      <div class="col">
        <h3>{{ post.title.charAt(0).toUpperCase() + post.title.slice(1) }}</h3>
        <!-- Autor -->
        <router-link :to="`/user/${post.userId}`">Autor</router-link>
        <p>{{ post.body }}</p>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      posts: [],
      comentarios: [],
      comentariosFiltrados: []
    }
  },
  methods: {
    async consumirPosts() {
      try {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const getposts = await data.json();
        this.posts = getposts;
        console.log(this.posts)
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  created() {
    this.consumirPosts();
  }
}
</script>

<style scope>
 h3 {
   font-size: 16px !important;
 }
</style>
