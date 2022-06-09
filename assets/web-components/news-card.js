class newsCard extends HTMLElement {
    constructor() {
        super();
        this.newstitle;
        this.description;
        this.user;
        this.date;
    }

    static get observedAttributes() {
        return ['newstitle', 'description', 'user', 'date']
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "newstitle":
                this.newstitle = newValue;
                break;
            case "description":
                this.description = newValue;
                break;
            case "date":
                this.date = newValue;
                break;
            case "user":
                this.user = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
<style>

/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/

:root {
    --buttons-color: rgba(0, 19, 224, 0.67);
    --font-size-991px: 30px;
    --font-size-768px: 28px;
    --font-size-550px: 25px;
    --font-size-400px: 20px;
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/

@font-face {
    font-family: LeBeauneNew;
    src: url("../fonts/LeBeauneNew.otf") format("opentype");
}

/*--------------------------------------------------------------
# Notices
--------------------------------------------------------------*/

 .entry {
    min-height:560px;
    padding: 10px;
    margin-bottom: 60px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

 .entry .entry-img {
    max-height: 255px;
    margin: -20px -20px 20px -20px;
    overflow: hidden;
}

.general-blog .notice a :hover img {
    transform: scale(1.1);
    -webkit-transition: .5s transform ease;
}

 .entry .entry-title {
    font-size: 18px;
    line-height: 22px;
    font-weight: bold;
    padding: 0;
    margin: 0 0 20px 0;
}

 .entry .entry-title a:hover {
    color: var(--buttons-color);
    text-decoration: none;
}

 .entry .entry-content .read-more a:hover {
  background: #0880e8;
}

 .entry .entry-meta {
    margin-bottom: 15px;
    color: #0880e8;
}

 .entry .entry-meta ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
}

 .entry .entry-meta ul li + li {
    padding-left: 20px;
}

 .entry .entry-meta i {
    font-size: 14px;
    padding-right: 4px;
}

 .entry .entry-content p {
    line-height: 24px;
    font-size: 15px;
}

 .entry .entry-content h3 {
    font-size: 22px;
    margin-top: 30px;
    font-weight: bold;
}
</style>
     <div>
          <a href="notice.html">
            <article class="entry">

              <div class="entry-img">
                <img src="./assets/img/img_1.png" alt="" class="img-fluid">
              </div>
              <h2 class="entry-title">
                ${this.newstitle}
              </h2>
              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i>
                    ${this.user}
                  </li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                    <time datetime="2020-01-01">
                      ${this.date}
                    </time>
                  </li>
                </ul>
              </div>
              <div class="entry-content">
                <p>
                   ${this.description}
                </p>
              </div>
            </article>
          </a>
     </div>
`
    }
}

window.customElements.define('news-card', newsCard)
