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
		console.log('formDatas: ');
		console.log(this.props.formDatas);
	}
	render() {
		return (
			<form className="formView" onSubmit={this.handleSubmit}>
				{Object.keys(this.props.formSettings).map(formSetting => (
					<FormViewItem
						key={this.props.formSettings[formSetting].id}
						id={this.props.formSettings[formSetting].id}
						formSetting={this.props.formSettings[formSetting]}
						saveFormData={this.props.saveFormData}
					/>
				))}
				<div className="buttonContainer">
					<button type="submit" className="btn btn-outline-primary">
						Submit
					</button>
				</div>
			</form>
		);
	}
}

FormView.propTypes = {
	formSettings: PropTypes.object,
	formDatas: PropTypes.object,
	saveFormData: PropTypes.func
};

export default FormView;
