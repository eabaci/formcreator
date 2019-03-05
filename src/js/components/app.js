import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import sampleFormItems from '../sampleFormItems';
import FormView from './formView/formView';
import FormData from './formData/formData';
import FormCreator from './formCreator/formCreator';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			formItems: sampleFormItems
		};
	}

	changeFormItem = (formItem, index) => {
		let formItems = this.state.formItems;
		formItems[`formItem${index}`] = formItem;
		this.setState({ formItems: formItems });
	};
	addFormItem = () => {
		let formItems = this.state.formItems;
		let index = Object.keys(this.state.formItems).length;
		formItems[`formItem${index}`] = { id: index };
		this.setState({ formItems: formItems });
	};

	componentDidMount() {}

	render() {
		return (
			<Container fluid="true">
				<Row>
					<Col xs="3">
						<FormCreator
							formItems={this.state.formItems}
							addFormItem={this.addFormItem}
							changeFormItem={this.changeFormItem}
						/>
					</Col>
					<Col xs="6">
						<FormView formItems={this.state.formItems} />
					</Col>
					<Col xs="3">
						<FormData formItems={this.state.formItems} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
