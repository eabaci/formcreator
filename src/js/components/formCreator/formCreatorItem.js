import React from 'react';
import PropTypes from 'prop-types';

class FormItem extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.delete = this.delete.bind(this);
	}

	componentDidMount() {
		this.formItem = this.props.formItem || {};
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
	delete() {
		this.props.deleteFormItem(this.props.id);
	}
	render() {
		return (
			<form
				key={this.props.id}
				className="formCreatorItem"
				onSubmit={this.handleSubmit}
			>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Label:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="label"
							value={this.props.formItem.label}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">
						Placeholder:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="placeholder"
							value={this.props.formItem.placeholder}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Help:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="help"
							value={this.props.formItem.help}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Name:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="name"
							value={this.props.formItem.name}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Type:</label>
					<div className="col-sm-8">
						<select
							name="type"
							className="form-control"
							value={this.props.formItem.type}
							onChange={this.handleChange}
						>
							<option value="radio">Radio</option>
							<option value="checkbox">Checkbox</option>
							<option value="text">Input</option>
							<option value="textarea">Textarea</option>
						</select>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Size:</label>
					<div className="col-sm-8">
						<select
							name="size"
							className="form-control"
							value={this.props.formItem.size}
							onChange={this.handleChange}
						>
							<option value="tiny">Tiny</option>
							<option value="small">Small</option>
							<option value="medium">Medium</option>
							<option value="large">Large</option>
						</select>
					</div>
				</div>
				<button
					className="btn btn-outline-warning"
					onClick={this.delete}
				>
					Delete Form Item
				</button>
			</form>
		);
	}
}

FormItem.propTypes = {
	addFormItem: PropTypes.func,
	changeFormItem: PropTypes.func,
	deleteFormItem: PropTypes.func,
	formItem: PropTypes.object,
	id: PropTypes.number
};

export default FormItem;
