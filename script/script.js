$(document).ready(function () {
  var swiper = new Swiper(".timeline-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  // // Variables to track scroll positions and threshold
  // let lastScrollTop = 0;
  // let scrollThreshold = 200; // Minimum scroll distance (in pixels)

  // // Scroll event listener with sensitivity control
  // $(window).on("scroll", function () {
  //   var scrollTop = $(this).scrollTop();
  //   var scrollDistance = scrollTop - lastScrollTop;

  //   if (Math.abs(scrollDistance) > scrollThreshold) {
  //     if (scrollDistance > 0) {
  //       // Scrolling down
  //       swiper.slideNext();
  //     } else {
  //       // Scrolling up
  //       swiper.slidePrev();
  //     }
  //     lastScrollTop = scrollTop; // Update the last scroll position
  //   }
  // });
});

$(".contact-form-input input, .contact-form-input textarea").focus(function () {
  $(this).parents(".contact-form-inner").addClass("active");
});

$(".contact-form-input input, .contact-form-input textarea").blur(function () {
  var inputValue = $(this).val();
  if (inputValue == "") {
    $(this).removeClass("filled");
    $(this).parents(".contact-form-inner").removeClass("active");
  } else {
    $(this).addClass("filled");
  }
});

$(document).ready(function () {
  var items = [
    { text: "Alabama", id: "alabama_id" },
    { text: "Alaska", id: "alaska_id" },
    { text: "Arizona", id: "arizona_id" },
    { text: "Arkansas", id: "arkansas_id" },
    { text: "California", id: "california_id" },
    { text: "Colorado", id: "colorado_id" },
    { text: "Connecticut", id: "connecticut_id" },
    { text: "Delaware", id: "delaware_id" },
    {
      text: "District Of Columbia",
      id: "districtofcolumbia_id",
      dataTarget: "DOC",
    },
    { text: "Florida", id: "florida_id" },
    { text: "Georgia", id: "georgia_id" },
    { text: "Illinois", id: "illinois_id" },
    { text: "Indiana", id: "indiana_id" },
    { text: "Iowa", id: "iowa_id" },
    { text: "Kansas", id: "kansas_id" },
    { text: "Kentucky", id: "kentucky_id" },
    { text: "Louisiana", id: "louisiana_id" },
    { text: "Maine", id: "maine_id" },
    { text: "Maryland", id: "maryland_id" },
    { text: "Massachusetts", id: "massachusetts_id" },
    { text: "Michigan", id: "michigan_id" },
    { text: "Minnesota", id: "minnesota_id" },
    { text: "Mississippi", id: "mississippi_id" },
    { text: "Missouri", id: "missouri_id" },
    { text: "Montana", id: "montana_id" },
    { text: "Nebraska", id: "nebraska_id" },
    { text: "Nevada", id: "nevada_id" },
    { text: "New Hampshire", id: "newhampshire_id" },
    { text: "New Jersey", id: "newjersey_id" },
    { text: "New Mexico", id: "newmexico_id" },
    { text: "New York", id: "newyork_id" },
    { text: "North Carolina", id: "northcarolina_id" },
    { text: "Ohio", id: "ohio_id" },
    { text: "Oklahoma", id: "oklahoma_id" },
    { text: "Oregon", id: "oregon_id" },
    { text: "Pennsylvania", id: "pennsylvania_id" },
    { text: "Rhode Island", id: "rhodeisland_id" },
    { text: "South Carolina", id: "southcarolina_id" },
    { text: "South Dakota", id: "southdakota_id" },
    { text: "Tennessee", id: "tennessee_id" },
    { text: "Texas", id: "texas_id" },
    { text: "Utah", id: "utah_id" },
    { text: "Vermont", id: "vermont_id" },
    { text: "Virginia", id: "virginia_id" },
    { text: "Washington", id: "washington_id" },
    { text: "West Virginia", id: "westvirginia_id" },
    { text: "Wisconsin", id: "wisconsin_id" },
    { text: "Wyoming", id: "wyoming_id" },
  ];

  $.each(items, function (index, item) {
    var dataTarget =
      item.dataTarget || item.text.toLowerCase().replace(/\s+/g, "");
    $("#states-list").append(
      $("<li>")
        .attr("id", item.id)
        .attr(
          "class",
          "text-[14px] sm:text-[15px] text-[#868686] font-light pb-[5px] cursor-pointer hover:scale-125 transition-all"
        )
        .attr("data-target", dataTarget)
        .text(item.text)
    );
  });
});

if ($(window).width() < 1024) {
  $(".plan-btn a").click(function () {
    if ($(this).hasClass("active")) {
      $(this).parent().parent().parent().find(".width").slideUp();
      $(this).removeClass("active");
    } else {
      $(".accordion2 .width").slideUp();
      $(".plan-btn a").removeClass("active");
      $(this).parent().parent().parent().find(".width").slideDown();
      $(this).addClass("active");
    }
  });
} else {
  const horizontalAccordions = $(".accordion2.width");

  horizontalAccordions.each((index, element) => {
    const accordion = $(element);
    const collapse = accordion.find(".collapse");
    const bodies = collapse.find("> *");
    accordion.height(accordion.height());
    bodies.width(bodies.eq(0).width());
    collapse.not(".show").each((index, element) => {
      $(element)
        .parent()
        .find("[data-toggle='collapse']")
        .addClass("collapsed");
    });
  });
}

$(document).ready(function () {
  let isScrolling = false; // Flag to prevent multiple triggers
  const tabButtons = $(".tab-button");
  const tabContents = $(".tab-content");

  function activateTab(tabId) {
    // Remove active class from all tab buttons
    tabButtons.removeClass("active");

    // Hide all tab contents
    tabContents.removeClass("active");

    // Show the clicked tab content and add active class to the clicked button
    $("#" + tabId).addClass("active");
    $(".tab-button[data-tab='" + tabId + "']").addClass("active");

    // Update arrows for the active tab
    updateArrows(tabId);
  }

  function updateArrows(tabId) {
    var activeTabContent = $("#" + tabId);
    var activeButton = $(".tab-button.active");

    // Previous arrow
    if (activeButton.prev(".tab-button").length) {
      activeTabContent.find(".prev-arrow").removeClass("disabled");
    } else {
      activeTabContent.find(".prev-arrow").addClass("disabled");
    }

    // Next arrow
    if (activeButton.next(".tab-button").length) {
      activeTabContent.find(".next-arrow").removeClass("disabled");
    } else {
      activeTabContent.find(".next-arrow").addClass("disabled");
    }
  }

  tabButtons.click(function () {
    var tabId = $(this).data("tab");
    activateTab(tabId);
  });

  // Activate the first tab by default
  tabButtons.first().click();

  // Arrow functionality
  $(document).on("click", ".prev-arrow", function (e) {
    e.preventDefault();
    var activeButton = $(".tab-button.active");
    var prevButton = activeButton.prev(".tab-button");

    if (prevButton.length) {
      var prevTabId = prevButton.data("tab");
      activateTab(prevTabId);
    }
  });

  $(document).on("click", ".next-arrow", function (e) {
    e.preventDefault();
    var activeButton = $(".tab-button.active");
    var nextButton = activeButton.next(".tab-button");

    if (nextButton.length) {
      var nextTabId = nextButton.data("tab");
      activateTab(nextTabId);
    }
  });

  // Intersection Observer to detect sticky section
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Tab section is in view
          $(window).on("wheel", handleScroll);
        } else {
          // Tab section is out of view
          $(window).off("wheel", handleScroll);
        }
      });
    },
    { threshold: 1 }
  ); // Adjust threshold as needed

  observer.observe($(".tab-section")[0]);

  function handleScroll(event) {
    if (isScrolling) return; // Prevent multiple triggers
    isScrolling = true;

    const activeButton = $(".tab-button.active");
    if (event.originalEvent.deltaY > 0) {
      // Scroll down
      var nextButton = activeButton.next(".tab-button");
      if (nextButton.length) {
        var nextTabId = nextButton.data("tab");
        activateTab(nextTabId);
      }
    } else {
      // Scroll up
      var prevButton = activeButton.prev(".tab-button");
      if (prevButton.length) {
        var prevTabId = prevButton.data("tab");
        activateTab(prevTabId);
      }
    }

    setTimeout(() => (isScrolling = false), 300); // Reset the flag after a timeout
  }
});

