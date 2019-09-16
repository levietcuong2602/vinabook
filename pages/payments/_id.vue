<template>
  <div class="payments">
    <div class="container">
      <div class="row mt-5">
        <div class="step-checkout">
          <div class="step">
            <el-badge :value="1" class="item" type="success">
              <p>Địa Chỉ & Dịch Vụ</p>
            </el-badge>
          </div>
          <div class="step">
            <el-badge :value="2" class="item" type="success">
              <p>Hình thức thanh toán</p>
            </el-badge>
          </div>
          <div class="step">
            <el-badge :value="3" class="item" type="success">
              <p>Xác nhận & Đặt hàng</p>
            </el-badge>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <h5 class="title">Địa chỉ & Dịch vụ</h5>
      </div>
      <div class="row mt-3">
        <div class="step1 row col-12">
          <div class="col-lg-6 col-md-6">
            <h5 class="title-edit">Địa chỉ giao hàng</h5>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="120px"
              class="demo-ruleForm"
              v-if="currentStep === 1"
            >
              <el-form-item label="Họ và tên" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="Điện thoại" prop="phoneNumber">
                <el-input v-model="ruleForm.phoneNumber" placeholder="Nhập vào số điện thoại"></el-input>
              </el-form-item>
              <el-form-item label="Quốc gia" required prop="country">
                <el-select v-model="ruleForm.country" placeholder="Chọn quốc gia">
                  <el-option
                    v-for="item in countries"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Tỉnh thành" prop="province">
                <el-select v-model="ruleForm.province">
                  <el-option
                    v-for="item in provinces"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Quận/Huyện" prop="distric">
                <el-select v-model="ruleForm.distric">
                  <el-option
                    v-for="item in districs"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Phường/xã" prop="commune">
                <el-select v-model="ruleForm.commune">
                  <el-option
                    v-for="item in communes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="Tên tòa nhà" prop="building">
                <el-input v-model="ruleForm.building"></el-input>
              </el-form-item>
              <el-form-item label="Số nhà" prop="address">
                <el-input v-model="ruleForm.address"></el-input>
              </el-form-item>
              <el-form-item label="Đường" prop="street">
                <el-input v-model="ruleForm.street"></el-input>
              </el-form-item>
              <span>Phí vận chuyển miễn phí</span>
              <el-form-item label="Ghi chú" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="success" @click="submitForm('ruleForm')">Lưu</el-button>
              </el-form-item>
            </el-form>
            <div class="step2" v-if="currentStep === 2">
              <p class="info-custom">Lê Việt Cường</p>
              <p class="info-custom">12 cầu giấy Đường cầu giấy, Cầu Giấy</p>
              <p class="info-custom">Hà Nội, Viet Nam</p>
              <p class="info-custom">0968078124</p>
              <p class="info-custom">Lê Việt Cường</p>
              <span>
                <i>Gởi hàng qua bưu điện</i>
              </span>
              <hr />
              <label for="description">Ghi chú</label>
              <el-input name="description" type="textarea" v-model="ruleForm.desc"></el-input>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <h5 class="title-service">Vui lòng chọn dịch vụ kèm theo</h5>
            <ul class="content-service">
              <li>
                <div class="control-group" @click="serviceCover = !serviceCover">
                  <i :class="['fas fa-check-circle', serviceCover ? 'text-success' : '']"></i>
                  <label class="service-cover">Bọc sách (3000 đ/quyển)</label>
                </div>
                <div class="service-content"></div>
              </li>
              <li>
                <div class="control-group" @click="serviceWishOrder = !serviceWishOrder">
                  <i :class="['fas fa-check-circle', serviceWishOrder ? 'text-success' : '']"></i>
                  <label class="service-wishorder">Gói quà (1000 đ)</label>
                </div>
                <div class="service-content"></div>
              </li>
              <li>
                <div class="control-group" @click="serviceOrder = !serviceOrder">
                  <i :class="['fas fa-check-circle', serviceOrder ? 'text-success' : '']"></i>
                  <label class="service-order">Xuất hóa đơn</label>
                </div>
                <div class="service-content"></div>
              </li>
            </ul>
          </div>
        </div>
        <div class="action text-center col-12 mt-3">
          <el-button @click="handleBack(currentStep)">Quay lại</el-button>
          <el-button type="warning" @click="handleChangeStep(currentStep)">Tiếp tục</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        phoneNumber: "",
        country: "",
        province: "",
        distric: "",
        commune: "",
        building: "",
        address: "",
        street: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please Enter Your Name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 30,
            message: "Length should be 3 to 30",
            trigger: "blur"
          }
        ],
        phoneNumber: [
          {
            type: "number",
            message: "Phone Number is invalid",
            trigger: "change"
          },
          {
            required: true,
            message: "Phone Number is required",
            trigger: "blur"
          }
        ],
        country: [
          {
            required: true,
            message: "Country is required",
            trigger: "blur"
          }
        ],
        province: [
          {
            required: true,
            message: "Province is required",
            trigger: "blur"
          }
        ],
        distric: [
          {
            required: true,
            message: "Please select at least one activity type",
            trigger: "change"
          }
        ],
        address: [
          {
            required: true,
            message: "Please Enter Your Address",
            trigger: "Blur"
          }
        ],
        street: [
          {
            required: true,
            message: "Please Enter Your Street Current",
            trigger: "blur"
          }
        ]
      },
      countries: [],
      provinces: [],
      districs: [],
      communes: [],
      serviceCover: false,
      serviceWishOrder: false,
      serviceOrder: false,
      currentStep: 1
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleChangeStep(currentStep) {
      // console.log(currentStep);
      switch (currentStep) {
        case 1:
          // validate step 1
          this.currentStep = 2;
          break;
        case 2:
          // validate step 2
          this.currentStep = 3;
          break;
        case 3:
          // validate form form
          this.currentStep = 1;
          break;
        default:
          this.currentStep = 1;
          break;
      }
    },
    handleBack(currentStep) {
      switch (currentStep) {
        case 3:
          this.currentStep = 2;
          break;
        case 2:
          this.currentStep = 1;
          break;
        case 1:
          this.$router.go(-1);
          break;
        default:
          this.$router.go(-1);
          break;
          break;
      }
    }
  }
};
</script>
<style lang="scss">
@import "_id.scss";
</style>