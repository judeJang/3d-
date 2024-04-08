<template>
	<div id="wrapper">
		<slot name="header">
			<div id="header" class="header">
			</div>
		</slot>
		<div id="body" class="body">
			<slot></slot>
		</div>
		<slot name="footer">
			<div id="footer" class="footer">
				<Footer/>
			</div>
		</slot>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Button from "@/components/ui/button/Button.vue";

export default defineComponent({
	name: "BaseLayout",
	components: { Header, Footer, Button },
	setup() {
	},
	methods: {}
})
</script>
