import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const CampaignsForm = () => {
  return (

    <Form id="campaigns-form" className="form-default">
      <Form.Group className="p-0">
        <Form.Label>Location</Form.Label>
        <Form.Control type="number" placeholder="Enter a city or ZIP Code" />
      </Form.Group>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Property Type</Form.Label>
            <Form.Control as="select">
              <option>Any Types</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Objective</Form.Label>
            <Form.Control as="select">
              <option>Buyers</option>
              <option>Sellers</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Min Property Price</Form.Label>
            <Form.Control as="select">
              <option>$0</option>
              <option>$50,000</option>
              <option>$100,000</option>
              <option>$150,000</option>
              <option>$200,000</option>
              <option>$250,000</option>
              <option>$300,000</option>
              <option>$350,000</option>
              <option>$400,000</option>
              <option>$500,000</option>
            </Form.Control>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Property Price</Form.Label>
            <Form.Control as="select">
              <option>$0</option>
              <option>$50,000</option>
              <option>$100,000</option>
              <option>$150,000</option>
              <option>$200,000</option>
              <option>$250,000</option>
              <option>$300,000</option>
              <option>$350,000</option>
              <option>$400,000</option>
              <option>$500,000</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Form.Group>
            <Form.Label>Bid Amount</Form.Label>
            <Form.Control type="number" placeholder="0"></Form.Control>
            <Form.Text className="text-muted">
              *Minimum amount: $10.00
                    </Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Max Property Price</Form.Label>
            <Form.Control type="number" placeholder="0"></Form.Control>
          </Form.Group>
        </Col>
      </Form.Row>
      <div className="line"></div>
      <div className="mb-2-hf">
        <h2>More about this campaign</h2>
      </div>
      <Form.Group>
        <Form.Label>Campaign Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your campaign"></Form.Control>
      </Form.Group>
      <div className="d-flex justify-content-center mt-2-hf">
        <Button variant="primary" className="btn-spacing-12 btn-spacing-295">Create Campaign</Button>
      </div>
    </Form>

  )
}
export default CampaignsForm;