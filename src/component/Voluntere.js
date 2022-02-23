import React from "react";
import { Row, Col } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import "./Volunteer.css";

const Voluntere = () => {
  const handleEmail = () => {};
  return (
    <div>
      <div className="topic">
        <h1>Meet our Volunteers</h1>
        <p>These are our royal members who voluntrered to our service</p>
      </div>
      <Row>
        <Col md={3} lg={3}>
          <img
            src="https://media.istockphoto.com/photos/smiling-mixed-race-mature-man-on-grey-background-picture-id1319763895?b=1&k=20&m=1319763895&s=170667a&w=0&h=jhqKyg62cQVZ-NjDQjpcenCdHDrprkN4caRjk4K76E8="
            width={300}
            height={400}
          />
          <h4>Daniel Alexa</h4>
          <p>Field Manager</p>
          <p>Belgium</p>
          <Row>
            <Col md={3} lg={3}>
              <button className="icon-social"> 
                <GrIcons.GrFacebookOption />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrTwitter />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrInstagram />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <AiIcons.AiOutlineMail />
              </button>
            </Col>
          </Row>
        </Col>
        <Col md={3} lg={3}>
          <img
            src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFkaWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
          />
          <h4>Daniel Alexa</h4>
          <p>Field Manager</p>
          <p>Belgium</p>
          <Row>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrFacebookOption />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrTwitter />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrInstagram />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <AiIcons.AiOutlineMail />
              </button>
            </Col>
          </Row>
        </Col>
        <Col md={3} lg={3}>
          <img
            src="https://images.unsplash.com/flagged/photo-1573603867003-89f5fd7a7576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdlbnRsZW1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width={300}
            height={400}
          />
          <h4>Daniel Alexa</h4>
          <p>Field Manager</p>
          <p>Belgium</p>
          <Row>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrFacebookOption />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrTwitter />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrInstagram />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <AiIcons.AiOutlineMail />
              </button>
            </Col>
          </Row>
        </Col>
        <Col md={3} lg={3}>
          <img
            src="https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc="
            width={300}
            height={400}
          />
          <h4>Daniel Alexa</h4>
          <p>Field Manager</p>
          <p>Belgium</p>
          <Row>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrFacebookOption />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrTwitter />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <GrIcons.GrInstagram />
              </button>
            </Col>
            <Col md={3} lg={3}>
              <button className="icon-social">
                <AiIcons.AiOutlineMail />
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Voluntere;
