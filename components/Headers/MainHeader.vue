<template>
  <nav data-spy="affix">
    <div class="main-header">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 col-md-12">
            <div class="top-logo">
              <a href="/">
                <img
                  src="/img/vnb_logo_2x.png"
                  alt="logo"
                >
              </a>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 search-wrap">
            <div class="top-search">
              <el-autocomplete
                popper-class="my-autocomplete"
                v-model="state"
                :fetch-suggestions="querySearch"
                placeholder="Enter book name, author's book"
                @select="handleSelect"
              >
                <i
                  class="el-icon-search el-input__icon"
                  slot="suffix"
                  @click="handleIconClick"
                >
                </i>
                <!-- <el-button slot="append">Tìm kiếm</el-button> -->
                <template slot-scope="{ item }">
                  <div class="value">{{ item.value }}</div>
                  <span class="link">{{ item.link }}</span>
                </template>
              </el-autocomplete>
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex justify-content-between">
            <HeartDropdown />
            <CartDropdown />
            <div class="top-online">
              <a href="/login">Đăng nhập</a>
              <el-divider direction="vertical"></el-divider>
              <a href="/register">Đăng ký</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import CartDropdown from './CartDropdown';
import HeartDropdown from './HeartDropdown';

export default {
  name: 'MainHeader',
  components: {
    CartDropdown,
    HeartDropdown
  },
  data() {
    return {
      links: [],
      state: ''
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var links = this.links;
      var results = queryString ? links.filter(this.createFilter(queryString)) : links;
      // call callback function to return suggestion objects
      cb(results);
    },
    createFilter(queryString) {
      return (link) => {
        return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "vue", "link": "https://github.com/vuejs/vue" },
        { "value": "element", "link": "https://github.com/ElemeFE/element" },
        { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
        { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
        { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
        { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
        { "value": "babel", "link": "https://github.com/babel/babel" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  mounted() {
    this.links = this.loadAll();
  }
}
</script>
<style scoped lang="scss">
.main-header {
  padding: 10px 0px;

  .top-online {
    display: flex;
    align-items: center;

    a {
      font-size: 85%;
      color: #0f0f0f;
      text-decoration: none;
      :hover {
        color: #dd3333;
      }
    }
  }

  .top-logo {
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 992px) {
  .top-logo {
    padding: 5px;
  }
}
</style>

