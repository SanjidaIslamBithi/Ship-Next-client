import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css'
import Bounce from 'react-reveal/Bounce';
import ab1 from '../../../images/aboupic/bohemian-man-with-his-arms-crossed.jpg'
import ab2 from '../../../images/aboupic/portrait-beautiful-young-woman-standing-grey-wall.jpg'
import ab3 from '../../../images/aboupic/rodolfo-sanches-carvalho-CsNacHXW6RU-unsplash.jpg'
import ab4 from '../../../images/aboupic/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg'
import logo from '../../../images/ShipNext.png'
const About = () => {
    return (
        <div>
        <div className="about margin">
          <div className="about1">
           
          <Bounce bottom cascade>
          {/* <img src={logo} alt="" /> */}
          <h2 className='text-center my-5 display-4 fw-bold'>
            About Us
          </h2>
        </Bounce>

            
          </div>
        </div>
        <div className="container">
          <Row lg={2} sm={12} className="mt-5">
            <Col sm={12}>
              <div className="img-hover-zoom">
                <img
               className="img-fluid pic"
                  src={ab1}
                  alt=""
                />
              </div>
            </Col>
            <Col sm={12}>
              <span>Photographer</span>
              <h3>Justin Lisiakir</h3>
              <p>
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be brave
                and grab life as the extraordinary adventure it is. So we make
                sure everyone has an equal chance to discover all the amazing
                things they’re capable of – no matter who they are, where they’re
                from or what looks they like to boss. We exist to give you the
                confidence to be whoever you want to be
              </p>
            </Col>
          </Row>
          <Row lg={2} className="mt-5">
            <Col sm={12}>
              <span>Sales agent</span>
              <h3>Alex Barnder</h3>
              <p>
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be brave
                and grab life as the extraordinary adventure it is. So we make
                sure everyone has an equal chance to discover all the amazing
                things they’re capable of – no matter who they are, where they’re
                from or what looks they like to boss. We exist to give you the
                confidence to be whoever you want to be
              </p>
            </Col>
            <Col sm={12}>
              <div className="img-hover-zoom">
                <img
               className="img-fluid pic"
                  src={ab2}
                  alt=""
                />
              </div>
            </Col>
          </Row>
          <Row lg={2} className="mt-5">
            <Col sm={12}>
              <div className="img-hover-zoom">
                <img
               className="img-fluid pic"
                  src={ab3}
                  alt=""
                />
              </div>
            </Col>
            <Col sm={12}>
              <span>Web Designer</span>
              <h3>Angelika Hess</h3>
              <p>
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be brave
                and grab life as the extraordinary adventure it is. So we make
                sure everyone has an equal chance to discover all the amazing
                things they’re capable of – no matter who they are, where they’re
                from or what looks they like to boss. We exist to give you the
                confidence to be whoever you want to be
              </p>
            </Col>
          </Row>
          <Row lg={2} className="mt-5 mb-5">
            <Col sm={12}>
              <span>Marketing Staff</span>
              <h3>Angelika Hessas</h3>
              <p>
                We believe in a world where you have total freedom to be you,
                without judgement. To experiment. To express yourself. To be brave
                and grab life as the extraordinary adventure it is. So we make
                sure everyone has an equal chance to discover all the amazing
                things they’re capable of – no matter who they are, where they’re
                from or what looks they like to boss. We exist to give you the
                confidence to be whoever you want to be
              </p>
            </Col>
            <Col sm={12}>
              <div className="img-hover-zoom">
                <img
               className="img-fluid pic"
                  src={ab4}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* another section */}
        {/* <div className="about-banner text-light mt-5 mb-5 p-5 ">
          <h5 className=" text-center m-5">Reasons to shop with us</h5>
          <div className="container">
            <Row lg={3} className="">
              <Col sm={12}>
                <h6>24/7 FRIENDLY SUPPORT</h6>
                <span>
                  Our support team always ready for you to 7 days a week
                </span>
              </Col>
              <Col sm={12}>
                <h6>7 DAYS EASY RETURN</h6>
                <span>
                  Product any fault within 7 days for an immediately exchange
                </span>
              </Col>
              <Col sm={12}>
                <h6>QUALITY GUARANTEED</h6>
                <span>
                  If your product aren't perfect return then for a full refund
                </span>
              </Col>
            </Row>
          </div>
        </div> */}
      </div>
    );
  };

export default About;
