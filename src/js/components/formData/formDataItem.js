import React from 'react';
import PropsType from 'prop-types';

class FormDataItem extends React.Component {
	render() {
		return (
			<textarea
				disabled
				rows="10"
				cols="40"
				value={JSON.stringify(this.props.formSetting, null, '\t')}
			/>
		);
	}
}

FormDataItem.propTypes = {
	formSetting: PropsType.object
};

export default FormDataItem;
