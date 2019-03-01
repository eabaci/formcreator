import React from 'react';
import PropTypes from 'prop-types';
import FormDataItem from './formDataItem';

class FormData extends React.Component {
	render() {
		return (
			<React.Fragment>
				{Object.keys(this.props.formItems).map(formItem => (
					<FormDataItem
						key={this.props.formItems[formItem].id}
						id={this.props.formItems[formItem].id}
						formItem={this.props.formItems[formItem]}
					/>
				))}
			</React.Fragment>
		);
	}
}

FormData.propTypes = {
	formItems: PropTypes.object
};

export default FormData;
