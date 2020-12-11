import React from 'react'

export function Contact() {
  return (
    <div>
      {/* ======= Contact Us Section ======= */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex align-items-stretch" data-aos="fade-up">
              <div className="info-box">
                <i className="bx bx-map" />
                <h3>Our Address</h3>
                <p>13/2 Action Area III, Kolkata 700028, India</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
              <div className="info-box">
                <i className="bx bx-envelope" />
                <h3>Email Us</h3>
                <p>hotelfix@hotelfix.com<br />worldwidehotelfix@hotelfix.com</p>
              </div>
            </div>
            <div className="col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
              <div className="info-box ">
                <i className="bx bx-phone-call" />
                <h3>Call Us</h3>
                <p>+9162913688<br />+91916357892</p>
              </div>
            </div>
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay={300}>
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-row">
                  <div className="col-lg-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate" />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>{/* End Contact Us Section */}

    </div>
  )
}