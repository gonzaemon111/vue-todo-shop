<template>
  <v-bottom-navigation
    :value="activeBtn"
    grow
    color="pink lighten-2"
    fixed
    height="60"
  >
    <div class="navigation_bar_btn">
      <v-btn to="/">
        <span>ホーム</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
    </div>

    <div class="navigation_bar_btn">
      <v-btn to="/about">
        <span>よく買う</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </div>

    <div class="navigation_bar_btn">
      <v-btn to="/settings">
        <span>設定</span>
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>
    </div>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        activeBtn: 0,
      }
    },
  }
</script>

<style scoped>
.navigation_bar_btn {
  padding-top: 10px
}
</style>
