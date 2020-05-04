<template>
    <v-app>
        <SignupNav id="navbar"/>
        <div id="main-container">
            <div>
                <v-img id="village" src="@/assets/1594701.svg" aspect-ratio="4" contain="tr"></v-img>
            </div>
            <h3 id="welcome">Make QuizShroom your Educational Home!</h3>
            <v-form id="signup" v-model="valid" ref="form" lazy-validation>
                <v-text-field
                        v-model="name"
                        :counter="30"
                        :rules="nameRules"
                        label="Name"
                        required
                ></v-text-field>
                <v-text-field v-model="username" :rules="emailRules" label="Email Address" required/>
                <v-text-field id="password"
                        v-model="password"
                        :rules="[passwordRules.required, passwordRules.min]"
                        :type="passwordVisible ? 'text' : 'password'"
                        name="password"
                        label="Password"
                        hint="At least 8 characters"
                        counter
                        required/>
                <v-text-field id="confirm-password"
                        v-model="confirmpassword"
                        :rules="[passwordRules.required, passwordRules.min]"
                        name="confirm-password"
                        label="Confirm Password"
                        counter
                        required/>
                <v-checkbox
                        v-model="checkbox"
                        :rules="[v => !!v || 'You must agree to continue!']"
                        label="Do you agree to our Privacy Policy? (Which is nothing ATM)"
                        required
                ></v-checkbox>

                <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="submit"
                >
                    Sign-UP!
                </v-btn>

                <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                >
                    Reset Form
                </v-btn>


                <!--                <v-btn-->
                <!--                        color="warning"-->
                <!--                        @click="resetValidation"-->
                <!--                >-->
                <!--                    Reset Validation-->
                <!--                </v-btn>-->
            </v-form>
        </div>
        <router-link class="routerLink" to="/signupconfirm">
            <v-btn x-large color="#cf2d2d"
                   class="ma-2 white--text">


                Confirm
            </v-btn>
        </router-link>
    </v-app>
</template>

<script>
    import SignupNav from "../components/SignupNav";

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
                confirmpassword: '',
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
            },
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(`SIGN UP username: ${this.username}, password: ${this.password}, email: ${this.username}`);
                }
            },
        },
    }
</script>

<style>
    #signup {
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