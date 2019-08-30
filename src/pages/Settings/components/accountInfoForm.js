import React from "react";
import { Form, Col, Row, Figure, Button } from "react-bootstrap";

const AccountInfoForm = () => {
  return (
    <Form className="form-default">
      <div>
        <div className="d-flex mb-1">
          <span className="font-weight-bold ac-text-title">Login</span>
        </div>
      </div>
      <Row>
        <Col md={8} className="mr-1">
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  disabled
                  placeholder="email@company.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group className="p-0">
                <Form.Label>Old Password</Form.Label>
                <Form.Control type="password"></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label className="mt-new-password">
                  New Password
                </Form.Label>
                <Form.Control type="password"></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <div className="mt-2">
            <div className="d-flex mb-1">
              <span className="font-weight-bold ac-text-title">Profile</span>
            </div>
          </div>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Sam"></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Smith"></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="(123)456-7890"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>License Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="#123456789"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>State/City you are licensed in</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="San Francisco/CA"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>Years of a licensed agent</Form.Label>
                <Form.Control type="number" placeholder="20"></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>
                  Closed transactions in the past 12 months
                </Form.Label>
                <Form.Control type="number" placeholder="10"></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label className="mt-focus">Focus</Form.Label>
                <Form.Control as="select">
                  <option>Buyer</option>
                  <option>Seller</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <div className="mt-2">
            <div className="d-flex mb-1">
              <span className="font-weight-bold ac-text-title">
                More Settings
              </span>
            </div>
          </div>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Language</Form.Label>
                <Form.Control as="select">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>Russian</option>
                  <option>Qazaqh</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Time Zone</Form.Label>
                <Form.Control as="select">
                  <option>UTC 07:00 Pacific Time</option>
                  <option>UTC 08:00 Pacific Time</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
        </Col>
        <Col md={3}>
          <Row>
            <span className="font-weight-bold">Photo</span>
          </Row>
          <Row>
            <Figure className="photo-container">
              <div className="d-flex flex-column">
                <img
                  src="img/avatar_mini.png"
                  width="140px"
                  height="140px"
                  alt="avatar"
                />
                <Button variant="link" className="text-dark">
                  Change a Photo
                </Button>
              </div>
            </Figure>
          </Row>
          <div className="ac-m-1">
            <Row>
              <Button type="submit" className="button-default">
                <span className="font-weight-bold ac-text-small">
                  Save Changes
                </span>
              </Button>
            </Row>
            <Row>
              <Button
                type="reset"
                className="button-default"
                variant="outline-secondary"
              >
                <span className="font-weight-bold ac-text-small">
                  Reset Value
                </span>
              </Button>
            </Row>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
export default AccountInfoForm;
