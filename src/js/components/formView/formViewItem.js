import React from 'react';
import PropTypes from 'prop-types';

class FormViewItem extends React.Component {
	handleChange() {}
	formatInputField(type) {
		let className = `form-group size-${this.props.formSetting.size}`;
		if (type != 'textarea') {
			return (
				<div key={this.props.id} className={className}>
					<label>{this.props.formSetting.label}</label>
					<input
						type={this.props.formSetting.type}
						className="form-control"
						name={this.props.formSetting.name}
						placeholder={this.props.formSetting.placeholder}
						onChange={this.handleChange}
					/>
					<small className="form-text text-muted">
						{this.props.formSetting.help}
					</small>
				</div>
			);
		} else {
			return (
				<div key={this.props.id} className={className}>
					<label>{this.props.formSetting.label}</label>
					<textarea
						className="form-control"
						name={this.props.formSetting.name}
						placeholder={this.props.formSetting.placeholder}
						onChange={this.handleChange}
					/>
					<small className="form-text text-muted">
						{this.props.formSetting.help}
					</small>
				</div>
			);
		}
	}
	render() {
		return this.formatInputField(this.props.formSetting.type);
	}
}

FormViewItem.propTypes = {
	formSetting: PropTypes.object,
	id: PropTypes.number
};

export default FormViewItem;
