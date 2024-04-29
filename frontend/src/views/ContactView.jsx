import ContactForm from "../components/ContactForm"

function ContactView() {

  return (
    <>
      <h1>Contact</h1>
      <div className='contactFormContainer'>
        <div className='contactInfoText'>

          <div className='contactInfoText1'>
            <h2>Visit or Call Us</h2>
            <div className='contactSmallerInfoText'>
              <p>Welcome!</p>
              <p>
                <strong>Address:</strong> 123 Flower Street, City, Country
              </p>
              <p>
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
            </div>
          </div>

          <div className='contactInfoText2'>
            <h2>Opening Hours</h2>
            <div className='contactSmallerInfoText'>
              <ul>
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

        </div>
        <ContactForm />
      </div>
    </>
  )

}

export default ContactView
