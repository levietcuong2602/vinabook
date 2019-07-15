<template>
  <div class="bott-header">
    <div class="container">
      <div class="bottom-header">
        <div class="category">
          Category Dropdown
        </div>
        <div class="hotline">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomHeader',
  data() {
    return {
      popup: {
        hotline: 'Tổng đài chăm sóc và Hỗ trợ Khách hàng hoạt động suốt 7 ngày trong tuần \n Thứ 2 - 7: hoạt động từ 7:30 - 20:00 \nChủ nhật: hoạt động từ 8:00 - 17:00',
        online: 'Hỗ trơ khách hàng'
      }
    }
  }
}
</script>
<style scoped lang="scss">
.bott-header {
  background-color: #0a6f3c;
  color: #fff;
  padding: 10px 0px;
  .bottom-header {
    display: flex;
    justify-content: space-between;
    .hotline {
      #popover-4 {
        font-size: 85%;
        font-weight: 600;
      }
      #popover-5 {
        font-size: 85%;
        font-weight: 600;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }
}
</style>
