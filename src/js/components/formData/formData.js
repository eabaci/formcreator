import React from 'react';
import PropTypes from 'prop-types';
import FormDataItem from './formDataItem';

class FormData extends React.Component {
	render() {
		return (
			<React.Fragment>
				{Object.keys(this.props.formSettings).map(formItem => (
					<FormDataItem
						key={this.props.formSettings[formItem].id}
						id={this.props.formSettings[formItem].id}
						formItem={this.props.formSettings[formItem]}
					/>
				))}
			</React.Fragment>
		);
	}
}

FormData.propTypes = {
	formSettings: PropTypes.object
};

export default FormData;
