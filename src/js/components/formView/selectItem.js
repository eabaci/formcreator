import React from 'react';
import PropTypes from 'prop-types';

class SelectItem extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		let id = this.props.id;
		let name = this.props.formSetting.name;
		let value = {};
		value[event.target.value] = true;
		this.props.saveFormData(value, name, id);
	}

	render() {
		let className = `form-group size-${this.props.formSetting.size}`;
		return (
			<div key={this.props.id} className={className}>
				<label className="form-check-inline-label">
					{this.props.formSetting.label}
				</label>
				<select
					className="custom-select"
					value={this.props.formSetting.value}
					onChange={this.handleChange}
				>
					<option value="option1">
						{this.props.formSetting.option1}
					</option>
					<option value="option2">
						{this.props.formSetting.option2}
					</option>
					<option value="option3">
						{this.props.formSetting.option3}
					</option>
				</select>
			</div>
		);
	}
}
export default SelectItem;

SelectItem.propTypes = {
	formSetting: PropTypes.object,
	saveFormData: PropTypes.func,
	id: PropTypes.number
};
