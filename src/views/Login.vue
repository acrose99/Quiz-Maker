<template>
    <div>
        <div>
            <a href="/" ><img src="@/assets/1838801.svg"> </a>
            <h1 id="welcome">Welcome to QuizShroom!</h1>
        </div>
        <router-link class="routerLink" to="/signup">
            <v-btn x-large color="#cf2d2d"
                   class="ma-2 white--text">
                No account? Sign up here!
            </v-btn>
        </router-link>
        <h4 id="hint">Hint: It's username and password</h4>
        <div class="sign-in">
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
<!--        <div id="login">-->
<!--            <label id="username">-->
<!--                <input type="text" name="username" v-model="input.username" placeholder="Username" />-->
<!--            </label>-->
<!--            <label id="password">-->
<!--                <input type="password" name="password" v-model="input.password" placeholder="Password" />-->
<!--            </label>-->
<!--            <button type="button" v-on:click="login()">Login</button>-->
<!--        </div>-->
    </div>
</template>

<script>
    import {signIn} from '@/utils/auth.js';
    export default {
        name: "SignIn",
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
            },
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    console.log(`SIGN IN username: ${this.username}, password: ${this.password}`);
                    signIn(this.username, this.password);  // Adding this line as well
                }
            },
        },
    }
</script>

<style scoped>
    .sign-in {
        width: 500px;
        border: 5px solid #cf2d2d;;
        background-color: #FFFFFF;
        font-weight: bold;
        color: #2c3e50;
        margin: 30px auto auto;
        padding: 15px;
    }
    #welcome {
        color: #cf2d2d;
    }
    #hint {
        margin: 30px auto auto;
    }
    #help {
        color: #cf2d2d;
    }
</style>