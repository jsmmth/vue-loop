<template>
	<div class="loop-container" :class="{'full': full, 'horizontal': horizontal}" @scroll="scrollHandler">
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
			viewportWidth: 0,
			dublicates: false
		}
	},

	mounted() {
		this.getDimensions()	

		window.addEventListener('resize', () => {
			this.getDimensions()
		}, true);
	},

	methods: {

		/**
		 * Scroll handler
		 * 
		 * @param  {object} e Event
		 */
		scrollHandler(e) {
			const container = this.$el

			if(!this.horizontal) {
				var y = container.scrollTop
				if (y + this.viewportHeight > this.pageHeight) {
					container.scrollTop = y % this.pageHeight
				}else if(y + this.viewportHeight == this.pageHeight) {
					container.scrollTop = 0
				}
			}else{
				var x = container.scrollLeft
				if (x + this.viewportWidth >= this.pageWidth) {
					container.scrollLeft = x % this.pageWdith
				}
			}
		},

		/**
		 * Get dimentions of the page and viewport
		 * 
		 * @return {integer} divisions
		 */
		getDimensions() {
			const container = this.$el
			const numOfItems = container.childElementCount
			var itemWidth = container.childNodes[0].clientWidth
			var itemHeight = container.childNodes[0].clientHeight

			if(this.dublicates === false) {
				this.dublicates = this.makeDublicates() - 1;
			}

			this.pageHeight = itemHeight * numOfItems
			this.pageWidth = itemWidth * (numOfItems + this.dublicates)
			this.viewportHeight = container.clientHeight
			this.viewportWidth = container.clientHeight
		},

		/**
		 * Make dublicates so the scroll is smooth
		 */
		makeDublicates() {
			const container = this.$el

			if(this.horizontal) {
				var containerSize = container.clientWidth
				var itemSize = container.childNodes[0].clientWidth
			}

			if(!this.horizontal) {
				var containerSize = container.clientHeight
				var itemSize = container.childNodes[0].clientHeight
			}
			var division = containerSize / itemSize;

			for(var i = 0; i < division + 1; i++) {
				container.appendChild(container.childNodes[i].cloneNode(true));
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
	backface-visibility: hidden;
    transform: translate3d(0,0,0);
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
