import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import sampleFormSettings from '../sampleFormSettings';
import FormView from './formView/formView';
import FormData from './formData/formData';
import FormCreator from './formCreator/formCreator';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			formSettings: sampleFormSettings || {},
			counter: Object.keys(sampleFormSettings).length || 0,
			formDatas: {}
		};

		this.saveFormData = this.saveFormData.bind(this);
	}

	changeFormSetting = (formSetting, index) => {
		let formSettings = this.state.formSettings;
		formSettings[`formSetting${index}`] = formSetting;
		this.setState({ formSettings: formSettings });
	};
	addFormSetting = name => {
		let formSettings = this.state.formSettings;
		let index = this.state.counter;
		formSettings[`formSetting${index}`] = {
			id: index,
			label: '',
			placeholder: '',
			help: '',
			size: 'large',
			type: 'text',
			name: name
		};
		index++;
		this.setState({ formSettings: formSettings, counter: index });
	};
	deleteFormSetting = index => {
		let formSettings = this.state.formSettings;
		delete formSettings[`formSetting${index}`];
		this.setState({ formSettings: formSettings });
	};
	saveFormData(value, name) {
		let formDatas = this.state.formDatas;
		formDatas[`${name}`] = value;
		this.setState({ formDatas: formDatas });
	}
	componentDidMount() {}

	render() {
		return (
			<Container fluid="true">
				<Row>
					<Col xs="3">
						<FormCreator
							formSettings={this.state.formSettings}
							addFormSetting={this.addFormSetting}
							changeFormSetting={this.changeFormSetting}
							deleteFormSetting={this.deleteFormSetting}
						/>
					</Col>
					<Col xs="6">
						<h1 className="headline">Formular Creator</h1>
						<FormView
							formSettings={this.state.formSettings}
							formDatas={this.state.formDatas}
							saveFormData={this.saveFormData}
						/>
					</Col>
					<Col xs="3">
						<FormData formSettings={this.state.formSettings} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
