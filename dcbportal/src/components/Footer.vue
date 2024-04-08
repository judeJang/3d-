<template>
	<div class="footer__container">
		<div class="footer-aside">
			footer
		</div>
		<div class="footer-content">
			약관 등
		</div>
	</div>
</template>

<script lang="ts">
import './index.scss';
import { defineComponent } from 'vue'

export default defineComponent({
	name: "Footer",
	data() {
		return {
			footer: 'footer'
		}
	}
})
</script>
