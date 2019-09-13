<template>
  <div class="zap-slideout" :class="[{'isOpen': getIsOpenSideout} ]">
    <div class="zap-slideout-opener" @click="toggle" :class="[{'isOpen': getIsOpenSideout} ]">
      <button class="header--btn" key="off">
        <svg viewBox="0 0 24 24" style="width: 1.4rem; height: 1.4rem; padding: 0;">
          <title>Close</title>
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
    <ul class="zap-slideout-menu">
      <li class="search-form">
        <div class="top-search">
          <form>
            <input type="search" placeholder="Nhập từ khóa bạn muốn tìm kiếm" class="search-input" />
            <button type="buttom" class="submit btn-search">
              <i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </li>
      <li class="zap-slideout-menu-item" v-for="item in menu" :key="item.title" @click="close">
        <a :href="item.url">{{ item.title }}</a>
      </li>
      <!-- <li
        class="zap-slideout-menu-item--small"
        v-for="item in smallMenu"
        :key="item"
      >{{item}}</li>-->
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "SlideoutMenu",
  data: () => ({
    openerText: "Open",
    menu: [
      {
        url: "/",
        title: "Trang chủ"
      },
      {
        url: "/introduction",
        title: "Giới thiệu"
      },
      {
        url: "/products",
        title: "Sản phẩm"
      },
      {
        url: "/services",
        title: "Dịch vụ"
      },
      {
        url: "/news",
        title: "Tin tức"
      },
      {
        url: "/contacts",
        title: "Liên hệ"
      },
      {
        url: "/login",
        title: "Đăng nhập"
      }
    ]
  }),
  computed: {
    ...mapGetters(["getIsOpenSideout"])
  },
  methods: {
    open() {
      this.openerText = "Close";
      this.$store.dispatch("updateIsOpenSideout", true);
    },
    close() {
      this.openerText = "Open";
      this.$store.dispatch("updateIsOpenSideout", false);
    },
    toggle() {
      if (this.getIsOpenSideout) {
        this.close();
      } else {
        this.open();
      }
    }
  }
};
</script>
<style scoped>
ul li {
  list-style: none;
}
.zap-slideout {
  position: fixed;
  top: 0;
  width: 250px;
  height: 100%;
  /* padding: 30px; */
  padding: 30px 0;
  background-color: rgba(255, 255, 255, 0.95);
  transform: translateX(-100%);
  z-index: 1000;
  transition: 0.5s;
  /* overflow-x: hidden; */
  box-shadow: 2px 2px 10px grey;
}

.zap-slideout .search-form {
  padding: 20px;
}

.zap-slideout .zap-slideout-menu {
  padding-left: 0px;
}

.zap-slideout .zap-slideout-menu .zap-slideout-menu-item {
  border-top: 1px solid #ececec;
  min-height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  text-transform: uppercase;
}

.zap-slideout .zap-slideout-menu .zap-slideout-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.zap-slideout .zap-slideout-menu .zap-slideout-menu-item a {
  text-decoration: none;
  color: rgba(102, 102, 102, 0.85);
  transition: all 0.2s;
  font-weight: 400;
  width: 100%;
}

.zap-slideout .zap-slideout-menu .top-search .search-input {
  font-size: 85%;
  height: 40px;
  border: 1px solid #ddd;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}

.zap-slideout .zap-slideout-menu .top-search .btn-search {
  position: absolute;
  width: 40px;
  height: 40px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #f79c3a;
  border-color: rgba(0, 0, 0, 0.05);
  color: #fff;
}

/* Animation slideout */
.zap-slideout.isOpen {
  transform: translateX(0);
}

.zap-slideout-opener {
  display: none;
  position: absolute;
  top: -5px;
  left: 83%;
  margin-left: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #fff;
  cursor: pointer;
}

.zap-slideout-opener .header--btn {
  cursor: pointer;
  padding: 0;
  display: inline-block;
  border: 1px solid transparent;
  background-color: transparent;
  appearance: none;
  user-select: none;
}

.zap-slideout-opener.isOpen {
  display: inline;
}
</style>

