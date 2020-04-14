<template>
    <div class="home">
<!--        <LeadContentUnit id="products/products.html"></LeadContentUnit>-->
    </div>
</template>

<script lang="ts">

    import LeadContentUnit from '@/components/LeadContentUnit.vue'
    import {Component, Vue} from "vue-property-decorator";

    @Component({
        components: {
            LeadContentUnit
        }
    })
    export default class LeadDynamicView extends Vue {

        public mounted() {
            console.log('LeadDynamicView created', this.$route);
        }
    }
</script>
