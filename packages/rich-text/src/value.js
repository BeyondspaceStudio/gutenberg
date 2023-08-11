/**
 * Internal dependencies
 */
import { toHTMLString } from './to-html-string';

export class RichTextValue {
	constructor( { value, ...settings } ) {
		for ( const key in value ) {
			Object.defineProperty( this, key, {
				value: value[ key ],
				enumerable: true,
			} );
		}

		for ( const key in settings ) {
			Object.defineProperty( this, key, {
				value: settings[ key ],
			} );
		}
	}

	toString() {
		if ( ! this.cache ) {
			Object.defineProperty( this, 'cache', {
				value: toHTMLString( {
					value: { ...this },
					multilineTag: this.multilineTag,
					preserveWhiteSpace: this.preserveWhiteSpace,
				} ),
			} );
		}

		return this.cache;
	}
}

Object.getOwnPropertyNames( String.prototype )
	.filter(
		( prop ) =>
			typeof String.prototype[ prop ] === 'function' &&
			prop !== 'constructor' &&
			prop !== 'toString'
	)
	.forEach( ( method ) => {
		Object.defineProperty( RichTextValue.prototype, method, {
			value() {
				return this.toString()[ method ]( ...arguments );
			},
		} );
	} );

Object.defineProperty( RichTextValue.prototype, 'length', {
	get() {
		return this.toString().length;
	},
} );

Object.defineProperty( RichTextValue.prototype, 'toJSON', {
	value() {
		return this.toString();
	},
} );
