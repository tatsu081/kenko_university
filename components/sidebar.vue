<template>
  <div>
    <category-list/>
    <profile-list/>
  </div>
</template>

<script>
import categoryList from "~/components/sidebarCategoryList";
import profileList from "@/components/profileList";
export default {
  components:{
    categoryList,
    profileList
  }
}
</script>

<style scoped>

</style>
