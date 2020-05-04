// src/views/SignUpConfirm.vue
<template>
    <v-app>
        <SignupNav id="navbar"/>
        <div id="main-container">
            <div>
                <v-img id="village" src="@/assets/mushygals.png" aspect-ratio="4" contain="tr"></v-img>
            </div>
            <h3>Confirm your Email and Password, you're almost done!</h3>
            <v-form id="confirm" v-model="valid" ref="form" lazy-validation>
                <v-text-field v-model="username" :rules="emailRules" label="Email Address" required/>
                <v-text-field v-model="password" :rules="passwordRules" label="Password" required/>
                <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
            </v-form>
            <v-btn @click="resend">Resend Code</v-btn>
        </div>
    </v-app>
</template>

<script>
    import SignupNav from "../components/SignupNav";
    export default {
        name: "SignUpConfirm",
        components: {
            SignupNav,
        },
        data() {
            return {
                valid: false,
                username: '',
                password: '',
            }
        },
        computed: {
            emailRules() {
                return [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            },
            codeRules() {
                return [
                    v => !!v || 'Code is required',
                    v => (v && v.length === 6) || 'Code must be 6 digits'
                ]
            },
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(`CONFIRM username: ${this.username}, code: ${this.code}`);
                }
            },
            resend() {
                console.log(`RESEND username: ${this.username}`);
            }
        },
    }
</script>

<style>
    #confirm {
        position: relative;
        width: 400px;
        height: 200px;
        border: 2px red;
        background-color: #FFFFFF;
        font-weight: bold;
        color: #2c3e50;
        margin: 0px auto 30px;
        padding-top: 10px;
        padding-bottom: 50px;
    }

    #village {
        margin-bottom: 20px;
        position: relative;
        /* Full height */
        /*max-height: 10%;*/
    }


    #welcome {
        color: #cf2d2d;
    }

    #main-container {
        position: fixed;
        top: 100px;
        left: 20%;
        right: 20%;
    }

    #hint {
        margin: 30px auto auto;
    }

    #help {
        color: #cf2d2d;
    }
</style>