import React from 'react';
import PropTypes from 'prop-types';

class FormViewItem extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);

		this.option1Ref = React.createRef();
		this.option2Ref = React.createRef();
		this.option3Ref = React.createRef();
	}
	handleChange(event) {
		let id = this.props.id;
		let value = event.target.value;
		let name = event.target.name;
		let type = event.target.type;
		let obj = {};
		if (type == 'radio' || type == 'checkbox') {
			if (this.option1Ref.current.checked)
				obj['option1'] = this.option1Ref.current.checked;
			if (this.option2Ref.current.checked)
				obj['option2'] = this.option2Ref.current.checked;
			if (this.option3Ref.current.checked)
				obj['option3'] = this.option3Ref.current.checked;
			this.props.saveFormData(obj, name, id);
		} else this.props.saveFormData(value, name, id);
	}

	formatInputField(type) {
		let className = `form-group size-${this.props.formSetting.size}`;
		if (type == 'radio' || type == 'checkbox') {
			return (
				<div key={this.props.id} className={className}>
					<label className="form-check-inline-label">
						{this.props.formSetting.label}
					</label>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type={this.props.formSetting.type}
							name={this.props.formSetting.name}
							ref={this.option1Ref}
							onChange={this.handleChange}
						/>
						<label className="form-check-label">
							{this.props.formSetting.option1}
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type={this.props.formSetting.type}
							name={this.props.formSetting.name}
							ref={this.option2Ref}
							onChange={this.handleChange}
						/>
						<label className="form-check-label">
							{this.props.formSetting.option2}
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type={this.props.formSetting.type}
							name={this.props.formSetting.name}
							ref={this.option3Ref}
							onChange={this.handleChange}
						/>
						<label className="form-check-label">
							{this.props.formSetting.option3}
						</label>
					</div>
				</div>
			);
		} else if (type != 'textarea') {
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
	saveFormData: PropTypes.func,
	id: PropTypes.number
};

export default FormViewItem;
