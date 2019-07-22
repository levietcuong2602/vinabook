<template>
  <div class="dialog-login">
    <el-dialog :visible.sync="getDialogLoginVisible" :show-close="false" width="40%" :center="true">
      <div slot="title">LOGIN</div>
      <div class="body">
        <el-form ref="ruleForm" :rules="rules" status-icon>
          <el-form-item label="Username" :label-width="'100px'" prop="user">
            <el-input autocomplete="off" v-model="ruleForm.user" placeholder="Username"></el-input>
          </el-form-item>
          <el-form-item label="Password" :label-width="'100px'" prop="pass">
            <el-input
              autocomplete="off"
              type="password"
              v-model="ruleForm.pass"
              placeholder="Password"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="login-other">
          <FBLoginButton />
          <span>or</span>
          <GGLoginButton />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="closeDialigLogin">Login</el-button>
        <el-button type="danger" @click="closeDialigLogin">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import FBLoginButton from "@/components/Login/FBLoginButton";
import GGLoginButton from "@/components/Login/GGLoginButton";

import { mapGetters } from "vuex";

export default {
  name: "DialogLogin",
  data() {
    var validateUser = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.user === "") {
          callback(new Error("Please enter your username"));
        }
        callback();
      }, 500);
    };

    var validatePass = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.pass === "") {
          callback(new Error("Please enter your password"));
        }
        if (this.ruleForm.pass.length < 8) {
          callback(new Error("Password has length than 8 charecter"));
        }
        callback();
      }, 500);
    };

    return {
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        user: [{ validator: validateUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  computed: {
    ...mapGetters(["getDialogLoginVisible"])
  },
  components: {
    FBLoginButton,
    GGLoginButton
  },
  methods: {
    closeDialigLogin() {
      const isLogin = this.getDialogLoginVisible;
      this.$store.dispatch("changeDialogLoginVisible", !isLogin);
    }
  }
};
</script>
<style lang="scss" scoped>
.login-other {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>