import React from 'react';
import PropTypes from 'prop-types';

class CheckItem extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);

		this.option1Ref = React.createRef();
		this.option2Ref = React.createRef();
		this.option3Ref = React.createRef();
	}
	handleChange(event) {
		let id = this.props.id;
		let name = event.target.name;
		let op1 = this.option1Ref.current.checked;
		let op2 = this.option2Ref.current.checked;
		let op3 = this.option3Ref.current.checked;
		let value = {};
		if (op1) value['option1'] = op1;
		if (op2) value['option2'] = op2;
		if (op3) value['option3'] = op3;
		this.props.saveFormData(value, name, id);
	}

	render() {
		let className = `form-group size-${this.props.formSetting.size}`;
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
	}
}
export default CheckItem;

CheckItem.propTypes = {
	formSetting: PropTypes.object,
	saveFormData: PropTypes.func,
	id: PropTypes.number
};
