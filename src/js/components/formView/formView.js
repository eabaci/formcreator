import React from 'react';
import PropTypes from 'prop-types';

import FormViewItem from './formViewItem';

class FormView extends React.Component {
	constructor() {
		super();

		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log('handleSubmit');
		console.log(this.props.formSettings);
	}
	render() {
		return (
			<form className="formView" onSubmit={this.handleSubmit}>
				{Object.keys(this.props.formSettings).map(formSetting => (
					<FormViewItem
						key={this.props.formSettings[formSetting].id}
						id={this.props.formSettings[formSetting].id}
						formSetting={this.props.formSettings[formSetting]}
					/>
				))}
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		);
	}
}

FormView.propTypes = {
	formSettings: PropTypes.object
};

export default FormView;
