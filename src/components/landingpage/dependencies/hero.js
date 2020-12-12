import React from 'react'

export function Hero(props) {
  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero">
        <div className="hero-container">
          <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators" id="hero-carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              {/* Slide 1 */}
              <div className="carousel-item active" style={{ backgroundImage: 'url("assets/img/slide/slide-1.jpg")' }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
  <h2 className="animate__animated animate__fadeInDown">Welcome to <span>{props.heroContent.slideName}</span></h2>
                    <p className="animate__animated animate__fadeInUp">{props.heroContent.slide_1}</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
              {/* Slide 2 */}
              <div className="carousel-item" style={{ backgroundImage: 'url("assets/img/slide/slide-2.jpg")' }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">{props.heroContent.slideName_2}</h2>
                    <p className="animate__animated animate__fadeInUp">{props.heroContent.slide_2}</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
              {/* Slide 3 */}
              <div className="carousel-item" style={{ backgroundImage: 'url("assets/img/slide/slide-3.jpg")' }}>
                <div className="carousel-container">
                  <div className="carousel-content container">
                    <h2 className="animate__animated animate__fadeInDown">{props.heroContent.slideName_3}</h2>
                    <p className="animate__animated animate__fadeInUp">{props.heroContent.slide_3}</p>
                    <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon icofont-rounded-right" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </section>{/* End Hero */}

    </div>
  )
}
