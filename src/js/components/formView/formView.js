import React from 'react';
import PropTypes from 'prop-types';

import FormViewItem from './formViewItem';

class FormView extends React.Component {
	render() {
		return (
			<div className="formView">
				{Object.keys(this.props.formItems).map(formItem => (
					<FormViewItem
						key={this.props.formItems[formItem].id}
						id={this.props.formItems[formItem].id}
						formItem={this.props.formItems[formItem]}
					/>
				))}
			</div>
		);
	}
}

FormView.propTypes = {
	formItems: PropTypes.object
};

export default FormView;
