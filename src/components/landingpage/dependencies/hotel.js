import React from 'react'

export function Hotel() {
  return (
    <div>
      {/* ======= Our Portfolio Section ======= */}
      <section id="portfolio" className="portfolio section-bg">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="section-title">
            <h2>Our Hotels</h2>
            <p>Hotelfix hotel search allows users to compare hotel prices in just a few clicks from more than 300 booking sites for more than 5.0 million hotels and other types of accommodation in over 190 countries. With 1.4 billion visits annually to our site, travellers regularly use the hotel comparison to compare deals in the same city.</p>
          </div>
          {/* <div className="row">
                        <div className="col-lg-12">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div> */}
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Regent International</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>L Hotel</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Calisian Resort Hotel</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Mount View Resort</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Bellagio Casino Hotel</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Maldives International</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Panaroma Desert Villa</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Concrad Villa</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt />
                <div className="portfolio-info">
                  <h4>HotelFix</h4>
                  <p>Grand Chola</p>
                  <div className="portfolio-links">
                    <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-eye" /></a>
                    <a href="portfolio-details.html" title="More Details"><i className="icofont-external-link" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Our Portfolio Section */}

    </div>
  )
}