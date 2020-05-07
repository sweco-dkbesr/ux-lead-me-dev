<template>
  <div class="from 404">
    <div class="spinner-border" role="status">
      <span class="sr-only">Redirecting - hang on...</span>
    </div>
  </div>
</template>

<script>

  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {
    }
  })
  export default class From404 extends Vue {
    mounted() {
      console.log('404 MOUNTED', console.log(this.$route.query.p) );
      this.$router.replace(this.$route.query.p);
    }

  }

</script>
