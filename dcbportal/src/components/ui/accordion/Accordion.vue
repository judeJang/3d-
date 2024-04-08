<template>
  <template v-for="item in items" :key="item.id">
    <div v-if="item.isCategory">
      <div>
        <span>{{ item.title }}</span>
      </div>

      <div class="card"
           v-for="child in item.category"
           :key="child.id">
        <div class="card-header"
             @click.prevent="toggleExpand(child)">
          <span>{{ child.title }}</span>
          <div class="icon" v-if="child.isExpand"></div>
          <div class="icon iconRow" v-if="!child.isExpand"></div>
        </div>

        <div class="card-body"
             :ref="'content' + child.id"
             :style="[child.isExpand ? {height: child.computedHeight} : {}]">
          <div class="card-content">{{ child.content }}</div>
        </div>
      </div>
    </div>

    <div v-else class="card">
      <div class="card-header"
           @click.prevent="toggleExpand(item)">
        <span>{{ item.title }}</span>
        <div class="icon" v-if="item.isExpand"></div>
        <div class="icon iconRow" v-if="!item.isExpand"></div>
      </div>

      <div class="card-body"
           :ref="'content' + item.id"
           :style="[item.isExpand ? {height: item.computedHeight} : {}]">
        <div class="card-content">{{ item.content }}</div>
      </div>
    </div>
  </template>
</template>
<script>
import './Accordion.scss';
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Accordion',
  props: {
    items: Array,
  },
  data() {
    return {
      isComputedHeight: false,
    }
  },
  methods: {
    toggleExpand(item) {
      if (this.isComputedHeight) {
        this.getContent();
      }
      item.isExpand = !item.isExpand;
    },
    getContent() {
      this.isComputedHeight = false;
      this.items.forEach((item) => {
        let content = null;
        if (item.isCategory) {
          item.category.forEach((childItem) => {
            content = this.$refs["content" + childItem.id][0];
            this.getComputedHeight(childItem, content);
          });
        } else {
          content = this.$refs["content" + item.id][0];
          this.getComputedHeight(item, content);
        }
      });
    },
    getComputedHeight(item, content) {
      content.style.height = 'auto';
      content.style.position = 'absolute';
      content.style.visibility = 'hidden';
      content.style.display = 'block';

      item.computedHeight = getComputedStyle(content).height;
      content.style.height = 0;
      content.style.position = null;
      content.style.visibility = null;
      content.style.display = null;
    }
  },
  watch: {
    items() {
      this.isComputedHeight = true;
    }
  },
  mounted() {
    this.isComputedHeight = true;
  }
});
</script>
