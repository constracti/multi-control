(function($) {

if (typeof MULTI_CONTROL_STATUS !== 'undefined')
	return;
MULTI_CONTROL_STATUS = true;

function ancestor(jqobj, selector) {
	return jqobj.parents(selector).first();
}

function descendant(jqobj, selector) {
	return jqobj.find(selector).first();
}

function get_home(jqobj) {
	return ancestor(jqobj, '.multi-control-home');
}

function get_list(jqobj) {
	return descendant(jqobj, '.multi-control-list');
}

function get_new(jqobj) {
	const template = jqobj.children('.multi-control-new');
	return descendant(template, '.multi-control-item').clone();
}

function get_item(jqobj) {
	return ancestor(jqobj, '.multi-control-item');
}

$(document).ready(function() {
	$('head').append('<style>.multi-control-new{display: none;}</style>');
});

$(document).on('click', '.multi-control-add', function() {
	const button = $(this);
	const home = get_home(button);
	const item = get_new(home);
	const list = get_list(home);
	item.appendTo(list);
});

$(document).on('click', '.multi-control-up', function() {
	const button = $(this);
	const item = get_item(button);
	const target = item.prev();
	if (target.length === 0)
		return;
	item.detach().insertBefore(target);
});

$(document).on('click', '.multi-control-down', function() {
	const button = $(this);
	const item = get_item(button);
	const target = item.next();
	if (target.length === 0)
		return;
	item.detach().insertAfter(target);
});

$(document).on('click', '.multi-control-delete', function() {
	const button = $(this);
	const item = get_item(button);
	item.remove();
});

})(jQuery);
