<template>
  <transition name="modal">
    <div class="c-modal" v-if="isModal" @click="$emit('close-modal')">
      <div class="c-modal__wrapper">
        <div class="c-modal__dialog">
          <header class="c-modal__header">
            <h2>{{ title }}</h2>
          </header>
          <div class="c-modal__body">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import './Modal.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: "Modal",

  props: {
    isModal: Boolean,
    title: String,
  },
});
</script>
