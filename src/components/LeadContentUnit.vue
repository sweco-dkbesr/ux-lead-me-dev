<template>
    <div>
<!--        <p v-html="content"></p>-->
        <v-runtime-template :template="content"/>

    </div>
</template>

<script lang="ts">

    import {Component, Prop, Vue} from 'vue-property-decorator';
    import 'axios';
    import VRuntimeTemplate from "v-runtime-template";

    @Component({
        components: {
            VRuntimeTemplate
        }
    })
    export default class LeadContentUnit extends Vue {

        // content: content | undefined;

        @Prop() private id!: string;
        content: any;

        data() {
            return {
                content: ''
            }
        }

        /**
         * Loads content from /public into the template on mount.
         */
        public mounted() {
            this.axios.get('./content/' + this.id)
                .then(response => {
                    this.content = response.data;
                })
        }

    }
</script>

<style scoped>

</style>
