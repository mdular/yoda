/**
* yoda - realtime prototyping microframework
* >> may the force be with you!
*/

/**
* example design:
* server.js -> includes yoda
*			-> adds modules to yoda
* 			-> runs its custom application code
*/

var Yoda = function () {
	"use strict";

	var modules;

	var registerModule = function (moduleName, moduleObject) {

		modules[moduleName] = moduleObject.call(moduleObject);
	};

	var getModule	= function (moduleName) {

	};

	// init: initialize plugins, dependencies, early interactivity (client)
	var init = function () {
		console.log('init');


		if (window) {
			window.onload = run;
		} else {
			run();
		}
	};

	// run app
	var run = function () {
		console.log('run');
	};


	return {
		init 			: init,
		registerModule	: registerModule,
		getModule		: getModule
	};
};

module.exports.Yoda = Yoda;