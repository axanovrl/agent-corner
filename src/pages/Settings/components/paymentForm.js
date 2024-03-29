import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";

import Select from "../../../components/Select";
import { CreditCard } from "./const";
const paymentForm = () => {
  return (
    <Form className="form-default">
      <div>
        <div className="d-flex mb-1">
          <span className="font-weight-bold ac-text-title">
            Billing Address
          </span>
        </div>
      </div>
      <Row>
        <Col md={8} className="mr-1">
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
                <Form.Label>Address 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address..."
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address..."
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="San Francisco"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Form.Label>State/ZipCode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="CA/123456"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <div className="mt-2">
            <div className="d-flex mb-1">
              <span className="font-weight-bold ac-text-title">
                Credit Card Info
              </span>
            </div>
          </div>
          <Form.Row>
            <Col className="mr-1">
              <Form.Group className="p-0">
                <Select options={CreditCard} label="Payment Default" />
                <span className="text-muted">
                  While the campaign is active, Agent&apos;s Corner will auto
                  charge your account on file to keep the campaign funded. If
                  you wish to not be charged, make sure to turn off the
                  campaign.
                </span>
              </Form.Group>
            </Col>
            <Col className="ml-2"></Col>
          </Form.Row>
        </Col>
        <Col md={3}>
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
        </Col>
      </Row>
    </Form>
  );
};

export default paymentForm;
