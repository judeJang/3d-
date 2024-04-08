<template>
	<div class="header-flex">
		<div class="h1">logo</div>
		<nav>
			<ul class="gnb">
			</ul>
		</nav>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Header",
	props: {
		user: {}
	}
})
</script>
