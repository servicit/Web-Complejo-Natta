class FooterSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
.footer {
    background: url("./assets/img/footer.jpg") center no-repeat;
    color: #fff;
    font-size: 14px;
    position: relative;
    width: 100%;
    margin-top: 10px;

}

.footer::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.60);
    z-index: 1;
}

.footer .footer-top {
    position: relative;
    z-index: 2;
    text-align: center;
    padding: 80px 0 30px 0;
}

.footer .footer-top .footer-logo img {
    height: 80px;
}

.footer .footer-top h3 {
    font-size: 36px;
    font-weight: 700;
    color: #fff;
    position: relative;
    font-family: "LeBeauneNew", serif;
    padding: 30px 0 0 0;
    margin-bottom: 0;
}

.footer .footer-top p {
    font-size: 15px;
    font-style: italic;
    margin: 30px 0 0 0;
    padding: 0;
}

.footer .footer-top .footer-newsletter {
    text-align: center;
    font-size: 15px;
    margin-top: 30px;
}


.footer .footer-top .footer-newsletter form input[type="email"] {
    border: 0;
    padding: 4px 8px;
    width: calc(100% - 100px);
}

.footer .footer-bottom {
    z-index: 2;
    position: relative;
    padding-top: 0;
    padding-bottom: 80px;
}

.footer .copyright {
    text-align: center;
}

.footer .credits {
    text-align: center;
    font-size: 13px;
    padding-top: 5px;
}

</style>

  <!-- ======= Footer ======= -->
<footer class="footer">

  <div class="footer-top">

    <div class="container">

      <div class="row justify-content-center">
        <div class="col-lg-6">
          <a href="" class="scrollto footer-logo"><img src="./assets/img/logo/logo.png" alt=""></a>
          <h3>Complejo Natta</h3>
        </div>
      </div>

    </div>
  </div>

  <div class="container footer-bottom clearfix">
    <div class="copyright">
      &copy; Copyright <strong><span>Complejo Natta</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed to ServicIt
    </div>
  </div>
</footer><!-- End Footer -->
`
    }
}

window.customElements.define('footer-section', FooterSection)
