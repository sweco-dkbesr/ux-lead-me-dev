<template>
  <div class="home">
    ...
    <LeadContentUnit id="products/products.html"></LeadContentUnit>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator';
  import LeadContentUnit from '@/components/LeadContentUnit.vue'

  @Component({
    components: {
      LeadContentUnit
    }
  })
  export default class Products extends Vue {

    public mounted() {
      console.log('Products created');
    }


  }
</script>


<style scoped>

</style>
