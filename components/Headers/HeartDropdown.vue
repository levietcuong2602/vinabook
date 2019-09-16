<template>
  <b-dropdown class="m-2" toggle-class="text-decoration-none" variant="none" right no-caret lg>
    <template slot="button-content">
      <i class="fas fa-heart text-danger"></i>
      <b-badge pill variant="danger" style="position: absolute; top: 35%;">5</b-badge>
    </template>
    <div class="dropdown-menu-lg">
      <b-dropdown-header tag="div" class="text-center">
        <strong>Bạn có 5 yêu thích</strong>
      </b-dropdown-header>
      <b-dropdown-item href="/product/1">
        <div class="row">
          <div class="col-sm-4 col-4">
            <img
              src="https://mica.thainguyenweb.com/wp-content/uploads/2018/06/hop_20dung_20banh_20sinh_20nhat_20nap_20den_2022cm_grande.jpg"
              alt="image product"
              style="width: 100%;"
            />
          </div>
          <div class="col-sm-8 col-8">
            <h5 style="font-size: 85%;">Hộp Mica Kỹ thuật 2808</h5>
            <p>
              Giá:
              <span>60.000 đ</span>
            </p>
          </div>
        </div>
      </b-dropdown-item>
      <div class="dropdown-footer">
        <span>
          <strong>Tổng: 112.000 đ</strong>
        </span>
        <a href="/wish-heart/1" class="btn-view-cart">Xem giỏ hàng</a>
      </div>
    </div>
  </b-dropdown>
</template>
<script>
export default {
  name: "CartDropdown"
};
</script>
<style scoped lang="scss">
.badge {
  position: absolute;
  top: 35%;
  right: 0%;
  margin-top: -16px;
  margin-left: 0;
}
.dropdown-toggle {
  outline: none;
  i {
    font-size: 25px;
  }
}
.dropdown-menu {
  .dropdown-header {
    min-width: 300px;
  }
}
.dropdown-footer {
  max-width: 100%;
  text-align: center;
  padding-left: 15px;
}
.btn-view-cart {
  border: 1px solid #e1af04;
  border-radius: 3px;
  padding: 5px;
  margin-right: auto;
  margin-left: 10px;
  background: #ffc705;
  color: #000;
  text-decoration: none;
  &:hover {
    color: #2ca60d;
  }
}
</style>
