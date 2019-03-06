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
			counter: Object.keys(sampleFormSettings).length || 0
		};
	}

	changeFormItem = (formItem, index) => {
		let formSettings = this.state.formSettings;
		formSettings[`formItem${index}`] = formItem;
		this.setState({ formSettings: formSettings });
	};
	addFormItem = () => {
		let formSettings = this.state.formSettings;
		let index = this.state.counter;
		formSettings[`formItem${index}`] = { id: index };
		index++;
		this.setState({ formSettings: formSettings, counter: index });
	};
	deleteFormItem = index => {
		let formSettings = this.state.formSettings;
		delete formSettings[`formItem${index}`];
		this.setState({ formSettings: formSettings });
	};
	componentDidMount() {}

	render() {
		return (
			<Container fluid="true">
				<Row>
					<Col xs="3">
						<FormCreator
							formSettings={this.state.formSettings}
							addFormItem={this.addFormItem}
							changeFormItem={this.changeFormItem}
							deleteFormItem={this.deleteFormItem}
						/>
					</Col>
					<Col xs="6">
						<FormView formSettings={this.state.formSettings} />
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
