// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import contact from '../Assets/contact1.png';
// import Tilt from "react-parallax-tilt";
// import emailjs from 'emailjs-com';
// import { ToastContainer,toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     message: ''
//   });
//   // Notification
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     if(formData.email.length==0){
//       return toast.warning(`Please enter your email`)
//     }
//     if(formData.message.length==0){
//       return toast.warning(`Please enter message`)
//     }
//     console.log(formData.email);
//     formData.from_name = formData.email;
//     //write details
//     emailjs.send(
//       '', //template
//       '', //service
//       formData,
//       '' //passcode
//     ).then((result) => {
//       if(formData.email.length>9 && formData.message.length>1 && result.text=="OK"){
//         toast.success("Email sent successfully");
//         setFormData({
//           email: '',
//           message: ''
//         });
//       }else{
//         toast.error("Failed to send email");
//       }
//     }, (error) => {
//       toast.error("Failed to send email");
//     });
//   };

//   return (
//     <Container fluid style={{ color: 'white' }}>
//       <h1 className="project-heading text-center">
//         Contact <strong className="purple">Me</strong>
//       </h1>
//       <Row className="justify-content-center">
//         <Col md={8} lg={6} className="d-flex justify-content-center align-items-center mt-3 mt-md-0">
//           <Tilt>
//             <img
//               className="img-fluid"
//               style={{ cursor: 'pointer' }}
//               src={contact}
//               alt="Contact"
//             />
//           </Tilt>
//         </Col>
//         <Col className="d-flex flex-column align-items-center">
//           <Form className="w-100 p-3 mt-5" style={{ maxWidth: '500px' }} onSubmit={sendEmail}>
//             <Form.Group controlId="formBasicEmail" className="mb-5">
//               <Form.Control 
//                 type="email" 
//                 placeholder="Enter your email" 
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={{ width: '100%' }} 
//               />
//             </Form.Group>

//             <Form.Group className="mb-5" controlId="formBasicMessage">
//               <Form.Control 
//                 as="textarea" 
//                 rows={5} 
//                 placeholder="Enter your message" 
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 style={{ width: '100%' }} 
//               />
//             </Form.Group>
//             <Button variant="primary" style={{ fontFamily: "poppins" }} type="submit">
//               Send Message
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//       <ToastContainer/>
//     </Container>
//   );
// };

// export default Contact;




// //resume

// //displat

// <iframe
// src={pdf}
// style={{
//   marginTop: "40px",
//   marginBottom: "40px",
//   width: "75%",
//   height: "75vh",
//   border: "2px solid #ddd",
//   overflow: "auto"
// }}
// title="Resume Preview"
// />


// //download
// <button
// variant="primary"
// href={pdf}
// target="_blank"
// style={{
//   maxWidth: "250px",
//   margin: "10px auto",
//   padding: "10px 20px",
//   borderRadius: "5px",
//   backgroundColor: "#337ab7",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer"
// }}
// >
// <AiOutlineDownload />
// &nbsp;Download CV
// </button>