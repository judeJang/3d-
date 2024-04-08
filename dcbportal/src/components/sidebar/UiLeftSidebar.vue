<template>
  <SidebarLayout>
    <template #default>
      <div>
        UiLeftSidebar
      </div>
    </template>
  </SidebarLayout>
</template>

<script>
import {defineComponent} from "vue";
import SidebarLayout from "@/components/sidebar/SidebarLayout";

export default defineComponent({
  name: "UiLeftSidebar",
  components: {SidebarLayout}
})
</script>

<style scoped>

</style>
