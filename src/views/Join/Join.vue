<template>
  <div class="Join">
    <Header msg="Welcome to Your Vue.js App"/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Join",
  components: {
    Header,
    Footer
  }
};
</script>
