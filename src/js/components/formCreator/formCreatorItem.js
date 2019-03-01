import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.formItem = {};
		this.formItem['id'] = this.props.id;
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.formItem[name] = value;

		this.props.changeFormItem(this.formItem, this.props.id);
	}
	handleSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<form key={this.props.id} onSubmit={this.handleSubmit}>
				<label>
					Label:
					<input
						type="text"
						name="label"
						value={this.props.formItem.label}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Placeholder:
					<input
						type="text"
						name="placeholder"
						value={this.props.formItem.placeholder}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={this.props.formItem.name}
						onChange={this.handleChange}
					/>
				</label>
				<label>
					Type:
					<select
						name="type"
						value={this.props.formItem.type}
						onChange={this.handleChange}
					>
						<option value="radio">Radio</option>
						<option value="checkbox">Checkbox</option>
						<option value="text">Input</option>
						<option value="textarea">Textarea</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

FormItem.propTypes = {
	addFormItem: PropTypes.func,
	changeFormItem: PropTypes.func,
	formItem: PropTypes.object,
	id: PropTypes.number
};

export default FormItem;
