<template>
  <div>
    <h2>The Count Be: {{ count }}</h2>

    <p>
      <button @click="count += 1">Add one to counter</button>
    </p>
  </div>
</template>

<script>
    export default {
        data() {
          return {
            count: 0
          };
        }
    }
</script>

<style>

</style>
