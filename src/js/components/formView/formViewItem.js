import React from 'react';
import PropTypes from 'prop-types';

class FormViewItem extends React.Component {
	handleChange() {}
	formatInputField(type) {
		let className = `form-group size-${this.props.formItem.size}`;
		if (type != 'textarea') {
			return (
				<div key={this.props.id} className={className}>
					<label>{this.props.formItem.label}</label>
					<input
						type={this.props.formItem.type}
						className="form-control"
						name={this.props.formItem.name}
						placeholder={this.props.formItem.placeholder}
						onChange={this.handleChange}
					/>
					<small className="form-text text-muted">
						{this.props.formItem.help}
					</small>
				</div>
			);
		} else {
			return (
				<div key={this.props.id} className={className}>
					<label>{this.props.formItem.label}</label>
					<textarea
						className="form-control"
						name={this.props.formItem.name}
						placeholder={this.props.formItem.placeholder}
						onChange={this.handleChange}
					/>
					<small className="form-text text-muted">
						{this.props.formItem.help}
					</small>
				</div>
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
