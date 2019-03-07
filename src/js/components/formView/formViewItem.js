import React from 'react';
import PropTypes from 'prop-types';

import CheckItem from './checkItem';
import TextareaItem from './textareaItem';
import SelectItem from './selectItem';
import InputItem from './inputItem';

class FormViewItem extends React.Component {
	formatInputField(type) {
		if (type == 'radio' || type == 'checkbox') {
			return (
				<CheckItem
					id={this.props.id}
					formSetting={this.props.formSetting}
					saveFormData={this.props.saveFormData}
				/>
			);
		} else if (type == 'select') {
			return (
				<SelectItem
					id={this.props.id}
					formSetting={this.props.formSetting}
					saveFormData={this.props.saveFormData}
				/>
			);
		} else if (type == 'textarea') {
			return (
				<TextareaItem
					id={this.props.id}
					formSetting={this.props.formSetting}
					saveFormData={this.props.saveFormData}
				/>
			);
		} else {
			return (
				<InputItem
					id={this.props.id}
					formSetting={this.props.formSetting}
					saveFormData={this.props.saveFormData}
				/>
			);
		}
	}
	render() {
		return this.formatInputField(this.props.formSetting.type);
	}
}

FormViewItem.propTypes = {
	formSetting: PropTypes.object,
	saveFormData: PropTypes.func,
	id: PropTypes.number
};

export default FormViewItem;
