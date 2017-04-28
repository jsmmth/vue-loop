/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue.
 */
require('./bootstrap');

import VueLoop from 'vue-loop';

new Vue({
	el: '#app',

	//Import the loop container
	components: {
		VueLoop
	}
});