<template>
    <el-dialog :visible.sync="getDialogLoginVisible" :show-close="false" width="40%" :center="true">
      <div slot="title">LOGIN</div>
      <div class="body">
        <el-form :model="form">
            <el-form-item label="Username" :label-width="'100px'">
                <el-input autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Password" :label-width="'100px'">
                <el-input autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div class="login-other">
            <FBLoginButton />
            <span> or </span>
            <GGLoginButton />
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="closeDialigLogin">Login</el-button>
            <el-button type="danger" @click="closeDialigLogin">Cancel</el-button>
      </span>
    </el-dialog>
</template>
<script>
import FBLoginButton from "@/components/Login/FBLoginButton";
import GGLoginButton from "@/components/Login/GGLoginButton";

import { mapGetters } from 'vuex';

export default {
    name: "DialogLogin",
    data() {
        return {
            form: {}
        }
    },
    computed: {
        ...mapGetters(['getDialogLoginVisible']),
    },
    components: {
        FBLoginButton,
        GGLoginButton,
    },
    methods: {
        closeDialigLogin() {
            const isLogin = this.getDialogLoginVisible;
            this.$store.dispatch('changeDialogLoginVisible', !isLogin);
        }
    },
}
</script>
<style lang="scss" scoped>
    .login-other {
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>