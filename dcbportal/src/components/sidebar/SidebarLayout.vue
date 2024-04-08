<template>
	<div class="layout-aside">
		<div id="sidebar" class="sidebar">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import '../index.scss';
import { defineComponent } from 'vue'

export default defineComponent({
	name: "SidebarLayout",
	data() {
		return {}
	}
})
</script>
