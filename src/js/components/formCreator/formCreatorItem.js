import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class formSetting extends React.Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.delete = this.delete.bind(this);

		this.placeholderRef = React.createRef();
		this.helpRef = React.createRef();
		this.option1Ref = React.createRef();
		this.option2Ref = React.createRef();
		this.option3Ref = React.createRef();
	}

	componentDidMount() {
		this.formSetting = this.props.formSetting || {};
		this.formSetting['id'] = this.props.id;

		this.handleTypeChange(this.formSetting.type);
	}

	handleChange(event) {
		let name = event.target.name;
		let value = event.target.value;
		this.formSetting[name] = value;

		this.props.changeFormSetting(this.formSetting, this.props.id);
		if (name == 'type') this.handleTypeChange(value);
	}

	handleTypeChange(type) {
		const node1 = this.option1Ref.current;
		const node2 = this.option2Ref.current;
		const node3 = this.option3Ref.current;
		const node4 = this.placeholderRef.current;
		const node5 = this.helpRef.current;
		if (type === 'radio' || type === 'checkbox' || type === 'select') {
			$(node1).removeClass('invisible');
			$(node2).removeClass('invisible');
			$(node3).removeClass('invisible');
			$(node4).addClass('invisible');
			$(node5).addClass('invisible');
		} else {
			$(node1).addClass('invisible');
			$(node2).addClass('invisible');
			$(node3).addClass('invisible');
			$(node4).removeClass('invisible');
			$(node5).removeClass('invisible');
		}
	}

	handleSubmit(event) {
		event.preventDefault();
	}

	delete() {
		this.props.deleteFormSetting(this.props.id);
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
							value={this.props.formSetting.label}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row" ref={this.placeholderRef}>
					<label className="col-sm-4 col-form-label">
						Placeholder:
					</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="placeholder"
							value={this.props.formSetting.placeholder}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row" ref={this.helpRef}>
					<label className="col-sm-4 col-form-label">Help:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="help"
							value={this.props.formSetting.help}
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
							value={this.props.formSetting.type}
							onChange={this.handleChange}
						>
							<option value="radio">Radio</option>
							<option value="checkbox">Checkbox</option>
							<option value="text">Input</option>
							<option value="textarea">Textarea</option>
							<option value="select">Select</option>
						</select>
					</div>
				</div>
				<div className="form-group row invisible" ref={this.option1Ref}>
					<label className="col-sm-4 col-form-label">Option 1:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="option1"
							value={this.props.formSetting.option1}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row invisible" ref={this.option2Ref}>
					<label className="col-sm-4 col-form-label">Option 2:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="option2"
							value={this.props.formSetting.option2}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row invisible" ref={this.option3Ref}>
					<label className="col-sm-4 col-form-label">Option 3:</label>
					<div className="col-sm-8">
						<input
							type="text"
							className="form-control"
							name="option3"
							value={this.props.formSetting.option3}
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="form-group row">
					<label className="col-sm-4 col-form-label">Size:</label>
					<div className="col-sm-8">
						<select
							name="size"
							className="form-control"
							value={this.props.formSetting.size}
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

formSetting.propTypes = {
	addFormSetting: PropTypes.func,
	changeFormSetting: PropTypes.func,
	deleteFormSetting: PropTypes.func,
	formSetting: PropTypes.object,
	id: PropTypes.number
};

export default formSetting;
