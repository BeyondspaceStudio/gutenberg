/**
 * Asserts that the specified popover has already been positioned.
 * Necessary because it will be positioned a bit later after it's displayed.
 *
 * @param {HTMLElement} element Popover element.
 */
function toBePositionedPopover( element ) {
	const popover = element.closest( '.components-popover' ) || element;
	const pass = popover.classList.contains( 'is-positioned' );
	return {
		pass,
		message: () => `Received element is ${ pass ? '' : 'not ' }positioned`,
	};
}

expect.extend( { toBePositionedPopover } );
