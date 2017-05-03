<template>
	<div class="loop-container" :class="{'full': full, 'horizontal': horizontal}">
		<slot></slot>
	</div>
</template>

<script>
export default {

	/**
	 * Define props
	 */
	
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

	/**
	 * Initialize default data
	 * 
	 * @return {object}
	 */
	
	data() {
		return {
			pageHeight: 0,
			viewportHeight: 0,
			pageWidth: 0,
			viewportWidth: 0,
			duplicates: false,
			isTouch: false
		}
	},

	/**
	 * When the component is mounted
	 */
	
	mounted() {
		const vm = this;

		//When the window has loaded we're going to work out the dimentions
		window.addEventListener('load', () => {
			vm.getDimensions()	
		})
		
		//When the window is resized we want to re-calculate the dimentions
		window.addEventListener('resize', () => {
			vm.getDimensions()
		}, true);

		//When the element is scrolled
		vm.$el.addEventListener('scroll', (event) => {
			vm.scrollHandler();
		}, true);
	},

	methods: {

		/**
		 * Scroll handler
		 */
		
		scrollHandler() {
			const container = this.$el

			if(!this.horizontal) {
				var y = container.scrollTop
				if (y + this.viewportHeight > this.pageHeight) {
					container.scrollTop = y % this.pageHeight
				}
			}else{
				var x = container.scrollLeft
				if (x >= this.pageWidth) {
					container.scrollLeft = x % this.pageWdith
				}
			}
		},


		/**
		 * Get dimentions of the page and viewport
		 */
		
		getDimensions() {
			const vm = this;
			const container = vm.$el

			if(vm.duplicates === false) {
				vm.duplicates = vm.makeDuplicates();
			}

			const numOfItems = container.querySelectorAll('.item').length - vm.duplicates;

			for(var i = 0; i < numOfItems; i++) {
				const itemWidth = container.querySelectorAll('.item')[i].clientWidth
				const itemHeight = container.querySelectorAll('.item')[i].clientHeight
				vm.pageHeight = vm.pageHeight + itemHeight
				vm.pageWidth = vm.pageWidth + itemWidth
			}
			
			vm.viewportHeight = container.clientHeight
			vm.viewportWidth = container.clientHeight
		},


		/**
		 * Make duplicates so the scroll is smooth
		 */
		
		makeDuplicates() {
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
