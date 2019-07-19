<template>
  <div class="sidebar-box">
    <div class="sidebar-title">
      <p class="title">{{ title }}</p>
    </div>
    <div class="sidebar-body row">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SidebarBox',
  props: {
    title: {
      type: String,
      default: 'Sách Bán Chạy Trong Tuần'
    }
  }
}
</script>
<style scoped>
.sidebar-box .sidebar-title .title {
  font-size: 120%;
  font-weight: 500;
}
</style>
