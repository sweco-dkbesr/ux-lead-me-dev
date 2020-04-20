<template>
    <div class="home">
        <LeadContentUnit :id="file"></LeadContentUnit>
    </div>
</template>

<script lang="ts">

    import LeadContentUnit from '@/components/LeadContentUnit.vue'
    import {Component, Vue, Prop} from "vue-property-decorator";

    /**
     * A simple component that takes a parameter (path) from the router and renders a LeadContentUnit with it.
     */
    @Component({
        components: {
            LeadContentUnit
        }
    })
    export default class UsabilityTesting extends Vue {

        @Prop({required: true})
        file!: string | '';

        public data() {
            return {
            }
        }

        public mounted() {
            console.log('UserFlows created => ', this.file);
        }

    }
</script>
