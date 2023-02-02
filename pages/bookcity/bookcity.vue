<template>
	<view class="bookcity-page-container">
		<view class="search-conponent-wrapper">
			<Search />
		</view>
		<view class="typeselect-conponent-wrapper">
			<TypeSelect @type-change="bookTypeChange" />
		</view>
		<view class="booklist-conponent-wrapper">
			<BookList />
		</view>
	</view>
</template>

<script>
	import Search from './components/Search.vue'
	import TypeSelect from './components/TypeSelect.vue'
	import BookList from './components/BookList.vue'

	export default {
		components: {
			Search,
			TypeSelect,
			BookList
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
		background: #f4f4f4;
	}
</style>

<style scoped lang="scss">
	.bookcity-page-container {
		height: 100vh;
		padding: var(--status-bar-height) 25upx 25upx 25upx;
		display: flex;
		flex-direction: column;
		.search-conponent-wrapper {

		}
		.typeselect-conponent-wrapper {

		}
		.booklist-conponent-wrapper {
			flex: 1;
			margin-top: 30upx;
			overflow: hidden;
		}
	}
</style>
