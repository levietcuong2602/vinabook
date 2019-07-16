<template>
  <div class="main-footer mt-3">
    <div class="container">
      <div class="row">
        <p>THƯỜNG ĐƯỢC TÌM KIẾM</p>
        <ul class="row">
          <li
            class="col-md-3 col-sm-3 col-6"
            v-for="item in titles"
            :key="item.title"
          ><a href="#">{{ item.title }}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { lists } from '@/data/main-title-footer';

export default {
  name: 'MainFooter',
  data() {
    return {
      titles: lists
    }
  }
}
</script>
<style scoped lang="scss">
.main-footer {
  p {
    font-size: 90%;
    font-weight: 500;
  }
  ul {
    padding-left: 0px;
    li {
      list-style-type: none;
      a {
        color: #717171;
        text-decoration: none;
      }
      :hover {
        color: #000;
        text-decoration: none;
      }
    }
  }
}
</style>
