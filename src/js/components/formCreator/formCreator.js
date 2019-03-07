import React from 'react';
import PropTypes from 'prop-types';

import FormCreatorItem from './formCreatorItem';

class FormCreater extends React.Component {
	constructor() {
		super();

		this.add = this.add.bind(this);
		this.inputRef = React.createRef();
	}

	add() {
		let name = this.inputRef.current.value;
		this.props.addFormSetting(name);
	}

	render() {
		return (
			<React.Fragment>
				{Object.keys(this.props.formSettings).map(formSetting => (
					<FormCreatorItem
						key={this.props.formSettings[formSetting].id}
						id={this.props.formSettings[formSetting].id}
						formSetting={this.props.formSettings[formSetting]}
						changeFormSetting={this.props.changeFormSetting}
						deleteFormSetting={this.props.deleteFormSetting}
					/>
				))}
				<div className="formCreatorItem">
					<div className="form-group row">
						<label className="col-sm-4 col-form-label">Name:</label>
						<div className="col-sm-8">
							<input
								type="text"
								className="form-control"
								name="name"
								ref={this.inputRef}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<button
						className="btn btn-outline-success"
						onClick={this.add}
					>
						Add Form Item
					</button>
				</div>
			</React.Fragment>
		);
	}
}

FormCreater.propTypes = {
	addFormSetting: PropTypes.func,
	changeFormSetting: PropTypes.func,
	deleteFormSetting: PropTypes.func,
	formSettings: PropTypes.object
};

export default FormCreater;
