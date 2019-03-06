import React from 'react';
import PropTypes from 'prop-types';

import FormCreatorItem from './formCreatorItem';

class FormCreater extends React.Component {
	constructor() {
		super();

		this.add = this.add.bind(this);
	}
	add() {
		this.props.addFormItem();
	}
	render() {
		return (
			<React.Fragment>
				{Object.keys(this.props.formSettings).map(formItem => (
					<FormCreatorItem
						key={this.props.formSettings[formItem].id}
						id={this.props.formSettings[formItem].id}
						formItem={this.props.formSettings[formItem]}
						changeFormItem={this.props.changeFormItem}
						deleteFormItem={this.props.deleteFormItem}
					/>
				))}
				<button className="btn btn-outline-success" onClick={this.add}>
					Add Form Item
				</button>
			</React.Fragment>
		);
	}
}

FormCreater.propTypes = {
	addFormItem: PropTypes.func,
	changeFormItem: PropTypes.func,
	deleteFormItem: PropTypes.func,
	formSettings: PropTypes.object
};

export default FormCreater;
