<template>
    <div class="home">
        <table align="center">
            <tr>
                <th>User Name :</th>
                <td><input type="text" v-model="userName" /></td>
            </tr>
            <tr>
                <th>Password :</th>
                <td><input type="password" v-model="password" /></td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: center">
                    <button @click="loginClicked">Login</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from "vue-property-decorator";
    import { mapActions } from "vuex";

    @Component({
        methods: {
            ...mapActions(['login'])
        }
    })
    export default class Login extends Vue {

        private userName = '';
        private password = '';

        private loginClicked() {
            if (this.userName == 'user' && this.password == 'abc') {
                this.login(this.userName);
                if (this.$route.query && this.$route.query.returnUrl) {
                    this.$router.push({ path: this.$route.query.returnUrl.toString() });
                }
            }
        }
    }
</script>
