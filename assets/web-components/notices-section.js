class NoticesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<section>
  <div class="container col-lg-12 col-xl-10 ">
    <div class="section-title" data-aos="fade-up">
      <h2>Ultimas noticias</h2>
    </div>
    <div class=" general-blog">
      <div class="notice col-lg-11 d-flex justify-content-center">
      
        <div class="col-lg-4 col-md-10 " data-aos="fade-up">
          <article class="entry">

            <div class="entry-img">
              <img src="./assets/img/img_3.png" alt="" class="img-fluid">
            </div>

            <h2 class="entry-title">
              Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
            </h2>

            <div class="entry-meta">
              <ul>
                <li class="d-flex align-items-center"><i class="icofont-user"></i>
                  John Doe
                </li>
                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                  <time datetime="2020-01-01">Jan 1, 2020</time>
                </li>
              </ul>
            </div>

            <div class="entry-content">
              <p>
                Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
              </p>
            </div>

          </article>
        </div>

        <div class="col-lg-4  col-md-10 " data-aos="fade-up">
          <article class="entry">
            <div class="entry-img">
              <img src="./assets/img/img_1.png" alt="" class="img-fluid">
            </div>
            <h2 class="entry-title">
              Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
            </h2>
            <div class="entry-meta">
              <ul>
                <li class="d-flex align-items-center"><i class="icofont-user"></i>
                  John Doe
                </li>
                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                  <time datetime="2020-01-01">Jan 1, 2022</time>
                </li>
              </ul>
            </div>
            <div class="entry-content">
              <p>
                 Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et

              </p>
            </div>
          </article>
        </div>
          
        <div class="col-lg-4  col-md-10 d-flex " data-aos="fade-up">
          <article class="entry">
            <div class="entry-img">
              <img src="./assets/img/img_2.png" alt="" class="img-fluid">
            </div>
            <h2 class="entry-title">
              Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia
              sint.
            </h2>
            <div class="entry-meta">
              <ul>
                <li class="d-flex align-items-center">
                  <i class="icofont-user">
                  </i>John Doe
                </li>
                <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                  <time datetime="2022-05-06">Mayo 6, 2022</time>
                </li>
              </ul>
            </div>
            <div class="entry-content">
              <p>
               Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>

  </div>
</section>
`
    }
}

window.customElements.define('notices-section', NoticesSection)