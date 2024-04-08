<template>
	<InLayout>
		<div class="about">
			<!-- <Checkbox /> -->
			<ul>
				<li>
					<h4>checkbox</h4>
					<CheckBox v-model="checked" id="jack" value="Jack" label="Jack" @click="this.inputMethod"/>
					<CheckBox v-model="checked" id="john" value="Jone" label="Jone" @click="this.inputMethod"/>
				</li>
				<li>
					<h4>radiobox</h4>
					<RadioBox label="Foo" value="foo" name="label" v-model="MySelectedValue"/>
					<RadioBox label="Vue" value="vue" name="label" v-model="MySelectedValue"/>
				</li>
				<li>
					<h4>select</h4>
					<Select :options="userStatuses"/>
				</li>
				<li>
					<h4>Button</h4>
					<Button class="outline-danger lg" txt="버튼"/>
				</li>
				<li>
					<h4>accordion</h4>
					<Accordion :items="accItem"/>
				</li>
				<li>
					<h4>Modal</h4>
					<h5>default</h5>
					<Modal :isModal="isModal" @close-modal="isModal = false" title="제목">
						<div>modalbody</div>
					</Modal>
					<Button class="outline-primary sm" @click="isModal = true" txt="show"/>
					<br/>
					<MyModal title="모달팝업" v-show="this.visible" @close="close"/>
					<br/>
					<Button class="primary sm" @click="this.visible = true" txt="My Modal Show"/>
				</li>
			</ul>

		</div>
	</InLayout>
</template>
<script lang="ts">

import { defineComponent } from 'vue'
import InLayout from '@/components/InLayout.vue';

import MenuList from "@/apps/common/menuList";
import CheckBox from '@/components/ui/checkbox/CheckBox.vue';
import RadioBox from '@/components/ui/radiobox/RadioBox.vue';
import Select from '@/components/ui/select/Select.vue';
import Button from '@/components/ui/button/Button.vue';
import Accordion from '@/components/ui/accordion/Accordion.vue';
import Modal from '@/components/ui/modal/Modal.vue';
import MyModal from "@/components/ui/modal/MyModal.vue";

export default defineComponent({
	name: 'UiComponentsView',

	components: {
		CheckBox,
		RadioBox,
		Select,
		Button,
		Accordion,
		Modal,
		MyModal,
		InLayout,
	},

	data() {
		return {
			checked: true,
			inputShow: false,
			MySelectedValue: "foo",
			tabs: ['tab1', 'tab2', 'tab3'],
			accItem: [
				{
					id: 1,
					title: "제목1",
					content: "콘텐츠1",
					isExpand: false,
					computedHeight: 0,
					isCategory: false,
				},
				{
					id: 2,
					title: "카테고리 있음(Depth)",
					isExpand: false,
					computedHeight: 0,
					isCategory: true,
					category: [
						{
							id: 3,
							title: "제목2",
							content: "콘텐츠2",
							isExpand: false,
							computedHeight: 0,
							isCategory: false,
						},
						{
							id: 4,
							title: "제목3",
							content: "콘텐츠3",
							isExpand: false,
							computedHeight: 0,
							isCategory: false,
						}
					],
				},
				{
					id: 5,
					title: "제목4",
					content: "콘텐츠4",
					isExpand: false,
					computedHeight: 0,
					isCategory: false,
				},
			],
			userStatuses: ["가", "나", "다", "라", "마", "바", "사", "아", "자", "차", "카", "타", "파", "하"],
			isModal: false,
			AlertModal: false,
			isPopup: false,
			MyInputValue: "",
			MyTextAreaValue: "",
			isLoading: false,
			visible: false,
			MyInputFileValue: "",
		}
	},
	mounted() {
		document.title = MenuList.uicomponents.title;
	},


	methods: {
		inputShowMethod(): void {
			this.inputShow = !this.inputShow;
			/*if (this.inputShow) {
			  this.$nextTick(() => {
				//@ts-ignore
				this.$refs.questionInput.focus();
				// this.$el.$refs.questionInput.focus();
			  })
			}*/
		},
		inputMethod(chk: boolean, val: string): void {
			console.log(chk + ' ' + val);
		},
		setInputData(v: string): void {
			this.MyInputValue = v;
		},
		setTextAreaData(v: string): void {
			this.MyTextAreaValue = v;
		},
		close(): void {
			this.visible = false;
		},
		setInputFileData(v: string): void {
			this.MyInputFileValue = v;
		},
		excelDownload(): void {
		}
	}
})
</script>

<style scoped>
ul {
    float: left;
    width: 300px;
}

.cardBox {
    width: 100%;
    height: 300px;
}

</style>
