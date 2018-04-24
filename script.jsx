
const registerBlockType = wp.blocks.registerBlockType,
	{ __ } = wp.i18n,
	{ TextControl, CheckboxControl } = wp.components;

registerBlockType( 'sensei/lesson-info', {
	title: 'Lesson Info',
	icon: 'list-view',
	category: 'common',
	useOnce: true,

	attributes: {
		length: {
			type: 'number',
			source: 'meta',
			meta: '_lesson_length',
		},
		complexity: {
			type: 'string',
			source: 'meta',
			meta: '_lesson_complexity',
		},
		display: {
			type: 'boolean',
			default: false,
		},
	},

	edit: function( { attributes, setAttributes, className } ) {
		return (
			<div className={ className }>
				<CheckboxControl
					label={ __( 'Display on the frontend?' ) }
					checked={ attributes.display }
					onChange={ ( display ) => setAttributes( { display } ) }
				/>
				<TextControl
					type="number"
					label={ __( 'Lesson Length in minutes' ) }
					value={ attributes.length }
					onChange={ ( length ) => setAttributes( { length } ) }
				/>
			</div>
		);
	},

	save: function( { attributes } ) {
		if ( attributes.display ) {
			return (
				<div>
					<em>Lesson Length: { attributes.length } minutes</em>
				</div>
			);
		} else {
			return null;
		}
	},

} );
