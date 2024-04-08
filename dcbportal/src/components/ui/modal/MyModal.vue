<template>
  <ModalLayout>
    <template #header>
      <div>{{ title }}</div>
      <div>
        <button type="button" class="close-btn" @click="close" aria-label="Close Modal"> x</button>
      </div>
    </template>
    <template #body>body</template>
    <template #footer>
      <button type="button" class="btn-open-modal" @click="close" aria-label="Close Modal">
        Close Modal
      </button>
    </template>
  </ModalLayout>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ModalLayout from "@/components/ui/modal/ModalLayout.vue";

export default defineComponent({
  name: "MyModal",
  components: {ModalLayout},
  emits: ['close'],
  methods: {
    close(): void {
      this.$emit('close');
    }
  },
  props: {
    title: String
  }
})
</script>