$(document).ready(function () {
  // Add hover event to all <p> elements with the class 'hover-target'
  $(".coaste-state-box li").hover(
    function () {
      // Get the target path ID from the data attribute of the <p> tag
      var targetId = $(this).data("target");
      // console.log(targetId);
      // Add the 'hovered-path' class to the corresponding SVG path
      $("#" + targetId).addClass("hovered-path");
    },
    function () {
      // Remove the 'hovered-path' class when mouse leaves the <p> tag
      var targetId = $(this).data("target");
      $("#" + targetId).removeClass("hovered-path");
    }
  );
});
$(document).ready(function () {
  // Add hover event to all <p> elements with the class 'hover-target'
  $(".state-shape").hover(function () {
    console.log("hello");
  });
});
function loadHTML(url, elementId) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch((error) => console.error("Error loading HTML:", error));
}

loadHTML("images/svg/map.svg", "svg-container");
$(document).ready(function () {
  $(".state-shape").hover(
    function () {
      $(this).addClass("hovered"); // Add class on hover
    },
    function () {
      $(this).removeClass("hovered"); // Remove class when hover ends
    }
  );
});
$("#alabama").on("click", function () {
  alert();
});

$(document).ready(function () {
  new WOW().init();
});

$(".toggle-btn").click(function (e) {
  e.preventDefault();
  // $("body").toggleClass("active");
  $(".nav-items-box").toggleClass("active");
  // $("header").toggleClass("scrolled");
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    // You can adjust the scroll position threshold
    $("header").addClass("scrolled");
    $(".nav-items-box").removeClass("active");
    // $("body").removeClass("slip");
  } else {
    $("header").removeClass("scrolled");
  }
});

$("#currentYear").text(new Date().getFullYear());

var swiper = new Swiper(".heroSlider", {
  loop: true,
  pagination: {
    el: ".slider__pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  },
});

var swiper = new Swiper(".homeSlider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".clientSwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

    var swiper = new Swiper(".clientSlider2", {
      loop: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      // slidesPerView: 2,
      autoHeight: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
      },
    });