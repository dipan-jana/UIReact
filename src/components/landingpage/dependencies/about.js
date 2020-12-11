import React from 'react'

export class About extends React.Component {

  render() {
    return (
      <div>
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-6 video-box">
                <img src="assets/img/about.jpg" className="img-fluid" alt />
                <a href={this.props.content.video_1} className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true" />
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center about-content">
                <div className="section-title">
                  <h2 link href='#about'>About Us</h2>
                  <p>{this.props.content.string_1}</p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon"><i className="bx bx-fingerprint" /></div>
                  <h4 className="title"><a href>{this.props.content.string_2}</a></h4>
                  <p className="description">{this.props.content.string_3}</p>
                </div>
                <div className="icon-box" data-aos="fade-up" data-aos-delay={100}>
                  <div className="icon"><i className="bx bx-gift" /></div>
                  <h4 className="title"><a href>{this.props.content.string_4}</a></h4>
                  <p className="description">{this.props.content.string_5}</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End About Us Section */}
        {/* ======= About Lists Section ======= */}
        <section className="about-lists">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up">
                <span>01</span>
                <h4>Lorem Ipsum</h4>
                <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
              </div>
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={100}>
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
              </div>
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={200}>
                <span>03</span>
                <h4> Ad ad velit qui</h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              </div>
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={300}>
                <span>04</span>
                <h4>Repellendus molestiae</h4>
                <p>Inventore quo sint a sint rerum. Distinctio blanditiis deserunt quod soluta quod nam mider lando casa</p>
              </div>
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={400}>
                <span>05</span>
                <h4>Sapiente Magnam</h4>
                <p>Vitae dolorem in deleniti ipsum omnis tempore voluptatem. Qui possimus est repellendus est quibusdam</p>
              </div>
              <div className="col-lg-4 col-md-6 content-item" data-aos="fade-up" data-aos-delay={500}>
                <span>06</span>
                <h4>Facilis Impedit</h4>
                <p>Quis eum numquam veniam ea voluptatibus voluptas. Excepturi aut nostrum repudiandae voluptatibus corporis sequi</p>
              </div>
            </div>
          </div>
        </section>{/* End About Lists Section */}


      </div>
    );
  }
}