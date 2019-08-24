import React from 'react';
import { Tab, Row, Col, Nav } from 'react-bootstrap';

import AccountInfoForm from './accountInfoForm';
import TermsOfUseForm from './termsOfUseForm';
import PaymentForm from './paymentForm';
import PrivacyPolicyForm from './privacyPolicyForm';

const TabPanel = () => {
	return (
		<Tab.Container id="left-tabs-example" defaultActiveKey="accountInfo">
			<Row>
				<Col sm={2}>
					<Nav variant="pills" className="flex-column">
						<Nav.Item>
							<Nav.Link eventKey="accountInfo">Account Info</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="payment">Payment</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="termsOfUse">Terms Of Use</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey="privacyPolicy">Privacy Policy</Nav.Link>
						</Nav.Item>
					</Nav>
				</Col>
				<Col sm={10}>
					<Tab.Content>
						<Tab.Pane eventKey="accountInfo">
							<AccountInfoForm />
						</Tab.Pane>
						<Tab.Pane eventKey="payment">
							<PaymentForm />
						</Tab.Pane>
						<Tab.Pane eventKey="termsOfUse">
							<TermsOfUseForm />
						</Tab.Pane>
						<Tab.Pane eventKey="privacyPolicy">
							<PrivacyPolicyForm />
						</Tab.Pane>
					</Tab.Content>
				</Col>
			</Row>
		</Tab.Container>
	)
}

export default TabPanel;
