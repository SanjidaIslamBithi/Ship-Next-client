import React from 'react';
import emailjs from 'emailjs-com';
import useAuth from '../../../hooks/useAuth';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import Bounce from 'react-reveal/Bounce';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const { user } = useAuth();
  const { displayName, email } = user;

  // const [formMsg, setFormMsg] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fwudan4',
        'template_edeescc',
        e.target,
        'user_VLaQEuubCBkZsNTdgYtBy'
      )
      .then((result) => {
        console.log(result);

        if (result.status === 200) {
          let timerInterval;
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks you!',
            text: 'Thanks! We will get back to you as soon as possible.',
            timer: 5000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
              console.log('I was closed by the timer');
            }
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        // setFormMsg(error)
      });
    e.target.reset();
  };

  return (
    <div>
      <div className='contactInfo blog-bg'>
        <Bounce bottom cascade>
          <h2 className='text-center my-5 display-4 fw-bold'>Contact Us</h2>
        </Bounce>
      </div>
      <Container>
        <Row className='mb-5'>
          <Col xm={12} md={6} lg={8} className='m-auto'>
            <h2 className='mt-5'>Leave us your info</h2>
            <p>and we will get back to you.</p>
            <Card className='mt-5 p-4 bg-dark'>
              <Bounce bottom cascade>
                <h2 className='text-white text-center'>Ask Your Question</h2>
              </Bounce>
              <form onSubmit={handleFormSubmit}>
                <div className='form-floating mb-3 form-group'>
                  <input
                    defaultValue={displayName}
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                    placeholder='Your Name '
                    required
                  />
                  <label>Your name</label>
                </div>

                <div className='form-floating mb-3 form-group'>
                  <input
                    defaultValue={email}
                    type='text'
                    name='email'
                    id='user_email'
                    className='form-control'
                    placeholder='Your email address '
                    required
                  />
                  <label>Your email</label>
                </div>

                <div className='form-floating mb-3 form-group'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='form-control'
                    placeholder='Your Subject'
                    required
                  />
                  <label className='text-secondary'>Subject</label>
                </div>

                <div className='form-floating mb-3 form-group'>
                  <textarea
                    type='text'
                    name='message'
                    className='form-control'
                    id='your-message'
                    cols='30'
                    rows='10'
                    placeholder='Your message'
                    required
                  ></textarea>
                  <label className='text-secondary'>Your message</label>
                </div>
                <button
                  className='btn custom-black-btn rounded-pill'
                  type='submit'
                >
                  <FontAwesomeIcon icon={faPaperPlane} /> Send
                </button>
              </form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;

// {/* <hr className='text-white mb-5' />
//               <div>
//                 <input
//                   className='w-100 rounded mb-3 form-control'
//                   type='email'
//                   placeholder='Email'
//                 />
//               </div>
//               <div>
//                 <input
//                   className='w-100 rounded mb-3 form-control'
//                   type='text'
//                   placeholder='Subject'
//                 />
//               </div>
//               <div>
//                 <textarea
//                   className='w-100 h-75 rounded mb-3 form-control py-3'
//                   type='text'
//                   placeholder='Message'
//                 />
//               </div>
//               <button className='btn btn-outline-light w-50'>
//                 Send Message
//               </button>
//               <hr className='text-white mb-3' />
//               <div></div> */}
