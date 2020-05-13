<template>
    <div id="app">

        <div class="corner-ribbon top-right sticky sweco-purple shadow">13. MAJ</div>

        <b-navbar toggleable="lg" fixed="top" class="navbar-north navbar-dark navbar-expand-lg shadow-lg">

            <div class="container-fluid" id="navbarNorthContainer">

                <div class="row no-gutters">

                    <div class="col-lg-2">
                        <header>
                            <b-link to="/" class="logotype logotype-white" role="banner">Sweco</b-link>
                        </header>
                    </div>
                </div>
            </div>

            <div class="nav-toolbar">

                <b-navbar-nav>
                    <!--        <b-navbar-text style="text-color:white">ux-lead.me - alt om UX i GIS & ID</b-navbar-text>-->
                </b-navbar-nav>

            </div>

        </b-navbar>

        <section class="container pt-3 pb-2">
            <bread-crumb></bread-crumb>
        </section>

        <router-view></router-view>

    </div>

</template>

<script>
    import BreadCrumb from '@/components/BreadCrumb'

    export default {
        name: "app",
        components: {
            BreadCrumb
        }
    };
</script>

<style lang="scss">
    /*#app {*/
    /*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*}*/

    .container-padding {
        margin-top: 32px;
        background-color: #eee;
        padding-left: 0;
        padding-right: 0;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
