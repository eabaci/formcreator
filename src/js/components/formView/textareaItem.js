import React from 'react';
import PropTypes from 'prop-types';

class TextAreaItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.props.saveFormData(
			event.target.value,
			event.target.name,
			this.props.id
		);
	}

	render() {
		let className = `form-group size-${this.props.formSetting.size}`;
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

TextAreaItem.propTypes = {
	formSetting: PropTypes.object,
	saveFormData: PropTypes.func,
	id: PropTypes.number
};

export default TextAreaItem;
