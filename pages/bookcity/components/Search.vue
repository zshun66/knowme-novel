<template>
	<view class="search-component-container">
		<view class="search-box" @tap="handleTap">
			<font-icon class="search-icon" name="icon-sousuo"></font-icon>
			<text class="keyword">鉴宝狂少</text>
			<text class="search-tip">搜小说</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {

		},
		methods: {
			handleTap() {
				uni.showToast({
					title: '该功能暂未开放',
					icon: 'error'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.search-component-container {
		width: 100%;
		.search-box {
			width: 100%;
			height: 70upx;
			background: #fff;
			border-radius: 100upx;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			padding: 0 30upx;
			box-sizing: border-box;
			.search-icon {
				font-size: 36upx;
				color: #888;
			}
			.keyword {
				margin-left: 10upx;
				font-size: 30upx;
				color: #888;
			}
			.search-tip {
				margin-left: auto;
				font-size: 30upx;
				color: #888;
			}
		}
	}
</style>
