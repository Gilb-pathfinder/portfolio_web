/*================
 Template Name: 
 Description: 
 Version: 1.0
 Author: https://themeforest.net/user/themetags
=======================*/
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");

  // Start Gsap
  if (document.body.getAttribute('data-animation') === "true" && window.matchMedia("(min-width: 767px)").matches) {
    initGsapAnimations();
  }
  function initGsapAnimations() {
    // Register GSAP and ScrollTrigger plugins
    gsap.registerPlugin(ScrollTrigger);

    // Split the text into characters for title animations
    const splitHeading = new SplitText(".title_animation", {
      type: "chars"
    });
    gsap.utils.toArray(".title_animation").forEach(element => {
      // Split the text into characters for each element
      const splitHeading = new SplitText(element, {
        type: "chars"
      });
      const delay = element.getAttribute("ani-delay") || 0; // Default to 0 if no attribute

      // Create a timeline for each element
      gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }).from(splitHeading.chars, {
        duration: 0.05,
        opacity: 0.5,
        y: 10,
        stagger: 0.04,
        ease: "power2.out"
      });
    });
    // Fade Bottom
    gsap.utils.toArray(".fade_bottom").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.from(element, {
        duration: 1.5,
        opacity: 0,
        y: 30,
        ease: "power2.out",
        delay: delay,
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none none"
        }
      });
    });

    // Fade Top
    gsap.utils.toArray(".fade_top").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.from(element, {
        duration: 1.5,
        opacity: 0,
        y: -30,
        ease: "power2.out",
        delay: delay,
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none none"
        }
      });
    });

    // Fade Left
    gsap.utils.toArray(".fade_left").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.from(element, {
        duration: 1.5,
        opacity: 0,
        x: -30,
        ease: "power2.out",
        delay: delay,
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Fade Right
    gsap.utils.toArray(".fade_right").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.from(element, {
        duration: 1.5,
        opacity: 0,
        x: 30,
        ease: "power2.out",
        delay: delay,
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // img_animation_size
    gsap.utils.toArray(".img_animation_size").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.from(element, {
        duration: 1.5,
        opacity: 0,
        x: '-5%',
        clipPath: 'inset(0 100% 0 0)',
        ease: 'power1.inOut',
        delay: delay,
        force3D: true,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    // Scroll left
    gsap.utils.toArray(".scroll_left").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.to(element, {
        x: -360,
        duration: 3,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          scrub: 2,
          start: "top 50%",
          end: "bottom 20%",
          markers: false
        }
      });
    });

    // Scroll Scale & Move
    gsap.utils.toArray(".scale_image").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;

      // Optional: force transform to avoid browser/layout issues
      gsap.set(element, {
        willChange: "transform",
        force3D: true
      });
      gsap.from(element, {
        scale: 10.5,
        rotate: 360,
        x: -350,
        y: -570,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 20%",
          end: "bottom 2%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Scroll Width
    gsap.utils.toArray(".scroll_width").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.to(element, {
        width: "1550px",
        duration: 3,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 50%",
          end: "bottom 20%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Scroll Width Small To Large
    gsap.utils.toArray(".scroll_width_sl").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.from(element, {
        width: "1550px",
        duration: 3,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Scroll Scale
    gsap.utils.toArray(".scroll_scale").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.from(element, {
        scale: .9,
        // Change this to your desired scale factor
        duration: 3,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Scroll Scale N
    gsap.utils.toArray(".scroll_scale_n").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.to(element, {
        scale: .4,
        // Change this to your desired scale factor
        duration: 3,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 65%",
          end: "bottom 20%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Scroll Scale Service 2
    gsap.utils.toArray(".service_item_2.ani").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      gsap.to(element, {
        scale: .6,
        // Change this to your desired scale factor
        opacity: 0,
        duration: 2,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 25%",
          end: "bottom 15%",
          scrub: 2,
          markers: false
        }
      });
    });

    // Title Two
    gsap.utils.toArray(".scroll_text_1").forEach(element => {
      // Wrap each character in a <div>
      let newText = "";
      const text = element.innerText;
      for (let i = 0; i < text.length; i++) {
        newText += `<div style="display:inline-block;">${text[i] === " " ? "&nbsp;" : text[i]}</div>`;
      }
      element.innerHTML = newText;

      // Animate each <div> on scroll
      gsap.fromTo(element.querySelectorAll("div"), {
        opacity: 0,
        y: 90
      }, {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.03,
        ease: "elastic(1.2, 0.5)",
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          toggleActions: "restart none none reverse"
        }
      });
    });

    // Text Color
    let scroll_color_elements = gsap.utils.toArray(".scroll_color");
    if (scroll_color_elements.length) {
      scroll_color_elements.forEach(element => {
        const split = new SplitText(element, {
          type: "words"
        });
        gsap.set(element, {
          perspective: 400
        });
        gsap.fromTo(split.words, {
          color: "#444"
        },
        // initial color
        {
          color: "#FCFCFD",
          // final color
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
            markers: false // enable if needed
          },
          ease: "none"
        });
      });
    }

    // Text Color 2
    let scroll_color_dark = gsap.utils.toArray(".scroll_color_dark");
    if (scroll_color_dark.length) {
      scroll_color_dark.forEach(element => {
        const split = new SplitText(element, {
          type: "words"
        });
        gsap.set(element, {
          perspective: 400
        });

        // Get the string values for colors directly
        const initColor = element.getAttribute("data-init-color") || "#000000";
        const finalColor = element.getAttribute("data-final-color") || "#FFFFFF";
        gsap.fromTo(split.words, {
          color: initColor
        }, {
          color: finalColor,
          stagger: 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 30%",
            scrub: true,
            markers: false
          },
          ease: "none"
        });
      });
    }

    // Paralax 1
    gsap.utils.toArray(".paralax_1").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      window.addEventListener("mousemove", e => {
        const {
          clientX,
          clientY
        } = e;
        const moveX = (clientX - window.innerWidth / 2) * delay; // Adjust sensitivity
        const moveY = (clientY - window.innerHeight / 2) * delay; // Adjust sensitivity

        gsap.to(element, {
          x: moveX,
          y: moveY,
          ease: "power2.out",
          duration: 0.5,
          delay: delay
        });
      });
    });

    // Home 1 Cta
    gsap.utils.toArray(".blog_area_1 ").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay"));
      gsap.to(element, {
        scrollTrigger: {
          trigger: ".blog_area_1",
          start: "top top",
          // When the top of .fix_animation hits the top of the viewport
          end: "bottom top",
          // Pin ends when bottom of .fix_animation hits the top of viewport
          pin: true,
          // Pin the element in place
          pinSpacing: false,
          // Disable spacing so the next section can scroll over it
          scrub: true // Makes the animation follow the scroll
        }
      });
    });

    // Team 1
    gsap.utils.toArray(".team_ani_1").forEach(element => {
      const delay = parseFloat(element.getAttribute("data-ami-delay")) || 0;
      const rotateVal = parseFloat(element.getAttribute("data-ami-rotate")) || 0;
      gsap.from(element, {
        rotate: rotateVal,
        // Change this to your desired scale factor
        duration: 4,
        delay: delay,
        scrollTrigger: {
          trigger: element,
          start: "top 45%",
          end: "bottom 80%",
          scrub: 2,
          markers: false
        }
      });
    });
  }
  // End Gsap

  // Slide Up
  const slideUp = (target, duration = 500) => {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  // Slide Down
  const slideDown = (target, duration = 500) => {
    target.style.removeProperty("display");
    let display = window.getComputedStyle(target).display;
    if (display === "none") display = "block";
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };

  // Slide Toggle
  const slideToggle = (target, duration = 500) => {
    if (target.attributes.style === undefined || target.style.display === "none") {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  };

  // Primary Menu
  const mdScreen = "(max-width: 991px)";
  const mdScreenSize = window.matchMedia(mdScreen);
  const containSub1 = document.querySelectorAll(".contain-sub-1 > a");
  const containMegaMenu = document.querySelectorAll(".contain-mega-menu > a");
  const mdScreenSizeActive = screen => {
    if (screen.matches) {
      // if menu has sub
      containSub1.forEach(e => {
        e.addEventListener("click", el => {
          el.preventDefault();
          el.stopPropagation();
          el.target.classList.toggle("active");
          const menuSub = e.nextElementSibling;
          slideToggle(menuSub, 500);
        });
      });
      // if menu has sub end

      // if menu has mega menu
      containMegaMenu.forEach(e => {
        e.addEventListener("click", el => {
          el.preventDefault();
          el.stopPropagation();
          el.target.classList.toggle("active");
          const menuSub = e.nextElementSibling;
          slideToggle(menuSub, 500);
        });
      });
      // if menu has mega menu end
    } else {
      containSub1.forEach(e => {
        e.addEventListener("click", el => {
          el.preventDefault();
        });
      });
      containMegaMenu.forEach(e => {
        e.addEventListener("click", el => {
          el.preventDefault();
        });
      });
    }
  };
  mdScreenSize.addEventListener("change", e => {
    if (e.matches) {
      window.location.reload();
      mdScreenSizeActive(e);
    } else {
      mdScreenSize.removeEventListener("change", e => {
        mdScreenSizeActive(e);
      });
      window.location.reload();
    }
  });
  mdScreenSizeActive(mdScreenSize);

  // Sticky Header
  window.addEventListener("scroll", () => {
    const fixedHeader = document.querySelector(".navbar-overlay");
    const navbarTop = document.querySelector(".navbar-top");
    if (navbarTop) {
      const navTop = navbarTop.offsetHeight;
      const scrolled = window.scrollY;
      const navbarTopRemove = () => {
        if (scrolled > navTop) {
          body.classList.add("navbar-top-toggle");
        } else if (scrolled < navTop) {
          body.classList.remove("navbar-top-toggle");
        } else {
          body.classList.remove("navbar-top-toggle");
        }
      };
      navbarTopRemove();
    }
    if (fixedHeader) {
      const headerTop = fixedHeader.offsetTop;
      const scrolled = window.scrollY;
      if (scrolled > headerTop) {
        body.classList.add("navbar-sticky-init");
      } else {
        body.classList.remove("navbar-sticky-init");
      }
    }
  });

  // Button Move
  document.querySelectorAll('.leadership_item').forEach(item => {
    const btn = item.querySelector('.arrow_circle_btn');
    item.addEventListener('mousemove', e => {
      const rect = item.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // Get button dimensions
      const btnWidth = btn.offsetWidth;
      const btnHeight = btn.offsetHeight;

      // Clamp values to keep button inside container
      x = Math.max(btnWidth / 2, Math.min(x, rect.width - btnWidth / 2));
      y = Math.max(btnHeight / 2, Math.min(y, rect.height - btnHeight / 2));
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
    });
    item.addEventListener('mouseleave', () => {
      btn.style.left = '';
      btn.style.top = '';
    });
  });
  // Button Move

  // Horizontal Scrolling
  const scrollers = document.querySelectorAll(".scroller-x");
  scrollers.forEach(scroller => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller-x__list");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
  // Horizontal Scrolling

  // Cursor Follow
  let cursor = document.querySelector(".cursor");
  let cursor2 = document.querySelector(".cursor2");
  let cursorScale = document.querySelectorAll(".cursor-scale");
  let mouseX = 0;
  let mouseY = 0;
  if (cursor && cursor2) {
    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        gsap.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
        gsap.set(cursor2, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });
    window.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    cursorScale.forEach(link => {
      link.addEventListener("mousemove", () => {
        cursor.classList.add("grow");
        if (link.classList.contains("small")) {
          cursor.classList.remove("grow");
          cursor.classList.add("grow-small");
        }
      });
      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("grow");
        cursor.classList.remove("grow-small");
      });
    });
  } else {
    console.warn("Cursor elements not found in the DOM.");
  }
  // Cursor Follow

  // Process
  const processItems = document.querySelectorAll('.process_item');
  const contentItems = document.querySelectorAll('.content_item');
  processItems.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      // Remove 'active' from all process and content items
      processItems.forEach(item => item.classList.remove('active'));
      contentItems.forEach(item => item.classList.remove('active'));

      // Add 'active' to clicked process item and corresponding content item
      btn.classList.add('active');
      if (contentItems[index]) {
        contentItems[index].classList.add('active');
      }
    });
  });
  // Process 

  // Leadarship
  document.querySelectorAll('.leadership_item').forEach(item => {
    const btn = item.querySelector('.arrow_circle_btn');
    item.addEventListener('mousemove', e => {
      if (isScrolling) return; // ⛔ Prevent while scrolling

      const rect = item.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      const btnWidth = btn.offsetWidth;
      const btnHeight = btn.offsetHeight;
      x = Math.max(btnWidth / 2, Math.min(x, rect.width - btnWidth / 2));
      y = Math.max(btnHeight / 2, Math.min(y, rect.height - btnHeight / 2));
      btn.style.left = `${x}px`;
      btn.style.top = `${y}px`;
    });
    item.addEventListener('mouseleave', () => {
      btn.style.left = '';
      btn.style.top = '';
    });
  });

  // Leadarship

  // ScrollerY
  const scrollersY = document.querySelectorAll(".scroller-y");
  scrollersY.forEach(scroller => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller-y__list");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
  // ScrollerY

  // Feedback Slider 1
  const feedbackOne = document.querySelector(".feedback_one");
  if (feedbackOne) {
    const progressBar = feedbackOne.querySelector('.swiper-progress-bar');
    const swiper = new Swiper(feedbackOne, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
            progressBar.style.transition = 'width 100ms linear';
          }
        },
        slideChangeTransitionStart() {
          if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
          }
        },
        slideChangeTransitionEnd() {
          if (progressBar) {
            progressBar.style.transition = `width ${swiper.params.autoplay.delay}ms linear`;
            progressBar.style.width = '100%';
          }
        }
      }
    });
  }

  // Feedback Slider 3
  const feedbackThree = document.querySelector(".feedback_items_3");
  if (feedbackThree) {
    const swiper = new Swiper(feedbackThree, {
      effect: "cards",
      grabCursor: true,
      loop: true,
      speed: 700,
      autoplay: false,
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 1
        }
      }
    });
  }

  // Feedback 4
  const feedbackFour = document.querySelector(".feedback_4_wrapper");
  if (feedbackFour) {
    const swiper = new Swiper(feedbackFour, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      }
    });
  }

  // Case Study 1 Slider
  const caseSliderkOne = document.querySelector(".case_study_slider");
  if (caseSliderkOne) {
    const progressBar = caseSliderkOne.querySelector('.swiper-progress-bar');
    const swiper = new Swiper(caseSliderkOne, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      effect: 'cube',
      cubeEffect: {
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
            progressBar.style.transition = 'width 100ms linear';
          }
        },
        slideChangeTransitionStart() {
          if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
          }
        },
        slideChangeTransitionEnd() {
          if (progressBar) {
            progressBar.style.transition = `width ${swiper.params.autoplay.delay}ms linear`;
            progressBar.style.width = '100%';
          }
        }
      }
    });
  }

  // Case Study 2 Slider
  const caseSliderkTwo = document.querySelector(".case_study_slider_2");
  if (caseSliderkTwo) {
    const swiper = new Swiper(caseSliderkTwo, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      effect: 'cube',
      cubeEffect: {
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      }
    });
  }

  // Blog 2 Slider
  const blogTwoSlider = document.querySelector(".blog_wrapper_2");
  if (blogTwoSlider) {
    const swiper = new Swiper(blogTwoSlider, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
  }

  // Project 1
  const ProjectOne = document.querySelector(".project_slider");
  if (ProjectOne) {
    const swiper = new Swiper(ProjectOne, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      autoplay: {
        delay: 3000,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar"
        },
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
  }

  // Project Slider2
  const projectSliderDetails = document.querySelector(".project_slider_details");
  if (projectSliderDetails) {
    const progressBar = projectSliderDetails.querySelector('.swiper-progress-bar');
    const swiper = new Swiper(projectSliderDetails, {
      loop: true,
      speed: 700,
      spaceBetween: 24,
      effect: 'cube',
      cubeEffect: {
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      grabCursor: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: '.swiper_button_next',
        prevEl: '.swiper_button_prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
            progressBar.style.transition = 'width 100ms linear';
          }
        },
        slideChangeTransitionStart() {
          if (progressBar) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
          }
        },
        slideChangeTransitionEnd() {
          if (progressBar) {
            progressBar.style.transition = `width ${swiper.params.autoplay.delay}ms linear`;
            progressBar.style.width = '100%';
          }
        }
      }
    });
  }
});

/**
 * Preloader
 */
const preloader = document.querySelector("#preloader");
window.addEventListener("load", () => {
  if (preloader) {
    preloader.style.display = "none";
  }
});
$(function () {
  "use strict";

  $(".popup-init").magnificPopup({
    type: "iframe"
  });
});
$(window).on("scroll", function () {
  var scrollBarPosition = $(window).scrollTop();
  $(".tt-vertical-step ul li a").each(function () {
    var sectionId = $(this).attr("href");
    var sectionOffset = $(sectionId).offset().top - 100;
    var sectionHeight = $(sectionId).outerHeight();
    if (scrollBarPosition >= sectionOffset && scrollBarPosition < sectionOffset + sectionHeight) {
      // Step 1: Remove 'active' from all links
      $(".tt-vertical-step ul li a").removeClass("active");
      $(this).addClass("active");

      // Step 2: Remove 'active' from all step-section divs
      $(".step-section").removeClass("active");

      // Step 3: Add 'active' to the current section
      $(sectionId).addClass("active");
    }
  });
});