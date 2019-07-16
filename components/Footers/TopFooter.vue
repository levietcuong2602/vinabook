<template>
  <div class="top-footer mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-sm-6 col-12">
          <div class="row">
            <div class="col-md-4 col-sm-6 tfoo-left">
              <p>VỀ CÔNG TY</p>
              <ul>
                <li
                  v-for="item in aboutCity"
                  :key="item.title"
                ><a href="#">{{ item.title }}</a></li>
              </ul>
            </div>
            <div class="col-md-5 col-sm-6 tfoo-left">
              <p>TRỢ GIÚP</p>
              <ul>
                <li
                  v-for="item in aboutSupport"
                  :key="item.title"
                ><a href="#">{{ item.title }}</a></li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 tfoo-left">
              <p>TIN TỨC</p>
              <ul>
                <li
                  v-for="item in aboutNews"
                  :key="item.title"
                ><a href="#">{{ item.title }}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-sm-6 col-12">
          <div class="row">
            <div class="col-md-4 col-sm-6 tfoo-right">
              <div class="row">
                <p>CHẤP NHẬN THANH TOÁN</p>
                <div
                  class="col-md-4 col-sm-6 pl-0 mt-1"
                  v-for="icon in iconPayment"
                  :key="icon.img"
                >
                  <img
                    :src="icon.img"
                    alt="icon payment"
                  >
                </div>
              </div>
              <div class="row mt-3">
                <p>THANH TOÁN AN TOÀN</p>
                <div
                  class="col-md-4 col-sm-6 pl-0 mt-1"
                  v-for="icon in iconPaySafe"
                  :key="icon.img"
                >
                  <img
                    :src="icon.img"
                    alt="icon payment"
                  >
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 tfoo-rihgt">
              <p>ĐỐI TÁC VẬN CHUYỂN</p>
              <div
                class="pl-0 mt-1"
                v-for="icon in iconShiper1"
                :key="icon.img"
              >
                <img
                  :src="icon.img"
                  alt="icon payment"
                  style="width: 100%; object-fit: contain;"
                >
              </div>
            </div>
            <div class="col-md-4 col-sm-6 tfoo-rihgt">
              <p>ĐỐI TÁC BÁN HÀNG</p>
              <div
                class="col-md-4 col-sm-6 pl-0 mt-1"
                v-for="icon in iconShiper2"
                :key="icon.img"
              >
                <img
                  :src="icon.img"
                  alt="icon payment"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopFooter',
  data() {
    return {
      aboutCity: [
        { title: 'Hỗ trợ trực tuyến ' },
        { title: 'Giới thiệu công ty' },
        { title: 'Tuyển dụng' },
        { title: 'Góc báo chí' },
        { title: 'Chương trình đại lý' },
        { title: 'Chính sách bảo mật' },
        { title: 'Ứng dụng đọc ebook' }
      ],
      aboutSupport: [
        { title: 'Quy định sử dụng' },
        { title: 'Hướng dẫn mua hàng' },
        { title: 'Phương thức thanh toán' },
        { title: 'Phương thức vận chuyển' },
        { title: 'Các câu hỏi thường gặp' },
        { title: 'Bọc sách bằng bìa Plastic' }
      ],
      aboutNews: [
        { title: 'Tin tức' },
        { title: 'Chân dung' },
        { title: 'Điểm sách' },
        { title: 'Phê bình' }
      ],
      iconPayment: [
        { img: '/img/visa.jpg' },
        { img: '/img/master_card.jpg' },
        { img: '/img/jcb.jpg' },
        { img: '/img/atm.jpg' },
        { img: '/img/cod.jpg' },
        { img: '/img/payoo.jpg' },
      ],
      iconPaySafe: [
        { img: '/img/verify_visa.jpg' },
        { img: '/img/mastercard_securecode.jpg' },
        { img: '/img/onepay.jpg' }
      ],
      iconShiper1: [
        { img: '/img/logovnb.png' },
        { img: '/img/vn-post.jpg' },
        { img: '/img/dhl.jpg' },
      ],
      iconShiper2: [
        { img: '/img/lazada.jpg' },
        { img: '/img/shopee.jpg' },
        { img: '/img/amazon.jpg' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.top-footer {
  .tfoo-left {
    padding: 0px;
    p {
      font-size: 90%;
      font-weight: 500;
    }
    ul {
      padding-left: 0px;
      li {
        list-style: none;
        a {
          font-size: 87%;
          color: #717171;
          text-decoration: none;
          font-weight: 500;
        }
        :hover {
          color: #000;
          text-decoration: none;
        }
      }
    }
  }
  .tfoo-right {
    p {
      font-size: 90%;
      font-weight: 500;
    }
    img {
      // margin: 0 3px 6px 3px;
      border: 1px solid #cecece;
      width: 55px;
      height: 38px;
    }
  }
}
p {
  font-size: 90%;
  font-weight: 500;
}
</style>
