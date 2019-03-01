import React from 'react';
import PropTypes from 'prop-types';

class FormViewItem extends React.Component {
	handleChange() {}
	formatInputField(type) {
		if (type != 'textarea') {
			return (
				<label key={this.props.id} className="formViewItem">
					{this.props.formItem.label}
					<input
						type={this.props.formItem.type}
						name={this.props.formItem.name}
						placeholder={this.props.formItem.placeholder}
						onChange={this.handleChange}
					/>
				</label>
			);
		} else {
			return (
				<label key={this.props.id} className="formViewItem">
					{this.props.formItem.label}
					<textarea
						name={this.props.formItem.name}
						placeholder={this.props.formItem.placeholder}
						onChange={this.handleChange}
					/>
				</label>
			);
		}
	}
	render() {
		return this.formatInputField(this.props.formItem.type);
	}
}

FormViewItem.propTypes = {
	formItem: PropTypes.object,
	id: PropTypes.number
};

export default FormViewItem;
