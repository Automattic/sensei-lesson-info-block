
const el = wp.element.createElement,
	registerBlockType = wp.blocks.registerBlockType,
	{ __ } = wp.i18n,
	{ TextControl } = wp.components;

registerBlockType( 'sensei/lesson-info', {
	title: 'Lesson Info',
	icon: 'list-view',
	category: 'common',

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
	},

	edit: function( props ) {
		var className = props.className;
		var title = props.attributes.title;
		var rating = props.attributes.rating;

		function updateAttr( attribute ) {
			return function( event ) {
				attrs = {};
				attrs[ attribute ] = event.target.value;

				props.setAttributes( attrs );
			};
		}

		return (
			<div>
				<TextControl
					type="number"
					label={ __( 'Lesson Length' ) }
					value={ props.attributes.length }
					onChange={ updateAttr( 'length' ) }
				/>
			</div>
		);
	},

	save: function() {
		return null;
	},

} );
