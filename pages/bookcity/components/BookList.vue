<template>
	<view class="booklist-component-container">
		<u-list
			:lowerThreshold="50"
			pagingEnabled
			@scrolltolower="scrollToLower"
		>
			<u-list-item
				v-for="(item, index) in bookList"
				:key="index"
			>
				<view class="list-item-box">
					<view class="cover-wrap">
						<u--image :src="imgPrefix + item.Img"></u--image>
					</view>
					<view class="info-wrap">
						<view class="name-score">
							<text class="name">{{ item.Name }}</text>
							<text class="score">
								<text>{{ item.Score }}</text>
								<text>分</text>
							</text>
						</view>
						<view class="introduce">
							<text class="text">{{ item.Desc }}</text>
						</view>
						<view class="type-author">
							<text class="type">{{ item.CName }}</text>
							<text class="dot">·</text>
							<text class="author">{{ item.Author }}</text>
						</view>
					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	import { api_Books } from '@/http/api/api.js'

	export default {
		options: {
			styleIsolation: 'shared', // 解除样式隔离
		},
		data() {
			return {
				currBookTypes: null,
				currPage: 1,
				hasNext: false,

				imgPrefix: 'http://www.apporapp.cc/BookFiles/BookImages/',
				bookList: []
			}
		},
		created() {
			uni.$on('book-type-change', (data) => {
				console.log(data)
				this.currBookTypes = data
				let params = {
					...data,
					page: 1
				}
				this.getBooks(params)
			})
		},
		methods: {
			// 获取书籍列表
			async getBooks(data) {
				const res = await api_Books(data)
				console.log('书籍数据', res)
				this.bookList = res.data.data.BookList || []
				this.hasNext = res.data.data.HasNext || false
			},
			// 滚动到底部时触发
			scrollToLower() {
				console.log(546545)
			}
		}
	}
</script>

<style scoped lang="scss">
	.booklist-component-container {
		height: 100%;
		::v-deep .u-list {
			height: 100% !important;
		}
		::v-deep .u-list-item + .u-list-item {
			margin-top: 35upx;
		}
		.list-item-box {
			display: flex;
			.cover-wrap {
				::v-deep .u-image {
					width: 150upx !important;
					height: 200upx !important;
				}
				::v-deep .u-image__image {
					width: 100% !important;
					height: 100% !important;
					border-radius: 10upx !important;
				}
			}
			.info-wrap {
				width: 100%;
				margin-left: 20upx;
				padding: 6upx 0;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.name-score {
					display: flex;
					align-items: center;
					justify-content: space-between;
					line-height: 1;
					.name {
						font-weight: 900;
						font-size: 32upx;
					}
					.score {
						color: #ee9276;
						font-size: 30upx;
						text:last-child {
							font-size: 20upx;
						}
					}
				}
				.introduce {
					.text {
						font-size: 26upx;
						color: #888;
						line-height: 2;
						display: box;
						display: -webkit-box;
						display: -moz-box;
						box-orient: vertical;
						-webkit-box-orient: vertical;
						-moz-box-orient: vertical;
						line-clamp: 2;
						-webkit-line-clamp: 2;
						-moz-line-clamp: 2;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.type-author {
					line-height: 1;
					font-size: 26upx;
					color: #888;
					.type {

					}
					.dot {
						margin: 0 10upx;
					}
					.author {

					}
				}
			}
		}
	}
</style>
