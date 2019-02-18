import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FormView from './formView';
import FormData from './formData';
import FormCreater from './formCreater';

class App extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>
						<FormView />
					</Col>
					<Col>
						<FormData />
					</Col>
					<Col>
						<FormCreater />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default App;
