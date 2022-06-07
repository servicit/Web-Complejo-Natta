class NoticesSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
/*--------------------------------------------------------------
# Notices-section
--------------------------------------------------------------*/
.notice {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.general-blog {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.notice .entry {
    padding: 10px;
    margin-bottom: 60px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.notice .entry .entry-img {
    max-height: 255px;
    margin: -20px -20px 20px -20px;
    overflow: hidden;
}

.notice .entry .entry-title {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    padding: 0;
    margin: 0 0 20px 0;
}

.notice .entry .entry-title a:hover {
    color: var(--buttons-color);
}

.notice .entry .entry-meta {
    margin-bottom: 15px;
    color: #c1c8d0;
}

.notice .entry .entry-meta ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

.notice .entry .entry-meta ul li + li {
    padding-left: 20px;
}

.notice .entry .entry-meta i {
    font-size: 14px;
    padding-right: 4px;
}

.notice .entry .entry-content p {
    line-height: 24px;
    font-size: 15px;
}

.notice .entry .entry-content h3 {
    font-size: 22px;
    margin-top: 30px;
    font-weight: bold;
}


@media (max-width: 1300px) {
    .notice .entry .entry-title {
        font-size: 15px;
    }

    .notice .entry .entry-content p {
        font-size: 12px;
    }
}

@media (max-width: 992px) {
    .notice .entry .entry-title {
        font-size: 15px;
        line-height: normal;
    }

    .notice .entry li {
        font-size: 15px;

    }
}


@media (max-width: 600px) {
    .notice .entry .entry-title {
        font-size: 15px;
        line-height: normal;
        margin-bottom: 8px;
    }

    .notice .entry li {
        font-size: 12px;

    }

    .notice .entry .entry-meta {
        margin-bottom: 8px;
    }

    .notice .entry .entry-content p {
        line-height: normal;
    }

    .notice .entry {
        margin-bottom: 25px;
    }
}
</style>
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
              <img src="./assets/img/colegio3.jpeg" alt="" class="img-fluid">
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

        <div class="col-lg-4 col-md-10 " data-aos="fade-up">
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
