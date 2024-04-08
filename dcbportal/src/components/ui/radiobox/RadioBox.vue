<template>
  <label class="wrapper flex items-center">
    {{ label }}
    <input type="radio" :checked="isChecked" :value="value" @change="$emit('change', $event.target.value)"
           :name="name" />
    <span class="checkmark"></span>
  </label>
</template>

<script lang="ts">
import './RadioBox.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: "RadioBox",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    label: {type: String, default: "", required: true},
    modelValue: {default: ""},
    value: {type: String, default: undefined},
    name: String,
    isChecked: {type: Boolean, default: false}
  },
  // computed: {
  // 	isChecked() {
  // 		return this.modelValue == this.value
  // 	}
  // }
});
</script>
