<template>
  <no-ssr>
    <fb-signin-button
      :params="fbSignInParams"
      @success="onSignFBInSuccess"
      @error="onSignFBInError"
    >
      <i class="fab fa-facebook-square"></i>
      Continute with Facebook
    </fb-signin-button>
  </no-ssr>
</template>
<script>
export default {
  name: "FBLoginButton",
  data() {
    return {
      fbSignInParams: {
        scope: "email,user_likes",
        return_scopes: true
      }
    };
  },
  methods: {
    onSignFBInSuccess(response) {
      FB.api("/me", dude => {
        console.log(`Good to see you, ${dude.name}.`);
      });
    },
    onSignFBInError(error) {
      console.log("OH NOES", error);
    }
  },
  beforeMount() {
    window.fbAsyncInit = function() {
      FB.init({
        appId: "1803285379816767",
        cookie: true, // enable cookies to allow the server to access the session
        xfbml: true, // parse social plugins on this page
        version: "v2.8" // use graph api version 2.8
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }
};
</script>
<style lang="scss">
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
  font-size: 110%;
  font-weight: 500;
}
</style>