class HeaderSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="fixed-top ">
          <div class="container d-flex ">
            <div class="menu">
              <nav class="nav-menu d-none d-lg-block">
                <ul>
                  <li><a href="#">Sobre nosotros</a></li>
                  <li><a href="#">Colegios</a></li>
                  <li class="nav-logo"><a href="../../index.html"><img class="img-logo" src="assets/img/img.png" alt=""></a></li>
                  <li><a href="">Noticias</a></li>
                  <li><a href="#contact">Contacto</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
`}
}

window.customElements.define('header-section', HeaderSection)
