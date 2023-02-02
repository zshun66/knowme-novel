<template>
	<view class="typeselect-component-container">
		<view class="typeselect-box">
			<view class="type-box sex-type">
				<text
					class="type-item"
					:class="{ active: item.name == currSexType }"
					v-for="(item, index) in booktypes.sex"
					:key="index"
					@tap="handleTapTypeItem('sex', item)"
				>{{ item.title }}</text>
			</view>
			<view class="type-box cate-type">
				<text
					class="type-item"
					:class="{ active: item.name == currCateType }"
					v-for="(item, index) in booktypes.cate"
					:key="index"
					@tap="handleTapTypeItem('cate', item)"
				>{{ item.title }}</text>
			</view>
			<view class="type-box rank-type">
				<text
					class="type-item"
					:class="{ active: item.name == currRankType }"
					v-for="(item, index) in booktypes.rank"
					:key="index"
					@tap="handleTapTypeItem('rank', item)"
				>{{ item.title }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				booktypes: {
					sex: [
						{ title: '男生', name: 'man' },
						{ title: '女生', name: 'lady' },
					],
					cate: [
						{ title: '最热', name: 'hot' },
						{ title: '推荐', name: 'commend' },
						{ title: '完结', name: 'over' },
						{ title: '收藏', name: 'collect' },
						{ title: '新书', name: 'new' },
						{ title: '评分', name: 'vote' },
					],
					rank: [
						{ title: '周榜', name: 'week' },
						{ title: '月榜', name: 'month' },
						{ title: '总榜', name: 'total' },
					]
				},

				currSexType: 'man',
				currCateType: 'hot',
				currRankType: 'week',
			}
		},
		mounted() {
			uni.$emit('book-type-change', {
				sexType: this.currSexType,
				cateType: this.currCateType,
				rankType: this.currRankType
			})
		},
		methods: {
			handleTapTypeItem(type, item) {
				let isChange = false
				if (type == 'sex' && this.currSexType != item.name) {
					this.currSexType = item.name
					isChange = true
				} else if (type == 'cate' && this.currCateType != item.name) {
					this.currCateType = item.name
					isChange = true
				} else if (type == 'rank' && this.currRankType != item.name) {
					this.currRankType = item.name
					isChange = true
				}

				if (isChange) {
					uni.$emit('book-type-change', {
						sexType: this.currSexType,
						cateType: this.currCateType,
						rankType: this.currRankType
					})
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.typeselect-component-container {
		width: 100%;
		.typeselect-box {
			.type-box {
				white-space: nowrap;
				overflow-x: auto;
				.type-item {
					margin-top: 30upx;
					display: inline-block;
					font-size: 28upx;
					color: #555;
					padding: 8upx 20upx;
				}
				.type-item.active {
					background: #cd3620;
					border-radius: 100upx;
					color: #fff;
				}
				.type-item + .type-item {
					margin-left: 20upx;
				}
			}
		}
	}
</style>
