<template>
  <div id="settings">
    <h1>{{ message }}</h1>
    <UserList />
    <br>
    <p><button v-on:click="increment">UP</button></p>
    <p><button v-on:click="decrement">2steps Down</button></p>
    <h2>Count:{{ count }}</h2>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
export default {
  name: 'settings',
  data() {
    return {
    }
  },
  components: {
    UserList
  },
  methods: {
    increment() {
      this.$store.commit('increment')
    },
    decrement() {
      this.$store.commit('decrement', 3)
    }
  },
  computed : {
    message : function(){
      return this.$store.state.message;
    },
    count() {
      return this.$store.state.count;
    }
  }
}
</script>