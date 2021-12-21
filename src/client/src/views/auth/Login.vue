<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person"
                            name="login"
                            label="Login"
                            type="text"
                            v-model="userName"></v-text-field>
              <v-text-field id="password"
                            prepend-icon="lock"
                            name="password"
                            label="Password"
                            type="password"
                            v-model="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="loginClicked">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: 'Login',
    props: {
      source: String,
    },
    data: () => ({
      userName: String(),
      password: String(),
    }),
    created() {
      if (this.isLoggedIn) {
        this.redirectToSource();
      }
    },
    computed: {
      ...mapGetters(["isLoggedIn"]),
    },
    methods: {
      ...mapActions(['login']),

      loginClicked() {
        if (this.userName == 'user' && this.password == 'abc') {
          this.login(this.userName);
          this.redirectToSource();
        }
      },
      redirectToSource() {
        if (this.$route.query && this.$route.query.returnUrl) {
          this.$router.push({ path: this.$route.query.returnUrl.toString() });
        }
        else {
          this.$router.push("/");
        }
      }
    }
  };
</script>

<style></style>
