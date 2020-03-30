<!-- Stolen from https://github.com/pratheekhegde/vue-dynamic-breadcrumbs/blob/master/src/components/BreadCrumb.vue -->
<template>
    <div>
        <nav class="breadcrumb">
<!--            <b-breadcrumb-item href="/">HOME</b-breadcrumb-item>-->
            <b-breadcrumb :items="crumbs"/>
        </nav>
    </div>
</template>
<script>
    export default {
        computed: {
            crumbs: function() {
                const pathArray = this.$route.path.split("/")
                pathArray.shift()
                const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
                    breadcrumbArray.push({
                        path: path,
                        to: breadcrumbArray[idx - 1]
                            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
                            : "/" + path,
                        text: this.$route.matched[idx].meta.breadCrumb || path,
                    });
                    return breadcrumbArray;
                }, [])
                breadcrumbs.unshift({
                    path: '/',
                    to: '/',
                    text:'home'
                })
                return breadcrumbs;
            }
        }
    };
</script>
<style scoped>
    .container{
        margin: auto;
        width: 50%
    }
</style>
