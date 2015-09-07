define([
	"./template.html",
	"./style.css"
],function(tpl) {
	Synthetic.createComponent('synthetic-demo', function($component) {
		$component.template(tpl);
	});
});