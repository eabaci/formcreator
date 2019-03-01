import React from 'react';
import PropsType from 'prop-types';

class FormDataItem extends React.Component {
	render() {
		return (
			<textarea
				disabled
				rows="10"
				cols="40"
				value={JSON.stringify(this.props.formItem, null, '\t')}
			/>
		);
	}
}

FormDataItem.propTypes = {
	formItem: PropsType.object
};

export default FormDataItem;
