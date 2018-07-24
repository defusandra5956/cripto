$( document ).ready(function() {
  $('.multiple-items.terms').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
  });
  $('.multiple-items.news').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
     responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
// Form
  $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please, check your data"
    );

    $('form').validate({
      rules: {
            email: {
                required: true,
                regex: "^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$"
            },
        },
        errorPlacement: function(error, element) {

        },

        submitHandler: function(form) {
            var $submitButton = $(form).find(':submit');
            $submitButton.prop('disabled', false);
            $submitButton.val('Send');
            var data = $(form).serialize();
            $.ajax({
                url: 'server.php',
                data: data,
                success: function(response) {
                    response = jQuery.parseJSON(response);
                    showErrors(response);
                    $submitButton.prop('disabled', true);
                    $submitButton.val('Subscribe');
                },
                method: 'post'
            });
            $("form")[0].reset();
        }
    });
    
    function showErrors(response) {
      if (!response.errors) {
        alert(response.message);
      } else {
        alert("ERRORS");
      }
    }

// Links
    // $(".menu_col>ul>.link, nav>ul>.link, .sub-menu>ul>.link").on("click", "a", function(event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 75;
    //     $('body,html').animate({
    //         scrollTop: top
    //     }, 1500);
    //     $('.navToggle').toggleClass("open");
    //     $("#menu").toggleClass("active");
    // });
// $(".footer_col>ul>li, .try-btn").on("click", "a", function(event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top - 75;
//     $('body,html').animate({
//         scrollTop: top
//     }, 1500);
// });

//sub-header tabs
$('.current_link span').text('All');
$('.current_link.links span').text('Crescent 20 index Fund');
$(".current_link").on("click", function(){
  $('.tab-links.mobile').toggleClass("open");
});

$(".tab-links.mobile li").on("click", function(){
  $('.current_link>span').text($('.tab-links.mobile li.active').text());
  $('.tab-links.mobile').toggleClass("open");
});
//end tabs

//cookies
  $(".accept").on("click", function(){
      $('.cookie').hide();
  });

  $(".pop_key").on("click", function(){
      $('.pop_up').fadeIn();
  });

  $(".cls_btn").on("click", function(){
      $('.pop_up').fadeOut();
  });
//end cookies

//mobile nav
  $(".navToggle").on("click", function(){
    $(this).toggleClass("open");
  $("#menu").toggleClass("active");
  })
//end nav


$(".sub_header .link").on("click", function(){
  $(this).addClass("active");
})

//main page logo scaling
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > 50) {
        jQuery(".header>nav.screen_nav").css("background", "#001738");
        jQuery(".header>nav.screen_nav ul li a").css("color", "#fff");
        $('.header>nav.screen_nav .logo>a>svg').css("width","50px");
        $('.header>nav.screen_nav .logo>a>svg').css("height","50px");
        $('.header>nav.screen_nav .logo>a>svg>path').css("fill","#fff");
    } else {
        jQuery(".header>nav.screen_nav").css("background", "transparent");
        jQuery(".header>nav.screen_nav ul li a").css("color", "#000");
        $('.header>nav.screen_nav .logo>a>svg').css("width","139px");
        $('.header>nav.screen_nav .logo>a>svg').css("height","110px");
        $('.header>nav.screen_nav .logo>a>svg>path').css("fill","rgb(0, 23, 56)");
    }
  });
//end logo

//big tabs
  jQuery(document).ready(function() {
  jQuery('.tabs .tab-links a').on('click', function(e) {
  var currentAttrValue = jQuery(this).attr('href');
  jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
  jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
  e.preventDefault();
  });
  });
//end tabs

// $(".tab").niceScroll({
//     cursorcolor:"#dde2e8",
//     cursorborder:"#dde2e8"
// }); 
$(function() {

  // Set up pie chart and add data.
  var config = {
    type: 'pie',
    options: {
      legend: {
        display: false
      },
      cutoutPercentage: 0.1,
      animation: {
        animateScale: true
      }
    },
    data: {
      labels: ['BTC', 'ETH', 'XRP', 'BCH', 'EOS', 'LTC', 'XLM','TRX', 'NEO',
       'XMR', 'DASH', 'XEM', 'VEN', 'ETC', 'QTUM', 'OMG', 'ICX', 'LSK',
        'ZEC', 'ONT'],
      machineLabels: ['Bitcoin', 'Etherium', 'Ripple', 'Bitcoin Cash', 'EOS', 'Litecoin', 'Stellar',
      'Tron', 'Neo', 'Monero', 'Dash', 'NEM', 'VeChain', 'Etherum Classic', 'Qtum',
       'OmiseGo', 'Icon', 'Lisk', 'Zcash', 'Ontology'],
      sectors:['Store of Value', 'Platform', 'Value Transfer', 'Value Transfer', 'Platform', 
      'Value Transfer', 'Value Transfer', 'Entertaiment Platform',
      'Platform', 'Anonymity', 'Anonymity', 'Platform', 'App Development',
      'Platform', 'Platform', 'Payments', 'Platform', 'Platform', 'Anonymity', 'Anonymity'],
      datasets: [{
        borderWidth: 0,
        backgroundColor: [
          '#DAFFF8',
          '#BCF7EB',
          '#A6F3E4',
          '#96EFDE',
          '#89EAD7',
          '#83E2CF',
          '#6EDBC6',
          '#62D0BA',
          '#53C7B0',
          '#21C4A4',
          '#1ABC9C',
          '#14B696',
          '#0EAB8C',
          '#11A185',
          '#12967C',
          '#138D75',
          '#11816B',
          '#117561',
          '#0F6151',
          '#0D4B3E'
        ],
        data: [44.7, 19.3, 8.7, 6.1, 3.4, 2.4, 1.9, 1.3, 1.3, 1.0, 
        1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0]
      }]
    }
  };

  // Instantiate the pie chart in the canvas element.
  var myPie = new Chart(document.getElementById('progress-chart'), config);
  
  // Register click event to log the clicked label (machine name).
  document.getElementById('progress-chart').onclick = function(evt) {
    var activePoints = myPie.getElementAtEvent(evt);
    var firstPoint = activePoints[0];
    if (firstPoint !== undefined) {
      var clickedItem = config.data.machineLabels[firstPoint._index];
      var clickedLabel = config.data.labels[firstPoint._index];
      var clickedSector = config.data.sectors[firstPoint._index];
      var clickedData = config.data.datasets["0"].data[firstPoint._index];
      $('#asset').text(clickedItem);
      $('#symbol').text(clickedLabel);
      $('#set').text(clickedData);
      $('#sector').text(clickedSector);
    }
  };
  
  // Add the legend in custom area to allow CSS theming.
  document.getElementById('chart-legend').innerHTML = myPie.generateLegend();
  
});



});

