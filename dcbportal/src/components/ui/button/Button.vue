<template>
  <button type="button" :id="btnId" class="btn" :class="btnColor">{{ txt }}</button>
  <!-- :class="badge" -->
</template>

<script lang="ts">
import './Button.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Button',

  props: {
    btnId: String,
    btnColor: String,
    txt: String,
  },

});
</script>
