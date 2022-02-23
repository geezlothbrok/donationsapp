import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./MajorCauses.css";

const MajorCauses = () => {
  const handleDonate = () => {};
  const handleLearnMore = () => {};
  return (
    <>
      <Container>
        <Row>
          <Col xs={6} md={12} lg={12}>
            <h3 className="header">Our major causes</h3>
            <p className="sub-header">Here are some of the causes we serve</p>
          </Col>
        </Row>

        <Row>
          <Col md={4} xs={6} lg={4}>
            <div className="single-cause">
              <h3>Give a Donation</h3>
              <img src="data:image/webp;base64,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" />
              <p>
                Each time you send a donation letter, whether it’s by email or
                direct mail, you should be collecting and storing data about
                that letter’s performance. Make sure your tools can track
                important data points like the recipient’s name, whether the
                recipient responded, and how often donation letters convert to
                gifts
              </p>
            </div>
          </Col>
          <Col md={4} xs={6} lg={4}>
            <div className="single-cause">
              <h3>Give Inspiration</h3>
              <img src="data:image/webp;base64,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" />
              <p>
                Each time you send a donation letter, whether it’s by email or
                direct mail, you should be collecting and storing data about
                that letter’s performance. Make sure your tools can track
                important data points like the recipient’s name, whether the
                recipient responded, and how often donation letters convert to
                gifts
              </p>
            </div>
          </Col>
          <Col md={4} xs={6} lg={4}>
            <div className="single-cause">
              <h3>Become a Voluntere</h3>
              <img src="data:image/webp;base64,UklGRlgFAABXRUJQVlA4TEwFAAAvXoAXELWKgrZtmJg/7h0IETEBQR8yB7eNJElS+Bn+G7JvPWicXPrhDOhDCSf9Hw+4AQAQbGLbWTNytvmEtTk32LY3J3X7QZsLaneyDUZu2ziiMNv32J8gVwJo03ZebLtLmZR2n1RJlVS2bdu2bdu2efGMc/Ww/+LMfeestc5pw7XSG3vezoxUiwIIsLqzbdu2bdu2bdu2nba0sw/wMxLTi3ayHLaRpMjJoep+ZoaDIggAggZrEK1C9eokqDQSlUwl0WS+fcOfsOz6BJfkbsfAbSNFXoZjfMOUUxDKgfY7WHkHF++AU3iIXMWcwg30excdB2CYgMgnb4OCoIKygiUF13nArkGVlLxAIug3hg7jqJ+AkHc1BSUFiwouFGBGshCRCPqNoYM46nrSoyCmYKDgzO4hISJR+IjDVgJS1DUFSQWzCh6YCYlE0H8M7SQgS1lTEFUwUvDCTEzEQv8xtJ2AJFlS0FFwxewB++LH0ZimpiCuYFUB9ohIDM4TkCFIixurWSjIPXtILAH99F+8ttBJjKNm44NdgwVQXiGupM31+yPl/9KrLQlQIvI/ci65iwGUAOau9c1Lyv8FhxhYGAKT/s0oBCjZCMRyj8H5Ics3hcMA4RYmIMsDhiWHgGVyk3IBwnMEaHn8nyPlm/U7AMCuYTkI1HIxNSR40/gH2DNEwJaDiSE6+S0oAqkA6DaShyDwL6vDIUy5vgVcAEIA5AaWgQjC8jUzowtNtm4J54MQALiBpSGCsrzx+524bgCygjTg6jaWiQjSsuPrEIbclzFbIAgcXcdeIiJofM/0b6R1Y6DVR0A6CIAk17C72CssFxECy60vQ/jylwTaXBykY0EkA0m+UQn8Me+TzG8b5jgiIlSW5x9DOPdQy+x30jsWd9+GkOTjWPzBpBfx32Mt+15k52C8PTPCugdbZs2Iu9ldCyPG7gdZ6ZWlMJo9PrlpabR4ZQQkT71WVZYmL86a37+hxU8MErb8t3puPPQ3szl1i9QyWyytigQwdTDZGr16yRESUmyWSKuLvk3bzMjRPVIckVmnmPgYshKSVPr281rFKPFMFp12pRedxHQ6O6PEC7lqlKo2eh2kYkr/XZx3XSHEV/LaaHFj0cWYpk/uCPHb7fPAemgHZlnJFp3tUyiI8RPJUZ0Pb1ki4j8nw5p2ZPqsHNGRbpc8aQzcCC4q/Ph5rLuCEjwoRS/nPTYVFO3CdDy/osHnbJgZwUmjwzud0fMwuCr1b3EoeI0CNxj38VYup3VzOpN2ZRq/fMLjU9bNZ4KRUtVN56YBzPTWPSwuMWa+Jko5KUmI4j9I9a8fYRlD4RNWTpSgJSt/BYfimgYx3Q5PEPiPs4yeRCKVg7QsBfTdCUBlf//dtFwD4wOWTi5BSUZ+k9aWFg1kWt25AeJfzjAqOWZGBLKbkq6MnocBrNS/xRX7FRDeZcFUEoQkRs7lH8Cu9KbBTOfTM4DWN6+/lP/LAiOm2KaC6gCMmk0INb58ACwrPfY/lVOQBvxSaQQD+NlKQN0Dd+0byvyaHT84799Qhk0e+MGJ8IbSc/3ED84FNJQh0wd+cM+uoSys2oH4cU7jsVMJodanDwvxhf2JBaHr8Yk/ZMuPPrsBrMyfv9vmKx6p3ey+gV51nouLwR4G+RqQN7/ggNbovxVAyv36O+a/Jr7BL4xG/60EUP7nz7bEDfERDmqO8RPJSfLfrV33E06IYl9S67sTHJX9/dfl5CQoZ+IzzHky40h0mTSSehyFZPXfvnTfP3uov2Ih4qVClhSemI+rHm1F6dqE3r21OVvPtExEPNXwL+M9fTM=" />
              <p>
                Each time you send a donation letter, whether it’s by email or
                direct mail, you should be collecting and storing data about
                that letter’s performance. Make sure your tools can track
                important data points like the recipient’s name, whether the
                recipient responded, and how often donation letters convert to
                gifts
              </p>
            </div>
          </Col>
        </Row>

        <Row className="about-section">
          <Col md={6} lg={6}>
            <div className="group-photo">
              <img
                src="images/groupimage.jpg"
                alt="groupimage"
                width={650}
                height={800}
              />
            </div>
          </Col>
          <Col md={6} lg={6}>
            <div className="about-us">
              <h3 className="aboutUs-title">
                We are a nonprofit team and we work world wide
              </h3>
              <p className="aboutUs-text">
                GlobalGiving is a nonprofit that supports other nonprofits by
                connecting them to donors and companies. Since 2002, we've
                helped trusted, community-led organizations from Afghanistan to
                Zimbabwe (and hundreds of places in between) access the tools,
                training, and support they need to make our world a better
                place.
              </p>
            </div>
            <div className="aboutUs-button">
              <Button variant="danger" onClick={handleLearnMore}>
                <p id="learn">Learn more</p>
              </Button>
            </div>
          </Col>
        </Row>

        <Row className="causes-section">
          <div className="featured">
            <h2>Featured causes</h2>
            <p>Just a glimps of our causes</p>
          </div>

          <Col md={4} lg={4}>
            <div className="support-section">
              <div className="support_image">
                <img src="images/education.jpg" width={400} height={350} />
              </div>
              <div className="support_title">
                <h4 className="support_titleM">Education for every child</h4>
              </div>
              <div className="support_text">
                <p>
                  Across the region, 9 million girls between the ages of about 6
                  and 11 will never go to school, compared to 6 million boys,
                  according to UIS data. By the time they become adolescents,
                  the exclusion rate for girls is 36% compared to 32% for boys.
                  (UNESCO, 2021). Girls' education is a major priority. This
                  project will help by providing resources for girls to get
                  their education including books & school supplies, mentoring,
                  computer training, food, COVID-19 support, and transportation.
                </p>
              </div>
              <Row>
                <Col md={6}>
                  <div className="aount-raised">
                    <p className="support_text">Raised: $ 50, 000.00</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="target-amount">
                    <p className="goal">Goal: $ 200,000.00</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="donate-button">
                  <button
                    type="button"
                    className="donate"
                    onClick={handleDonate}
                  >
                    <p className="textIn-button">Donate</p>
                  </button>
                </div>
              </Row>
            </div>
          </Col>

          <Col md={4} lg={4}>
            <div className="support-section">
              <div className="support_image">
                <img
                  src="https://www.charismamag.com/images/articles/Spirit/Evangelism-and-Missions/13-7/Inspire7.jpg"
                  width={400}
                  height={350}
                />
              </div>
              <div className="support_title">
                <h4 className="support_titleM">
                  Feeding the hungry and poor children
                </h4>
              </div>
              <div className="support_text">
                <p>
                  Across the region, 9 million girls between the ages of about 6
                  and 11 will never go to school, compared to 6 million boys,
                  according to UIS data. By the time they become adolescents,
                  the exclusion rate for girls is 36% compared to 32% for boys.
                  (UNESCO, 2021). Girls' education is a major priority. This
                  project will help by providing resources for girls to get
                  their education including books & school supplies, mentoring,
                  computer training, food, COVID-19 support, and transportation.
                </p>
              </div>
              <Row>
                <Col md={6}>
                  <div className="aount-raised">
                    <p className="support_text">Raised: $ 50, 000.00</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="target-amount">
                    <p className="goal">Goal: $ 200,000.00</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="donate-button">
                  <button
                    type="button"
                    className="donate"
                    onClick={handleDonate}
                  >
                    <p className="textIn-button">Donate</p>
                  </button>
                </div>
              </Row>
            </div>
          </Col>

          <Col md={4} lg={4}>
            <div className="support-section">
              <div className="support_image">
                <img src="images/sur.jpg" width={400} height={350} />
              </div>
              <div className="support_title">
                <h4 className="support_titleM"> Poor children needs surgery</h4>
              </div>
              <div>
                <p className="support_text">
                  Across the region, 9 million girls between the ages of about 6
                  and 11 will never go to school, compared to 6 million boys,
                  according to UIS data. By the time they become adolescents,
                  the exclusion rate for girls is 36% compared to 32% for boys.
                  (UNESCO, 2021). Girls' education is a major priority. This
                  project will help by providing resources for girls to get
                  their education including books & school supplies, mentoring,
                  computer training, food, COVID-19 support, and transportation.
                </p>
              </div>
              <Row>
                <Col md={6}>
                  <div className="aount-raised">
                    <p className="support_text">Raised: $ 50, 000.00</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="target-amount">
                    <p className="goal">Goal: $ 200,000.00</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="donate-button">
                  <button
                    type="button"
                    className="donate"
                    onClick={handleDonate}
                  >
                    <p className="textIn-button">Donate</p>
                  </button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MajorCauses;
