<template>
  <no-ssr>
    <g-signin-button
      :params="googleSignInParams"
      @success="onSignGGInSuccess"
      @error="onSignGGInError"
    >
      <img src="/img/google_signin_dark.png" alt="Sign in with google" />
    </g-signin-button>
  </no-ssr>
</template>
<script>
export default {
  name: "GGLoginButton",
  data() {
    return {
      googleSignInParams: {
        client_id:
          "397456923185-3flo5e9ptb0i3utetmrl4u333vu174br.apps.googleusercontent.com"
      }
    };
  },
  methods: {
    onSignGGInSuccess(googleUser) {
      // `googleUser` is the GoogleUser object that represents the just-signed-in user.
      // See https://developers.google.com/identity/sign-in/web/reference#users
      const profile = googleUser.getBasicProfile(); // etc etc
    },
    onSignGGInError(error) {
      // `error` contains any error occurred.
      console.log("OH NOES", error);
    }
  }
};
</script>
<style lang="scss">
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  // background-color: #3c82f7;
  color: #fff;
  // box-shadow: 0 3px 0 #0f69ff;
}
</style>