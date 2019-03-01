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
				{Object.keys(this.props.formItems).map(formItem => (
					<FormCreatorItem
						key={this.props.formItems[formItem].id}
						id={this.props.formItems[formItem].id}
						formItem={this.props.formItems[formItem]}
						changeFormItem={this.props.changeFormItem}
					/>
				))}
				<button onClick={this.add}>Add Form Item</button>
			</React.Fragment>
		);
	}
}

FormCreater.propTypes = {
	addFormItem: PropTypes.func,
	changeFormItem: PropTypes.func,
	formItems: PropTypes.object
};

export default FormCreater;
