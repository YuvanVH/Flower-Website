// src/components/ContactForm.jsx
import '../styles/ContactForm.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='ContactFormStyle'>
        <h2>Or send us a mail</h2>
        <div>
          <span className='contactTitelInfo'><label htmlFor="name">Name</label></span>
          <Field type="text" name="name" />
          <ErrorMessage className='errorMessage' name="name" component="div" />
        </div>

        <div>
          <span className='contactTitelInfo'><label htmlFor="email">Email Address</label></span>
          <Field type="email" name="email" />
          <ErrorMessage className='errorMessage' name="email" component="div" />
        </div>

        <div>
          <span className='contactTitelInfo'><label htmlFor="message">Message</label></span>
          <Field as="textarea" name="message" />
          <ErrorMessage className='errorMessage' name="message" component="div" />
        </div>

        <button id="formButton" type="submit" className="contact-form-button">Submit</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;
