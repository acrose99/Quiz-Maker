<template>
    <v-app>
        <div>


            <v-app-bar
                    absolute
                    color="#cf2d2d"
                    dark
                    elevate-on-scroll


            >
                <router-link class="routerLink" to="/">
                    <img src="@/assets/mushy_yt.png"/>
                </router-link>

                <router-link class="routerLink" to="/">
                    <v-toolbar-title>QuizShroom</v-toolbar-title>
                </router-link>
                <v-spacer/>
                <router-link class="routerLink" to="/Login">
                    <v-toolbar-title>Login with your Account</v-toolbar-title>
                </router-link>


            </v-app-bar>
            <router-view/>
        </div>
    </v-app>
</template>
<script>
    export default {}
</script>
<style scoped>

    .routerLink {
        text-decoration: none;
        margin: 15px;
        padding: 20px;
        font-size: large;

    }

    img {
        width: auto;
        height: 25px;
        margin: 0%;
        margin-right: 15px;

    }

    .routerLink {
        text-decoration: none;
        font-size: 32px;
        margin: 25px;

        font-size: small;

    }

    img {
        width: auto;
        height: 25px;
        margin: 0%;
        margin-right: 15px;

    }


</style>