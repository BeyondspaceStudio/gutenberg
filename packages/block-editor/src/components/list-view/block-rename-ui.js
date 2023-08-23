/**
 * WordPress dependencies
 */
import {
	__experimentalInputControl as InputControl,
	Popover,
	VisuallyHidden,
} from '@wordpress/components';
import { speak } from '@wordpress/a11y';
import { useInstanceId, useFocusOnMount } from '@wordpress/compose';
import { useState, forwardRef } from '@wordpress/element';
import { ENTER, ESCAPE } from '@wordpress/keycodes';
import { __, sprintf } from '@wordpress/i18n';

const ListViewBlockRenameUI = forwardRef( ( { blockTitle, onChange }, ref ) => {
	const inputRef = useFocusOnMount();
	const inputDescriptionId = useInstanceId(
		ListViewBlockRenameUI,
		`block-editor-list-view-block-node__input-description`
	);

	// Local state for value of input **pre-submission**.
	const [ inputValue, setInputValue ] = useState( blockTitle );

	const onKeyDownHandler = ( event ) => {
		// Trap events to input when editing to avoid
		// default list view key handing (e.g. arrow
		// keys for navigation).
		event.stopPropagation();

		// Handle ENTER and ESC exits editing mode.
		if ( event.keyCode === ENTER || event.keyCode === ESCAPE ) {
			if ( event.keyCode === ESCAPE ) {
				// Must be assertive to immediately announce change.
				speak( 'Leaving edit mode', 'assertive' );
			}

			if ( event.keyCode === ENTER ) {
				// Submit changes only for ENTER.
				onChange( inputValue );
				const successAnnouncement = sprintf(
					/* translators: %s: new name/label for the block */
					__( 'Block name updated to: "%s".' ),
					inputValue
				);
				// Must be assertive to immediately announce change.
				speak( successAnnouncement, 'assertive' );
			}

			// toggleLabelEditingMode( false );
		}
	};

	return (
		<Popover
			anchorRef={ ref }
			placement={ 'overlay' }
			resize={ true }
			variant={ 'unstyled' }
		>
			<form
				className="block-editor-list-view-block-node__input"
				onSubmit={ onChange }
			>
				<InputControl
					ref={ inputRef }
					value={ inputValue }
					label={ __( 'Edit block name' ) }
					hideLabelFromVision
					onChange={ ( nextValue ) => {
						setInputValue( nextValue ?? '' );
					} }
					onBlur={ () => {
						// toggleLabelEditingMode( false );

						// Reset the input's local state to avoid
						// stale values.
						setInputValue( blockTitle );
					} }
					onKeyDown={ onKeyDownHandler }
					aria-describedby={ inputDescriptionId }
					isPressEnterToChange={ true }
				/>
			</form>
			<VisuallyHidden>
				<p id={ inputDescriptionId }>
					{ __(
						'Press the ENTER key to submit or the ESCAPE key to cancel.'
					) }
				</p>
			</VisuallyHidden>
		</Popover>
	);
} );

export default ListViewBlockRenameUI;
