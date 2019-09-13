<template>
  <div class="bott-header">
    <div class="container">
      <div class="bottom-header">
        <b-navbar toggleable="lg" type="dark" variant="none">
          <b-navbar-toggle target="nav-collapse1" @click="showSideoutMenu"></b-navbar-toggle>
          <CategoryDropdown />
          <b-navbar-nav class="ml-auto">
            <div class="hotline d-none d-sm-block">
              <span id="popover-4">
                <i class="fas fa-phone-volume"></i> Hotline: 1900 6401
                <b-popover
                  :target="`popover-4`"
                  :placement="`bottomleft`"
                  triggers="hover focus"
                  :content="popup.hotline"
                ></b-popover>
              </span>
              <el-divider direction="vertical"></el-divider>
              <span id="popover-5">
                <i class="fas fa-comments-dollar"></i>
                <a href="#">Hỗ trợ trực tuyến</a>
                <b-popover
                  :target="`popover-5`"
                  :placement="`bottomleft`"
                  triggers="hover focus"
                  :content="popup.online"
                ></b-popover>
              </span>
            </div>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>
    <SlideoutMenu />
  </div>
</template>
<script>
import CategoryDropdown from "./CategoryDropdown";
import SlideoutMenu from "./SlideoutMenu";
import { mapGetters } from "vuex";

export default {
  name: "BottomHeader",
  components: {
    CategoryDropdown,
    SlideoutMenu
  },
  computed: {
    ...mapGetters(["getIsOpenSideout"])
  },
  methods: {
    showSideoutMenu() {
      const isOpen = this.getIsOpenSideout;
      this.$store.dispatch("updateIsOpenSideout", !isOpen);
    }
  },
  data() {
    return {
      popup: {
        hotline:
          "Tổng đài chăm sóc và Hỗ trợ Khách hàng hoạt động suốt 7 ngày trong tuần \n Thứ 2 - 7: hoạt động từ 7:30 - 20:00 \nChủ nhật: hoạt động từ 8:00 - 17:00",
        online: "Hỗ trơ khách hàng"
      }
    };
  }
};
</script>
<style scoped lang="scss">
.navbar {
  width: 100%;
}
.bott-header {
  background-color: #0a6f3c;
  color: #fff;
  // padding: 10px 0px;
  .bottom-header {
    display: flex;
    justify-content: space-between;
    .hotline {
      #popover-4 {
        font-size: 85%;
        font-weight: 600;
        cursor: pointer;
      }
      #popover-5 {
        font-size: 85%;
        font-weight: 600;
        cursor: pointer;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
