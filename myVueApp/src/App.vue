<template>
  <div id="app">
    <message>Hi World</message>
    <message>Hi World Again</message>
    <message>Ik snap het niet</message>
  </div>
</template>

<script>
  import Message from './components/Message.vue';

  export default {
    name: 'app',
    components: { Message },
    data () {
      return {

      }
    }
  }
</script>
 <style>

 </style>
