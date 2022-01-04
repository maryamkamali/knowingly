
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Row,
  Col, Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle, DropdownItem, InputGroup, Input, InputGroupAddon, InputGroupText,
} from "reactstrap";

function Dashboard() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const dropdownToggle = (e) => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <>
      <div className="content">
        <Row>

          <Col lg="10" md="10" sm="10">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="1" xs="1">
                    <div className="avatar" style={{width: "50px", height: "50px"}}>
                      <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={
                            require("assets/img/faces/ayo-ogunseinde-2.jpg")
                                .default
                          }
                      />
                    </div>
                  </Col>
                  <Col md="11" xs="11">
                    <form>
                    <InputGroup>
                      <Input placeholder="Ask a question..." />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <i className="fas fa-pencil-alt" />
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </form>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter style={{direction: "rtl"}}>
                <div className="stats" style={{display: "inline-block", margin: "20px"}}>
                  Booking a Meeting
                  <i className="fas fa-calendar-plus" />
                </div>
                <div className="stats" style={{display: "inline-block", margin: "20px"}}>
                  Attachments
                  <i className="fas fa-paperclip" />
                </div>
              </CardFooter>
            </Card>
          </Col>

          <Col md="10">
            <Card>
              <CardHeader>
                <Dropdown
                    isOpen={dropdownOpen}
                    toggle={(e) => dropdownToggle(e)}
                >
                  <DropdownToggle caret nav>
                    All
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag="a">Action</DropdownItem>
                    <DropdownItem tag="a">Another Action</DropdownItem>
                    <DropdownItem tag="a">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </CardHeader>
              <CardBody>
                <ul className="list-unstyled team-members">
                  <li>
                    <Row>
                      <Col md="2" xs="2">
                        <div className="avatar">
                          <img
                              alt="..."
                              className="img-circle img-no-padding img-responsive"
                              src={
                                require("assets/img/faces/ayo-ogunseinde-2.jpg")
                                    .default
                              }
                          />
                        </div>
                      </Col>
                      <Col md="7" xs="7">
                        <strong>Why is processing a sorted array faster than processing an unsorted array?</strong> <br />
                        <span className="text-muted">
                          <small>1hr . by Ali Khan</small>
                        </span> <br/>
                        <span>
                        My first thought was that sorting brings the data into the cache, but then I thought how silly that was because the array was just generated.
                        What is going on?
                        Why is processing a sorted array faster than processing an unsorted array?
                        The code is summing up some independent terms, so the order should not matter.
                        </span>
                        <br />
                        <span className="text-muted">
                          <small>23 likes & 5 promotions</small>
                        </span>
                      </Col>
                      <Col className="text-right" md="3" xs="3">
                        <Button
                            className="btn-round btn-icon"
                            color="success"
                            outline
                            size="sm"
                        >
                          <i className="fa fa-ellipsis-v" />
                        </Button>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
}

export default Dashboard;
