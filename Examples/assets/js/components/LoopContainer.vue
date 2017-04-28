<template>
	<div :class="['loop-container', {'full': full, 'horizontal': horizontal}]" @scroll="scrollHandler" ref="container">
		<slot></slot>
	</div>
</template>

<script>
export default {

	props: {
		full: {
			type: Boolean,
			default: true
		},

		horizontal: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			pageHeight: 0,
  			viewportHeight: 0,
  			pageWidth: 0,
  			viewportWidth: 0
		}
	},

	mounted() {
		window.onresize = () => {
			this.getDimensions()
		};
    	this.getDimensions()	
    },

	methods: {
		scrollHandler(e) {
			if(!this.horizontal) {
				var y = this.$refs.container.scrollTop
				if (y + this.viewportHeight > this.pageHeight) {
					this.$refs.container.scrollTop = y % this.pageHeight
				}
			}else{
				var x = this.$refs.container.scrollLeft
				if (x + this.viewportWidth >= this.pageWidth) {
					this.$refs.container.scrollLeft = x % this.pageWdith
				}
			}

			console.log(x + this.viewportWidth, this.pageWidth);
		},

		getDimensions() {
			const numOfItems = this.$refs.container.childElementCount
			var itemWidth = this.$refs.container.childNodes[0].clientWidth
			var itemHeight = this.$refs.container.childNodes[0].clientHeight
			var additions = this.makeDublicates() - 1;

			this.pageHeight = itemHeight * numOfItems
			this.pageWidth = itemWidth * (numOfItems + additions)
			this.viewportHeight = this.$refs.container.clientHeight
			this.viewportWidth = this.$refs.container.clientHeight
		},

		makeDublicates() {
			if(this.horizontal) {
				var containerSize = this.$refs.container.clientWidth
				var itemSize = this.$refs.container.childNodes[0].clientWidth
			}

			if(!this.horizontal) {
				var containerSize = this.$refs.container.clientHeight
				var itemSize = this.$refs.container.childNodes[0].clientHeight
			}
			var division = containerSize / itemSize;

			for(var i = 0; i < division + 1; i++) {
				this.$refs.container.appendChild(this.$refs.container.childNodes[i].cloneNode(true));
			}

			return division;
		}
	}


}
</script>

<style>
.loop-container {
	display: block;
	overflow-y: scroll;
  	-webkit-overflow-scrolling: touch;
}

.loop-container.full {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	align-items: stretch;
	justify-content: flex-start;
	position: absolute;
	top: 0px;
	bottom: 0px;
	left: 0px;
	right: 0px;
}

.loop-container.full > .item {
	min-width: 100%;
	min-height: 100%;
	flex: 1;
}

.loop-container.horizontal {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	overflow-y: hidden;
	overflow-x: scroll;
}

.loop-container.full.horizontal > .item {
	min-width: 100%;
	flex: 1;
}
</style>