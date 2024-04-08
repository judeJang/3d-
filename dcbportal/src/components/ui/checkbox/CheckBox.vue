<template>
  <div class="custom-checkbox">
    <label :for="this.$props.id ? this.$props.id : this.$props.value">
      <input type="checkbox" :id="id" :name="name" :value="value" v-model="checked" @click="this.click">
      <span class="check" :class="{ on : checked }"></span>
      <span class="check-label">{{ label }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import './CheckBox.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CheckBox',
  data() {
    return {
      checked: true,
    }
  },
  props: {
    id: String,
    name: String,
    value: String,
    label: String,
  },
  emits: ['click'],
  methods: {
    click(event: any): any {
      this.$emit('click', event.target.checked, event.target.value);
    }
  }
});
</script>
