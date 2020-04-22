<template>
    <div>
        <div>
            <a href="/" ><img src="@/assets/1838801.svg"> </a>
            <h1 id="welcome">Welcome to QuizShroom!</h1>
            
            <h4>Hint: It is "username" and then "password"</h4>
        </div>
        <div id="login">
            <label id="username">
                <input type="text" name="username" v-model="input.username" placeholder="Username" />
            </label>
            <label id="password">
                <input type="password" name="password" v-model="input.password" placeholder="Password" />
            </label>
            <button type="button" v-on:click="login()">Login</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username !== "" && this.input.password !== "") {
                    if(this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "Home" });
                    } else {
                        // eslint-disable-next-line no-console
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    // eslint-disable-next-line no-console
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 5px solid #cf2d2d;;
        background-color: #FFFFFF;
        font-weight: bold;
        color: #2c3e50;
        margin: 20px auto auto;
        padding: 15px;
    }
    #welcome {
        color: #cf2d2d;
    }
    #help {
        color: #cf2d2d;
    }
</style>