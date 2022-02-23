import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";


const Footer = () => {
    return (
        <>
            <div className='footer' fixed="top" expand="lg xs md">
                <Container>
                    <Row>
                        <Col className='footer_mission'>
                            <h2 className='header_in_footer1'>Our mission</h2>
                            <p className='text_in-footer'>In State Farm Claims, we believe our future is worth insuring, because insurance isn’t about fearing the future, 
                            it’s a promise to protect it. This has been our promise since 1922. And when the unexpected happens, there is no reason to fear. Instead, 
                            our customers will meet YOU, a supportive claim force providing the help they need. </p>
                        </Col>
                        <Col className='quick_link'>
                            <h3 className='header_in_footer'>Quick Links</h3>
                        </Col>
                        <Col className='gallery'>
                            <h3 className='header_in_footer'>Gallery</h3>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Col>
                        <Col className='contact_us'>
                            <h3 className='header_in_footer'>Contact Us</h3>
                           
                            <p className='head_office'><FaIcons.FaLocationArrow /> Head Office</p>
                            <p className='office_location'>23, Alcantara</p>
                            <p className='head_office'><FaIcons.FaPhoneAlt /> Phone Number</p>
                            <p className='office_location'> +233 123 456 789</p>
                            <p className='head_office'><MdIcons.MdEmail /> Email</p>
                            <p className='office_location'>firstemail@geez.com</p>
                            <p className='office_location'>secondtemail@geez.com</p>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='copyright'>
                    <p className='copyright_text'>
                        Copyright <MdIcons.MdOutlineCopyright /> 2022 All rights reserved
                    </p>
                </div>
        </>
    )
};

export default Footer;