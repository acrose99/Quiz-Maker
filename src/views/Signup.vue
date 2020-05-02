<template>
    <v-app>
    <SignupNav id="navbar"/>
    <div style="margin:0px" id="main-container">
        <div>
            <v-img id="village" src="@/assets/1594701.svg" aspect-ratio="4" contain="tr"></v-img>
        </div>
        <h3 id="welcome">Make QuizShroom your Educational Home!</h3>
        <v-app id="signup">
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-text-field
                        v-model="name"
                        :counter="30"
                        :rules="nameRules"
                        label="Name"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        :counter="30"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Password"
                        required
                ></v-text-field>
                <v-text-field
                        v-model="password"
                        :rules="passwordRules"
                        label="Confirm Password"
                        required
                ></v-text-field>

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
                        @click="validate"
                >
                    Validate
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
        </v-app>
    </div>
    </v-app>
</template>

<script>
    import SignupNav from "../components/SignupNav";

    export default({
        name: 'Signup',
        components:{
            SignupNav,
        },
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4',
            ],
            checkbox: false,
        }),

        methods: {
            validate () {
                this.$refs.form.validate()
            },
            reset () {
                this.$refs.form.reset()
            },
            resetValidation () {
                this.$refs.form.resetValidation()
            },
        },
    })
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
        position:fixed;
        top: 100px;
        left:20%;
        right: 20%;
    }

    #hint {
        margin: 30px auto auto;
    }

    #help {
        color: #cf2d2d;
    }
</style>