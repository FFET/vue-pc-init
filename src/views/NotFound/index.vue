<template>
  <div>
    <Nav title=" "></Nav>
    <div id="notFound">404</div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style>
#notFound {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.5rem;
  text-align: center;
  color: #2c3e50;
  margin-top: 1rem;
}
</style>
