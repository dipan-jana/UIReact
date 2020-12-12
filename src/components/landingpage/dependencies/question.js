import React from 'react'

export function Question(props) {
  return (

    <div>
      {/* ======= Frequently Asked Questions Section ======= */}
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row  d-flex align-items-stretch">
            <div className="col-lg-6 faq-item" data-aos="fade-up">
              <h4>{props.questionContent.question_1}</h4>
              <p>{props.questionContent.answer_1}</p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay={100}>
              <h4>{props.questionContent.question_2}</h4>
              <p>{props.questionContent.answer_2}</p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay={200}>
              <h4>{props.questionContent.question_3}</h4>
              <p>{props.questionContent.answer_3}</p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay={300}>
              <h4>{props.questionContent.question_4}</h4>
              <p>{props.questionContent.answer_4}</p>
            </div>
            <div className="col-lg-6 faq-item" data-aos="fade-up" data-aos-delay={400}>
              <h4>{props.questionContent.question_5}</h4>
              <p>{props.questionContent.answer_5}</p>
            </div>
          </div>
        </div>
      </section>{/* End Frequently Asked Questions Section */}

    </div>


  )
}