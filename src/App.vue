<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomBar />
  </v-app>
</template>

<script>
import BottomBar from './components/BottomBar';

export default {
  name: 'App',

  components: {
    BottomBar,
  },

  data: () => ({
    //
  }),
};
</script>
