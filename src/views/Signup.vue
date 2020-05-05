<template>
    <v-app>
        <SignupNav id="navbar"/>
        <div id="main-container">
            <div>
                <v-img id="village" src="@/assets/1594701.svg" aspect-ratio="4" contain="tr"></v-img>
            </div>
            <div class="signup">
                <h3 id="welcome">Make QuizShroom your Educational Home!</h3>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field v-model="username" :rules="emailRules" label="Email Address" required/>
                    <v-text-field
                            v-model="password"
                            :rules="[passwordRules.required, passwordRules.min]"
                            :type="passwordVisible ? 'text' : 'password'"
                            name="password"
                            label="Password"
                            hint="At least 8 characters"
                            counter
                            required/>
                    <v-btn :disabled="!valid" @click="submit">Submit</v-btn>
                </v-form>
            </div>
        </div>
    </v-app>
</template>

<script>
    import SignupNav from "../components/SignupNav";
    import {signUp} from '../utils/auth.js';
    export default {
        name: 'Signup',
        components: {
            SignupNav,
        },
        data() {
            return {
                valid: false,
                username: '',
                password: '',
                passwordVisible: false,
            }
        },
        computed: {
            emailRules() {
                return [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ]
            },
            passwordRules() {
                return {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => ('The email and password you entered don\'t match'),
                }
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(`SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.username}`);
                    signUp(this.username, this.password); // Adding this line as well
                }
            },
        },
    }
</script>

<style>
    .signup {
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
        /* Full height */
        /*max-height: 10%;*/
    }


    #welcome {
        color: #cf2d2d;
    }

    #main-container {
        position:absolute;
        top: 100px;
        left:20%;
        right: 20%;
    }
    #navbar {
        /*object-position: initial;*/
    }
</style>