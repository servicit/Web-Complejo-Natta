/**
 * Template Name: Template-demo - v0.0.1
 * Author: servisIt
 */
!(function ($) {
    "use strict";

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }

    //Contentful connect limit 3 items
    var client = contentful.createClient({
        space: 'rrf8x8ztwkew',
        accessToken: 'URf70KaEdgfgrSf4t6pYgudwg0Gmw-H_wuDIgJexO8A',
    });
    client.getEntries({
        limit: 3,
        content_type: 'post',
    }).then(function (entries) {
        entries.items.forEach(function (entry) {
            $('#last-news').append(`
          <div class="col-lg-4 col-md-10" >
           <a href="notice.html">
            <article class="entry">
              <div class="entry-img">
                <img src="http:${entry.fields.image.fields.file.url}" class="img-fluid" alt="">
              </div>
              <h2 class="entry-title">
                ${entry.fields.title}
              </h2>
              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i>
                    User
                  </li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                    <time datetime="2020-01-01">
                      20/05/2022
                    </time>
                  </li>
                </ul>
              </div>
              <div class="entry-content">
                <p>
                  ${entry.fields.description}
                </p>
              </div>
            </article>
          </a>
         </div>`)
        });
    })

    let state = {
        page: 1,
        limit: 2,
        window: 3,
    }

    const loadNews = () => {
        client.getEntries({
            content_type: 'post',
        }).then(function (entries) {
            const limit = state.limit;
            const totalNews = entries.total;
            const pagesQuantity = Math.ceil(totalNews / limit);

            pageButtons(pagesQuantity)

            client.getEntries({
                content_type: 'post',
                limit: limit,
                skip: (state.page - 1) * limit,
            }).then(function (entries) {
                document.getElementById('news').innerHTML = ''
                entries.items.forEach(function (entry) {
                    $('#news').append(`
          <div class="col-lg-4 col-md-10" >
           <a href="notice.html">
            <article class="entry">
              <div class="entry-img">
                <img src="http:${entry.fields.image.fields.file.url}" class="img-fluid" alt="">
              </div>
              <h2 class="entry-title">
                ${entry.fields.title}
              </h2>
              <div class="entry-meta">
                <ul>
                  <li class="d-flex align-items-center"><i class="icofont-user"></i>
                    User
                  </li>
                  <li class="d-flex align-items-center"><i class="icofont-wall-clock"></i>
                    <time datetime="2020-01-01">
                      20/05/2022
                    </time>
                  </li>
                </ul>
              </div>
              <div class="entry-content">
                <p>
                  ${entry.fields.description}
                </p>
              </div>
            </article>
          </a>
         </div>`)
                });
            })
        })
    }

    loadNews()

    document.getElementById("down-pages").addEventListener("click", () => {
        (--state.page)
        loadNews()
    });

    document.getElementById("up-pages").addEventListener("click", () => {
        (++state.page)
        loadNews()
    });

    //Page buttons
    function pageButtons(pagesQuantity) {
        const generateButtons = document.getElementById('generate-buttons-pagination')
        generateButtons.innerHTML = ''

        let maxLeft = state.page - Math.floor(state.window / 2);
        let maxRight = state.page + Math.floor(state.window / 2);

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = state.window
        }

        if (maxRight > pagesQuantity) {
            maxLeft = pagesQuantity - (state.window - 1)
            maxRight = pagesQuantity

            if (maxLeft < 1) {
                maxLeft = 1
            }
        }

        for (let pageI = maxLeft; pageI <= maxRight; pageI++) {
            generateButtons.innerHTML += `<button value="${pageI}" class="page page-link" >${pageI}</button>`
        }

        if (state.page === 1) {
            $('#previous').addClass('disabled')
        }
        if (state.page !== 1) {
            $('#previous').removeClass('disabled')
        }
        if (state.page === pagesQuantity) {
            $('#next').addClass('disabled')
        }
        if (state.page !== pagesQuantity) {
            $('#next').removeClass('disabled')
        }

        $('.page').on('click', function () {
            state.page = Number($(this).val())
            loadNews()
        })
    }

    // Smooth scroll for the navigation menu and links with .scrollto classes
    var scrolltoOffset = $('#header').outerHeight() - 17;
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function (e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top - scrolltoOffset;

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function (e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function (e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Intro carousel
    var heroCarousel = $("#heroCarousel");
    var heroCarouselIndicators = $("#hero-carousel-indicators");
    heroCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
        (index === 0) ?
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>") :
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
    });

    heroCarousel.on('slid.bs.carousel', function (e) {
        $(this).find('h2').addClass('animate__animated animate__fadeInDown');
        $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Porfolio isotope and filter
    $(window).on('load', function () {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item'
        });

        $('#portfolio-flters li').on('click', function () {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function () {
            $('.venobox').venobox({
                'share': false
            });
        });
    });

    // Skills section
    $('.skills-content').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Init AOS
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out-back",
            once: true
        });
    }

    $(window).on('load', function () {
        aos_init();
    })


})(jQuery);
