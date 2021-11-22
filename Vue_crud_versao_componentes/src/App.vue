<template>
  <div id="app">

    <Menu titulo="Usuários FrontEnd" />

    <PersonList />
  
  </div>
</template>

<script>

import Menu from './components/Menu.vue'
import PersonList from './components/PersonList.vue';

export default {
  name: 'App',
  components: {
    Menu, PersonList
  },
  props:{
  msg: String
  }
}
</script>


