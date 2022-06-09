class ContactSection extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
/*--------------------------------------------------------------
# Contact-section
--------------------------------------------------------------*/
.contact {
    padding-bottom: 70px;
}

.contact:before {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
}

.info {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: flex-end;
}

.contact .container {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.contact .info {
    width: 100%;
}

.contact .info i {
    font-size: 20px;
    background: #0880e8;
    color: #fff;
    float: left;
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    transition: all 0.3s ease-in-out;
}

.contact .info h4 {
    padding: 15px 0 10px 0;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #043c6d;
}

.contact .info p {
    padding: 0 0 0 0;
    margin-bottom: 0;
    font-size: 14px;
    color: #444444;
}

.contact .info .email, .contact .info .phone, .contact .info .address {
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
}

.contact .php-email-form {
    width: 100%;
    background: #fff;
}

.contact .php-email-form .form-group {
    padding-bottom: 8px;
}

.contact .php-email-form .form-group textarea {
    width: 100%;
    height: 500px;
    padding: 12px 17px;
}

.contact .php-email-form .form-group .form-control {
    border: 1px solid #cfd7e7;
    text-align: left !important;
    text-transform: uppercase;
    height: 150px;
    border-radius: 15px;
    background-color: #eef1f6;
    font-size: 11px;
    padding: 17px;
}

.contact .php-email-form .form-group .form-control {
    border: 1px solid #cfd7e7;
    text-align: left !important;
    text-transform: uppercase;
    height: 60px;
    border-radius: 15px;
    background-color: #eef1f6;
    font-size: 11px;
    padding: 17px;
}


.contact .php-email-form .validate {
    display: none;
    color: green;
    margin: 0 0 15px 0;
    font-weight: 400;
    font-size: 13px;
    text-align: center
}

.contact .php-email-form .error-message {
    display: none;
    color: #fff;
    background: blue;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .php-email-form .error-message br + br {
    margin-top: 25px;
}

.contact .php-email-form .sent-message {
    display: none;
    color: #fff;
    background: #18d26e;
    text-align: center;
    padding: 15px;
    font-weight: 600;
}

.contact .php-email-form .loading {
    display: none;
    background: #fff;
    text-align: center;
    padding: 15px;
}

.contact .php-email-form .loading:before {
    content: "";
    display: inline-block;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    margin: 0 10px -6px 0;
    border: 3px solid #18d26e;
    border-top-color: #eee;
    -webkit-animation: animate-loading 1s linear infinite;
    animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input, .contact .php-email-form textarea {
    border-radius: 4px;
    box-shadow: none;
    font-size: 14px;
}

.contact .php-email-form input {
    height: 44px;
}

.contact .php-email-form textarea {
    padding: 10px 12px;
}

.contact .php-email-form button[type="submit"] {
    padding: 10px 32px;
    color: #0880e8;
    transition: 0.4s;
    border-radius: 50px;
    border: 2px solid #0880e8;
    background: #fff;
}

.contact .php-email-form button[type="submit"]:hover {
    background: #0880e8;
    color: #fff;
}

@-webkit-keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate-loading {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@media (max-width: 992px) {
    .contact {
        padding-bottom: 35px;
    }

    .contact .info .email, .contact .info .phone, .contact .info .address {
        margin-top: 15px;
    }

}
</style>
   <!-- ======= Contact Section ======= -->
  <section id="contact" class="contact">
    <div class="container" data-aos="fade-up">

      <div class="section-title col-12">
        <h2>Contacto</h2>
      </div>

      <div class="row d-flex justify-content-center" data-aos="fade-right" data-aos-delay="100">

        <div class="col-lg-10 mt-lg-0" data-aos="fade-left" data-aos-delay="100">

          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="form-row">

              <div class="col-md-4 form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Nombre"
                       data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                <div class="validate"></div>
              </div>

              <div class="col-md-4 form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Email"
                       data-rule="email" data-msg="Please enter a valid email"/>
                <div class="validate"></div>
              </div>

              <div class="col-md-4 form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Asunto"
                       data-rule="minlen:8" data-msg="Por favor escriba al menos 8 caracteres"/>
                <div class="validate"></div>
              </div>

            </div>

            <div class="form-group">
              <textarea class="form-control" name="message" rows="5" data-rule="required"
                        data-msg="Por favor escriba un mensaje" placeholder="Mensaje"
                        style="height: 150px; margin-bottom: 20px"></textarea>
              <div class="validate"></div>
            </div>

            <div class="mb-3 mt-500">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div class="text-center">
              <button type="submit">Enviar mensaje</button>
            </div>
          </form>
        </div>
        <div class="col-lg-12">
          <div class="info col-lg-12">
            <div class="address col-md-4 ">
              <i class="icofont-google-map"></i>
              <h4 class="col-lg-12">Ubicacion</h4>
              <p class="col-lg-12">A108 Street 4352</p>
            </div>
            <div class="email col-md-4">
              <i class="icofont-envelope"></i>
              <h4 class="col-lg-12">Email</h4>
              <p class="col-lg-12">info@example.com</p>
            </div>
            <div class="phone col-md-4">
              <i class="icofont-phone"></i>
              <h4 class="col-lg-12">Telefono</h4>
              <p class="col-lg-12">4113423424</p>
            </div>
          </div>
       </div>
      </div>
    </div>
  </section>
`
    }
}

window.customElements.define('contact-section', ContactSection)
