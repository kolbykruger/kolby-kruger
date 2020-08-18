<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <Theme />
    <Grid />
    <CursorPointer />
    <Konami />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Theme from "~/components/Theme.vue";
import Grid from "~/components/Grid.vue";
import Konami from "~/components/Konami.vue";
import CursorPointer from "~/components/CursorPointer.vue";

export default {
  components: {
    Header,
    Footer,
    Theme,
    Grid,
    Konami,
    CursorPointer,
  },
  transition: "page",
};
</script>