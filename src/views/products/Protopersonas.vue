<template>
    <div class="home">
        <LeadContentUnit id="protopersonas.html"></LeadContentUnit>
    </div>
</template>

<script lang="ts">

    import { Component, Prop, Vue } from 'vue-property-decorator';
    import LeadContentUnit from '@/components/LeadContentUnit.vue';

    console.log("x");

    @Component({
        components: {
            LeadContentUnit
        }
    })
    export default class Protopersonas extends Vue {

        public mounted() {
            console.log(this.$route)
            console.log('Page pROTOPERSONAS created.');
        }


    }
</script>
