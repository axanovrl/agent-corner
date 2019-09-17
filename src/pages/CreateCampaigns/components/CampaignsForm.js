import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import { required } from "../../../utils/validation";
import FieldInput from "../../../components/FieldInput";
import Select from "../../../components/Select";
import { Objective, PropertyType, Min, Max } from "./const";

const CampaignsForm = props => {
  const { handleSubmit } = props;
  return (
    <Form id="campaigns-form" className="form-default" onSubmit={handleSubmit}>
      <Field
        name="location"
        label="Location"
        component={FieldInput}
        placeholder="Enter a city or ZIP Code"
        type="number"
        validate={required}
      />
      <Form.Row>
        <Col>
          <Select options={PropertyType} label="Property Type" />
        </Col>
        <Col>
          <Select options={Objective} label="Objective" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Select options={Min} label="Min Property Price" />
        </Col>
        <Col>
          <Select options={Max} label="Max Property Price" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Col>
          <Field
            name="bidAmount"
            label="Bid Amount"
            component={FieldInput}
            type="number"
            validate={required}
          />
        </Col>
        <Col>
          <Field
            name="maxPropertyPrice"
            label="Max Property Price"
            component={FieldInput}
            type="number"
            validate={required}
          />
        </Col>
      </Form.Row>
      <Form.Text className="text-muted">Minimum amount $10.00</Form.Text>
      <div className="line" />
      <div className="mb-2-hf">
        <h2>More about this campaign</h2>
      </div>
      <Field
        name="campaignName"
        label="Campaign Name"
        component={FieldInput}
        placeholder="Enter your campaign"
        validate={required}
      />
      <div className="d-flex justify-content-center mt-2-hf">
        <Button
          variant="btn-primary"
          type="submit"
          className="btn-spacing-295 form-label"
          onClick={handleSubmit}
        >
          Create Campaign
        </Button>
      </div>
    </Form>
  );
};

CampaignsForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "CampaignsForm"
})(CampaignsForm);
