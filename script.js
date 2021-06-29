(function($) {

if (typeof MULTI_CONTROL_STATUS !== 'undefined')
	return;
MULTI_CONTROL_STATUS = true;

$(document).ready(function() {
	$('head').append('<style>.multi-control-new{display: none;}</style>');
});

$(document).on('click', '.multi-control-add', function() {
	const button = $(this);
	const home = button.parents('.multi-control-home').first();
	const list = home.find('.multi-control-list').first();
	const template = home.children('.multi-control-new');
	const item = template.find('.multi-control-item').first().clone();
	item.appendTo(list);
	item.find('.multi-control-focus').first().focus();
});

$(document).on('click', '.multi-control-up', function() {
	const button = $(this);
	const item = button.parents('.multi-control-item').first();
	const target = item.prev();
	if (target.length === 0)
		return;
	item.detach().insertBefore(target);
});

$(document).on('click', '.multi-control-down', function() {
	const button = $(this);
	const item = button.parents('.multi-control-item').first();
	const target = item.next();
	if (target.length === 0)
		return;
	item.detach().insertAfter(target);
});

$(document).on('click', '.multi-control-delete', function() {
	const button = $(this);
	const item = button.parents('.multi-control-item').first();
	item.remove();
});

})(jQuery);
