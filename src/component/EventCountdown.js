import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import './EventCountdown.css';

const futureDate = new Date(2050, 0, 1);
const getDateDiff = (date1, date2) => {
  const diff = new Date(date2.getTime() - date1.getTime());
  return {
    year: diff.getUTCFullYear() - 1970,
    month: diff.getUTCMonth(),
    day: diff.getUTCDate() - 1,
    hour: diff.getUTCHours(),
    minute: diff.getUTCMinutes(),
    second: diff.getUTCSeconds(),
  };
};

const formatDate = (date) => {
  let d = new Date(date),
    month = (d.getMonth() + 1).toString(),
    day = d.getDate().toString(),
    year = d.getFullYear().toString();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const EventCountdown = () => {

    const handleLearnMore = () => {};

  const [diff, setDiff] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setDiff(getDateDiff(new Date(), futureDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
        <Container>
      <div className="upcoming-header">
          <h3>Upcoming Events</h3>
          <p>We invite you to join our upcoming events</p>
      </div>
      <Row>
          <Col md={6} lg={6}>
              <Row>
              <Col md={6} lg={6}>
                  <div className="image-container">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYO3FGoNRGofCcRpQcBS9r0aDqUk9OYF12Eg&usqp=CAU" alt="covid-19" width={250} height={280}/>
                  </div>
              </Col>
              <Col md={6} lg={6} id="move-down">
                  <div className="description">
                      <h4>The fight against Covid-19</h4>
                      <p>This project will help by providing resources for girls to get their education including books & school supplies, mentoring, computer training, food, COVID-19 support, and transportation.</p>
                  </div>
                  <Row className="month">
                      <Col md={2} lg={2}>
                          <h3>{diff.month}</h3>
                          <p className="actual_month">Month</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.day}</h3>
                          <p className="actual_month">Days</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.hour}</h3>
                          <p className="actual_month">Hrs</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.minute}</h3>
                          <p className="actual_month">Mins</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.second}</h3>
                          <p className="actual_month">Sec</p>
                      </Col>
                  </Row>
                  <div className="learn-button">
                  <button
                    type="button"
                    className="learn"
                    onClick={handleLearnMore}
                  >
                    <p className="text-button">Learn More</p>
                  </button>
                </div>
              </Col>
              </Row>
          </Col>

          <Col md={6} lg={6}>
          <Row>
              <Col md={6} lg={6}>
                  <div className="image-container">
                      <img src="https://images.unsplash.com/photo-1419848449479-6c8a7d8d62c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="covid-19" width={250} height={280}/>
                  </div>
              </Col>
              <Col md={6} lg={6}>
                  <div className="description">
                      <h4>Providing Home for the Homeless</h4>
                      <p>This project will help by providing resources for girls to get their education including books & school supplies, mentoring, computer training, food, COVID-19 support, and transportation.</p>
                  </div>
                  <Row className="month">
                      <Col md={2} lg={2}>
                          <h3>{diff.month}</h3>
                          <p className="actual_month">Month</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.day}</h3>
                          <p className="actual_month">Days</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.hour}</h3>
                          <p className="actual_month">Hrs</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.minute}</h3>
                          <p className="actual_month">Mins</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.second}</h3>
                          <p className="actual_month">Sec</p>
                      </Col>
                  </Row>
                  <div className="learn-button">
                  <button
                    type="button"
                    className="learn"
                    onClick={handleLearnMore}
                  >
                    <p className="text-button">Learn More</p>
                  </button>
                </div>
              </Col>
              </Row>
              
          </Col>
      </Row>


      <Row>
          <Col md={6}>
          <Row>
              <Col md={6} lg={6}>
                  <div className="image-container">
                      <img src="https://images.unsplash.com/photo-1609616424564-defb51e97764?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="covid-19" width={250} height={280}/>
                  </div>
              </Col>
              <Col md={6} lg={6}>
                  <div className="description">
                      <h4>The fight against Flood</h4>
                      <p className="actual_month">This project will help by providing resources for girls to get their education including books & school supplies, mentoring, computer training, food, COVID-19 support, and transportation.</p>
                  </div>
                  <Row className="month">
                      <Col md={2} lg={2} >
                          <h3>{diff.month}</h3>
                          <p className="actual_month">Month</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.day}</h3>
                          <p className="actual_month">Days</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.hour}</h3>
                          <p className="actual_month">Hrs</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.minute}</h3>
                          <p className="actual_month">Mins</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.second}</h3>
                          <p className="actual_month">Sec</p>
                      </Col>
                  </Row>
                  <div className="learn-button">
                  <button
                    type="button"
                    className="learn"
                    onClick={handleLearnMore}
                  >
                    <p className="text-button">Learn More</p>
                  </button>
                </div>
              </Col>
              </Row>
          </Col>


          <Col md={6}>
          <Row>
              <Col md={6} lg={6}>
                  <div className="image-container">
                      <img src="https://images.unsplash.com/photo-1585561573248-9ab717fa5390?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxkJTIwYWJ1c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="covid-19" width={250} height={280} className="event_image"/>
                  </div>
              </Col>
              <Col md={6} lg={6}>
                  <div className="description">
                      <h4>Providing Quality Education</h4>
                      <p>This project will help by providing resources for girls to get their education including books & school supplies, mentoring, computer training, food, COVID-19 support, and transportation.</p>
                  </div>
                  <Row className="month">
                      <Col md={2} lg={2} >
                          <h3>{diff.month}</h3>
                          <p className="actual_month">Month</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.day}</h3>
                          <p className="actual_month">Days</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.hour}</h3>
                          <p className="actual_month">Hrs</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.minute}</h3>
                          <p className="actual_month">Mins</p>
                      </Col>
                      <Col md={2} lg={2}>
                          <h3>{diff.second}</h3>
                          <p className="actual_month"> Secs</p>
                      </Col>
                  </Row>
                  <div className="learn-button">
                  <button
                    type="button"
                    className="learn"
                    onClick={handleLearnMore}
                  >
                    <p className="text-button">Learn More</p>
                  </button>
                </div>
              </Col>
              </Row>
          </Col>
      </Row>
      </Container>
    </div>
  );
};

export default EventCountdown;
