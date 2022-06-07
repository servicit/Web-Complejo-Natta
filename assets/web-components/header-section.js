class HeaderSection extends HTMLElement {
    connectedCallback() {
        // $('.nav-logo').each(function() {
        //     var link = $(this).html();
        //     $(this).contents().wrap('<a href="./index.html"></a>');
        // });
        this.innerHTML = `
<style>

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
.header {
    display: flex;
    justify-content: space-between;
    transition: all 0.5s;
    z-index: 997;
    padding: 14px 0 20px 0;
}

.header .container .menu {
    width: 100%;
    display: flex;
    justify-content: center;
}

.header.header-scrolled {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    background-color: rgba(141, 133, 133, 0.67);;
    padding: 14px 0 20px 0;
    height: 110px;
}

.header.header-inner-pages {
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.header .logo a {
    color: #556270;
}

.header img {
    width: 80px;
    margin-bottom: 20px;
}

/*.nav-logo img{*/
/*    content:url(../img/img.png);*/
/*    }*/
    
@media (max-width: 1000px) {
    #header {
        padding: 8px 0;
    }
}

@media (max-width: 991px) {
    #header.header-scrolled {
        background-color: transparent;
        box-shadow: none;
    }

    .nav-logo {
        display: none;
    }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/* Desktop Navigation */
.nav-menu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

.nav-menu .nav-logo {
    padding: 0 20px;
}

.nav-menu > ul {
    display: flex;
    justify-content: center;
}

.nav-menu > ul > li {
    position: relative;
    white-space: nowrap;
    padding: 27px 10px 10px 10px;
}

.nav-menu a {
    display: block;
    position: relative;
    color: rgba(255, 255, 255, 0.95);
    transition: 0.3s;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
}

.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {
    color: rgba(17, 29, 146, 0.78);
    text-decoration: none;
}

.nav-menu .drop-down ul {
    display: block;
    position: absolute;
    left: 15px;
    top: calc(100% + 30px);
    z-index: 99;
    opacity: 0;
    visibility: hidden;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
    transition: 0.3s;
}

.nav-menu .drop-down:hover > ul {
    opacity: 1;
    top: 100%;
    visibility: visible;
}

.nav-menu .drop-down li {
    min-width: 180px;
    position: relative;
}

.nav-menu .drop-down ul a {
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    text-transform: none;
    color: #556270;
}

.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {
    color: var(--buttons-color);
}

.nav-menu .drop-down > a:after {
    content: "\\ea99";
    font-family: 'Jost', sans-serif;
    padding-left: 5px;
}

.nav-menu .drop-down .drop-down ul {
    top: 0;
    left: calc(100% - 30px);
}

.nav-menu .drop-down .drop-down:hover > ul {
    opacity: 1;
    top: 0;
    left: 100%;
}

.nav-menu .drop-down .drop-down > a {
    padding-right: 35px;
}

.nav-menu .drop-down .drop-down > a:after {
    content: "\\eaa0";
    font-family: 'Jost', sans-serif;
    position: absolute;
    right: 15px;
}

@media (max-width: 1366px) {
    .nav-menu .drop-down .drop-down ul {
        left: -90%;
    }

    .nav-menu .drop-down .drop-down:hover > ul {
        left: -100%;
    }

    .nav-menu .drop-down .drop-down > a:after {
        content: "\\ea9d";
    }
}

@media (max-width: 991px) {
    .get-started-btn {
        margin: 0 48px 0 0;
        padding: 6px 18px;
    }
}

/* Mobile Navigation */
.mobile-nav-toggle {
    position: fixed;
    right: 15px;
    top: 15px;
    z-index: 9998;
    border: 0;
    background: none;
    font-size: 24px;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
}

.mobile-nav-toggle i {
    color: #556270;
}

.mobile-nav {
    position: fixed;
    top: 55px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    z-index: 9999;
    overflow-y: auto;
    background: #fff;
    transition: ease-in-out 0.2s;
    opacity: 0;
    visibility: hidden;
    border-radius: 10px;
    padding: 10px 0;
}

.mobile-nav * {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mobile-nav a {
    display: block;
    position: relative;
    color: #556270;
    padding: 10px 20px;
    font-weight: 500;
    outline: none;
}

.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {
    color: var(--buttons-color);;
    text-decoration: none;
}

.mobile-nav .drop-down > a:after {
    content: "\\ea99";
    font-family: 'Akshar', sans-serif;
    padding-left: 10px;
    position: absolute;
    right: 15px;
}

.mobile-nav .active.drop-down > a:after {
    content: "\\eaa1";
}

.mobile-nav .drop-down > a {
    padding-right: 35px;
}

.mobile-nav .drop-down ul {
    display: none;
    overflow: hidden;
}

.mobile-nav .drop-down li {
    padding-left: 20px;
}

.mobile-nav-overly {
    width: 100%;
    height: 100%;
    z-index: 9997;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(63, 73, 83, 0.6);
    overflow: hidden;
    display: none;
    transition: ease-in-out 0.2s;
}

.mobile-nav-active {
    overflow: hidden;
}

.mobile-nav-active .mobile-nav {
    opacity: 1;
    visibility: visible;
}

.mobile-nav-active .mobile-nav-toggle i {
    color: #fff;
}

</style>

  <header id="header" class="fixed-top header">
    <div class="container d-flex ">
      <div class="menu">
        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li><a href="./assets/pages/about-us.html">Sobre nosotros</a></li>
            <li><a href="#">Colegios</a></li>
            <li class="nav-logo"><a href="./assets/../../index.html"><img class="img-logo" src="./assets/img/img.png" alt=""></a></li>
            <li><a href="">Noticias</a></li>
            <li style="padding-right: 62px"><a href="../../index.html#contact">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
`
    }
}

window.customElements.define('header-section', HeaderSection)
