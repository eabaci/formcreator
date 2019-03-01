import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import sampleFormItems from '../sampleFormItems';
import FormView from './formView/formView';
import FormData from './formData/formData';
import FormCreator from './formCreator/formCreator';

class App extends React.Component {
	state = {
		formItems: sampleFormItems
	};

	changeFormItem = (formItem, index) => {
		let formItems = this.state.formItems;
		formItems[`formItem${index}`] = formItem;
		this.setState({ formItems: formItems });
	};
	addFormItem = () => {
		console.log('addFormItem ----------------');
		let formItems = this.state.formItems;
		let index = Object.keys(this.state.formItems).length;
		formItems[`formItem${index}`] = { id: index };
		this.setState({ formItems: formItems });
	};

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<FormCreator
							formItems={this.state.formItems}
							addFormItem={this.addFormItem}
							changeFormItem={this.changeFormItem}
						/>
					</Col>
					<Col>
						<FormView formItems={this.state.formItems} />
					</Col>
					<Col>
						<FormData formItems={this.state.formItems} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
