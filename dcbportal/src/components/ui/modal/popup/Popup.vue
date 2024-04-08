<template>
  <div class="popup" v-if="isPopup" @click="$emit('close-popup')">
    <div class="popup__dialog" @click="$emit('close-popup')">
      <div class="popup__header">
        sdfasdfsdfadsf
      </div>
      <div class="popup__body">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import '../Modal.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: "Popup",

  props: {
    isPopup: Boolean,
    content: String,
  },
});
</script>
