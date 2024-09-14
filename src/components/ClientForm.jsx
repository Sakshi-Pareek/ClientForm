import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from "react-bootstrap";

const formValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  headQuarter: Yup.string().required("Headquarter is required"),
  state: Yup.string().required("State is required"),
  workingState: Yup.string().required("Working state is required"),
  workingCity: Yup.string().required("Working city is required"),
  interiorCity: Yup.string().required("Interior city is required"),
  placeOfWork: Yup.string().required("Place of work is required"),
  reportingManager: Yup.string().required("Reporting manager is required"),
  vehicle: Yup.string().required("Select vehicle"),
  vehicleRc: Yup.string().required("RC No is required"),
  aadharNumber: Yup.string()
    .required("Aadhar number is required")
    .matches(/^[0-9]{12}$/, "Aadhar number must be 12 digits"),
  salary: Yup.number().required("Salary is required"),
  allowanceHeadQuarter: Yup.string().required(
    "Allowance for headquarter is required"
  ),
  allowanceExStation: Yup.string().required(
    "Allowance for ex-station is required"
  ),
  allowanceOutStation: Yup.string().required(
    "Allowance for outstation is required"
  ),
  distributorName: Yup.string().required("Distributor name is required"),
  csa: Yup.string().required("CSA is required"),
});

const ClientForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    // Reset the form after submission
    resetForm();
  };

  return (
    <div className="p-4">
      <Container className="py-4 shadow rounded-3 bg-light">
        <Formik
          initialValues={{
            name: "",
            headQuarter: "",
            state: "",
            workingState: "",
            workingCity: "",
            interiorCity: "",
            placeOfWork: "",
            reportingManager: "",
            vehicle: "",
            vehicleRc: "",
            aadharNumber: "",
            salary: "",
            allowanceHeadQuarter: "",
            allowanceExStation: "",
            allowanceOutStation: "",
            distributorName: "",
            csa: "",
          }}
          validationSchema={formValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <h1 className="text-center mb-5 fw-bold text_blue">
                Registration Form
              </h1>
              {/* ------------personal-info------------ */}
              <Row className="d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">
                  Personal Information
                </h2>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Name
                    </BootstrapForm.Label>
                    <Field className="form-control input_design" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Head Quarter
                    </BootstrapForm.Label>
                    <Field
                      as="select"
                      className="form-control"
                      name="headQuarter"
                    >
                      <option value="">Select</option>
                      <option value="HQ1">HQ1</option>
                      <option value="HQ2">HQ2</option>
                    </Field>
                    <ErrorMessage
                      name="headQuarter"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      State
                    </BootstrapForm.Label>
                    <Field as="select" className="form-control" name="state">
                      <option value="">Select</option>
                      <option value="State1">State 1</option>
                      <option value="State2">State 2</option>
                    </Field>
                    <ErrorMessage
                      name="state"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------working-area------------ */}
              <Row className="my-5 d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">Working Area </h2>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      State
                    </BootstrapForm.Label>
                    <Field
                      as="select"
                      className="form-control"
                      name="workingState"
                    >
                      <option value="">Select</option>
                      <option value="State1">State 1</option>
                      <option value="State2">State 2</option>
                    </Field>
                    <ErrorMessage
                      name="workingState"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      City
                    </BootstrapForm.Label>
                    <Field
                      as="select"
                      className="form-control"
                      name="workingCity"
                    >
                      <option value="">Select</option>
                      <option value="City1">City 1</option>
                      <option value="City2">City 2</option>
                    </Field>
                    <ErrorMessage
                      name="workingCity"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------interior-info------------ */}
              <Row className="d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">Interior</h2>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      City
                    </BootstrapForm.Label>
                    <Field className="form-control" name="interiorCity" />
                    <ErrorMessage
                      name="interiorCity"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Place of Work
                    </BootstrapForm.Label>
                    <Field className="form-control" name="placeOfWork" />
                    <ErrorMessage
                      name="placeOfWork"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------vehicle-details------------ */}
              <Row className="my-5 d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">Vehicle Details</h2>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Vehicle
                    </BootstrapForm.Label>
                    <Field as="select" className="form-control" name="vehicle">
                      <option value="">Select</option>
                      <option value="Bike">Bike</option>
                      <option value="Car">Car</option>
                      <option value="Both">Both</option>
                    </Field>
                    <ErrorMessage
                      name="vehicle"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Vehicle Number
                    </BootstrapForm.Label>
                    <Field
                      className="form-control"
                      name="vehicleRc"
                      type="text"
                    />
                    <ErrorMessage
                      name="vehicleRc"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------identification------------ */}
              <Row className="d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">
                  Identification and Salary
                </h2>
                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Aadhar Number
                    </BootstrapForm.Label>
                    <Field
                      className="form-control"
                      name="aadharNumber"
                      placeholder="Enter 12 digit Aadhar"
                    />
                    <ErrorMessage
                      name="aadharNumber"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={6}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Salary
                    </BootstrapForm.Label>
                    <Field
                      className="form-control"
                      name="salary"
                      type="number"
                    />
                    <ErrorMessage
                      name="salary"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------allowance------------ */}
              <Row className="my-5 d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">Allowance</h2>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Head Quarter
                    </BootstrapForm.Label>
                    <Field
                      className="form-control"
                      name="allowanceHeadQuarter"
                    />
                    <ErrorMessage
                      name="allowanceHeadQuarter"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Ex Station
                    </BootstrapForm.Label>
                    <Field className="form-control" name="allowanceExStation" />
                    <ErrorMessage
                      name="allowanceExStation"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>

                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Out Station
                    </BootstrapForm.Label>
                    <Field
                      className="form-control"
                      name="allowanceOutStation"
                    />
                    <ErrorMessage
                      name="allowanceOutStation"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>
              {/* ------------other-details------------ */}
              <Row className="d-flex gap-md-0 gap-2">
                <h2 className="text_blue fs-3 fw-medium">Other Details</h2>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Distributor Name
                    </BootstrapForm.Label>
                    <Field
                      as="select"
                      className="form-control"
                      name="distributorName"
                    >
                      <option value="">Select</option>
                      <option value="Distributor1">Distributor 1</option>
                      <option value="Distributor2">Distributor 2</option>
                    </Field>
                    <ErrorMessage
                      name="distributorName"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      CSA
                    </BootstrapForm.Label>
                    <Field as="select" className="form-control" name="csa">
                      <option value="">Select</option>
                      <option value="CSA1">CSA 1</option>
                      <option value="CSA2">CSA 2</option>
                    </Field>
                    <ErrorMessage
                      name="csa"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
                <Col md={4}>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label className="mb-1">
                      Reporting Manager
                    </BootstrapForm.Label>
                    <Field
                      as="select"
                      className="form-control"
                      name="reportingManager"
                    >
                      <option value="">Select</option>
                      <option value="Manager1">Manager 1</option>
                      <option value="Manager2">Manager 2</option>
                    </Field>
                    <ErrorMessage
                      name="reportingManager"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>
                </Col>
              </Row>

              <div className="mt-5 d-flex justify-content-center align-items-center">
                <Button type="submit" className="Submit_btn">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default ClientForm;
