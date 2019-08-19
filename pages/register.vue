<template>
  <div class="register">
    <div class="container">
      <div class="row pt-3">
        <div class="breadcrum">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">Trang chủ</el-breadcrumb-item>
            <el-breadcrumb-item>Tạo tài khoản mới</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="mt-4">
        <div class="form-register row mt-5">
          <div class="col-lg-8 col-sm-6 col-12">
            <h5 class="text-center mb-5">ĐĂNG KÝ TÀI KHOẢN</h5>
            <el-form
              status-icon
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
            >
              <!-- First name and last name -->
              <el-form-item
                label="Full name"
                prop="fullname"
              >
                <el-input
                  placeholder="Enter your full name"
                  v-model="ruleForm.fullname"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- Email -->
              <el-form-item
                label="Email"
                prop="email"
              >
                <el-input
                  type="email"
                  placeholder="Enter your email"
                  v-model="ruleForm.email"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- Password -->
              <el-form-item
                label="Password"
                prop="pass"
              >
                <el-input
                  type="password"
                  placeholder="Enter your password"
                  v-model="ruleForm.pass"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- Password confirm -->
              <el-form-item
                label="Confirm"
                prop="confirm"
              >
                <el-input
                  type="password"
                  placeholder="Enter your password confirm"
                  v-model="ruleForm.confirm"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <!-- Birthday -->
              <el-form-item
                label="Birthday"
                prop="birthday"
              >
                <el-date-picker
                  type="date"
                  placeholder="Select your birthday"
                  v-model="ruleForm.birthday"
                  style="width: 100%;"
                ></el-date-picker>
              </el-form-item>
              <!-- Sex -->
              <el-form-item
                label="Sex"
                prop="sex"
              >
                <el-radio-group v-model="ruleForm.sex">
                  <el-radio label="Male"></el-radio>
                  <el-radio label="Female"></el-radio>
                  <el-radio label="Others"></el-radio>
                </el-radio-group>
              </el-form-item>
              <!-- Code validate capcha -->
              <el-form-item label="Captcha">
                <script src='https://www.google.com/recaptcha/api.js'></script>
                <div
                  class="g-recaptcha"
                  data-sitekey="6Le53RUUAAAAAGyChlQ0QhnPO8FXEFRzskMCofVR"
                ></div>
              </el-form-item>
              <el-form-item>
                <el-button type="primary">Submit</el-button>
                <el-button @click="resetForm('ruleForm')">Reset</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="col-lg-4 col-sm-6 col-12">
            <h5 class="text-center mb-5">ĐĂNG NHẬP CÁCH KHÁC</h5>
            <div class="login-other">
              <GGLoginButton />
              <FBLoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FBLoginButton from '@/components/Login/FBLoginButton';
import GGLoginButton from '@/components/Login/GGLoginButton';

export default {
  components: {
    FBLoginButton,
    GGLoginButton
  },
  data() {
    var validateFullname = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.fullname === '') {
          callback(new Error('Please input your fullname'));
        } else {
          callback();
        }
      }, 500);
    };

    var validateEmail = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.email === '') {
          callback(new Error('Please input your email'));
        } else {
          callback();
        }
      }, 500);
    };

    var validatePass = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.pass === '') {
          callback(new Error('Please input the password'));
        } else {
          if (this.ruleForm.confirm !== '') {
            this.$refs.ruleForm.validateField('confirm');
          }
          callback();
        }
      }, 500);
    };

    var validateConfirm = (rule, value, callback) => {
      setTimeout(() => {
        if (this.ruleForm.confirm === '') {
          callback(new Error('Please input the confirm password'));
        } else {
          if (this.ruleForm.pass !== this.ruleForm.confirm) {
            callback(new Error("Don't match password"));
          } else {
            callback();
          }
        }
      }, 500);
    };

    return {
      ruleForm: {
        fullname: '',
        email: '',
        pass: '',
        confirm: '',
        birthday: '',
        sex: '',
        code: ''
      },
      rules: {
        fullname: [
          // { required: true, message: 'Please input your full name', trigger: ['blur', 'change'] },
          { validator: validateFullname, trigger: 'blur' },
        ],
        email: [
          { validator: validateEmail, trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] },
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        confirm: [
          { validator: validateConfirm, trigger: 'blur' },
        ]
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  head () {
    return {
      title: 'Register',
      meta: [
        { hid: 'description', name: 'description', content: 'Register page' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
  .form-register {
    border: 1px solid #e5e5e5;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;

    .login-other {
      text-align: center;
    }
  }
}
</style>

