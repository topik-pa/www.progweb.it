/*A plugin to listen to images load completition*/
/*(function($) {
    $.fn.imgLoad = function(callback) {
        return this.each(function() {
            if (callback) {
                //if (this.complete || *for IE 10-* $(this).height() > 0) {
                    callback.apply(this);
                } else {
                    $(this).on('load', function() {
                        callback.apply(this);
                    });
                }
            }
        });
    };
})(jQuery);*/


/*Track the swipe directions*/
(function ($) {
    $.fn.swipe = function (callback) {
        var touchDown = false,
            originalPosition = null,
            $el = $(this);

        function swipeInfo(event) {
            var x = event.originalEvent.pageX,
                y = event.originalEvent.pageY,
                dx, dy;

            dx = (x > originalPosition.x) ? "right" : "left";
            dy = (y > originalPosition.y) ? "down" : "up";

            return {
                direction: {
                    x: dx,
                    y: dy
                },
                offset: {
                    x: x - originalPosition.x,
                    y: originalPosition.y - y
                }
            };
        }

        $el.on("touchstart mousedown", function (event) {
            touchDown = true;
            originalPosition = {
                x: event.originalEvent.pageX,
                y: event.originalEvent.pageY
            };
        });

        $el.on("touchend mouseup", function () {
            touchDown = false;
            originalPosition = null;
        });

        $el.on("touchmove mousemove", function (event) {
            if (!touchDown) {
                return;
            }
            var info = swipeInfo(event);
            callback(info.direction, info.offset);
        });

        return true;
    };
})(jQuery);



var prescriptionApp = (function () {

    var _pageData = {};

    var $mainContainer = $('#main-wrapper');
    var $inputElem = $('#pageData');
    var scrollDirection;
    


    return {

        setPageData: function () {
            if ($inputElem.length > 0) {
                _pageData.country = $inputElem.data('country');
                _pageData.device = $inputElem.data('device');
            }
        },


        getPageData: function () {
            return _pageData;
        },


        manageLazyLoading: function () {
            $.extend($.lazyLoadXT, {
                edgeY: 200,
                visibleOnly: false
            });
        },


        manageWindowPosition: function () { //Load the gif version when user scrolls and starts the lens animation

            var active = true;
            var gifUrl = './img/Logo-engr-480px_v3.gif';
            var $img = $('#changeOnScrollImg');
            var offsetLogoSlider = 1500;
            var offsetLensSlider = 500;

            var checkPosition = utils.debounce(function () {
                if (active && window.pageYOffset >= offsetLogoSlider) {
                    active = false;
                    $img.attr('src', gifUrl);
                    $img.attr('data-src', gifUrl);
                }
                if (window.pageYOffset >= offsetLensSlider) {
                    $('#lenses').addClass('rotate');
                }
            }, 50);

            checkPosition();

            $(window).scroll(function () {
                checkPosition();
            });
        },


        imageSlider: function () {
            var $container = $('#image-slider');
            var $current = $container.find('.current');
            var $next = $current.next();
            var $prev = $current.prev();

            var timer;
            var timerInverse;
            var sliding = false;
            var slideFrameRate = 60;
            var fadingTime = 800;

            $(window).load(function () {
                $container.find('.loading').fadeOut(fadingTime, function () {
                    goSlide(function () {
                        /*if (_pageData.device === "Desktop" && navigator.userAgent.match(/iPad/i) === null) {
                            prescriptionApp.setCustomCursor($container);
                        }*/
                    });
                    $container.find('.loading').remove();
                });
            });

            var goNext = function () {
                $current.removeClass('current');
                $next.addClass('current');
                update($next);
            };

            var goPrev = function () {
                $current.removeClass('current');
                $prev.addClass('current');
                update($prev);
            };

            var update = function ($currentElem) {
                $current = $currentElem;
                $next = $current.next();
                $prev = $current.prev();
            };

            var goSlide = function (callback) {
                if (!sliding) {
                    sliding = true;
                    clearInterval(timerInverse);
                    timer = window.setInterval(function () {
                        if ($next.length > 0) {
                            goNext();
                        } else {
                            clearInterval(timer);
                            sliding = false;
                            if (callback) {
                                callback();
                            }
                        }
                    }, slideFrameRate);
                }
            };

            var goSlideInverse = function () {
                if (!sliding) {
                    sliding = true;
                    clearInterval(timer);
                    timerInverse = window.setInterval(function () {
                        if ($prev.length > 0) {
                            goPrev();
                        } else {
                            clearInterval(timerInverse);
                            sliding = false;
                        }
                    }, slideFrameRate);
                }
            };

            // http://stackoverflow.com/questions/10940896/mousewheel-event-detection-not-currently-working-in-firefox
            /*$container.on('mousewheel DOMMouseScroll', function(e) {
                e.preventDefault();
                clearInterval(timer);
                clearInterval(timerInverse);
                var delta = e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 ? 1 : -1;
                if (delta < 0) {
                    if ($prev.length > 0) {
                        goPrev();
                    }
                } else {
                    if ($next.length > 0) {
                        goNext();
                    }
                }
            });*/


            $container.on('touchend click', function () {
                if ($next.length > 0) {
                    goSlide();
                }
                if ($prev.length > 0) {
                    goSlideInverse();
                }
            });
        },


        setCustomCursor: function ($container) {
            $container.append('<div id="customCursor">Custom cursor</div>');
            $container.on('mousemove', function (ev) {
                $('#customCursor').css({
                    'transform': 'translateY(' + ev.offsetY + 'px) translateX(' + ev.offsetX + 'px)',
                    'top': 'auto',
                    'left': 'auto'
                });
            });
            $container.on('mouseenter', function () {
                $('#customCursor').css('opacity', 1);
            });
            $container.on('mouseleave', function () {
                $('#customCursor').css('opacity', 0);
            });
        },


        scrollDown: function () {
            $('#scrolldown').click(function (e) {
                e.preventDefault();
                $('body').scrollTo($('#second'), 800);
            });
        },


        manageRayBanLogoSlider: function () {
            var $sliderWrap = $('#rayBanLogoSlider ul');
            var $sliderLI = $sliderWrap.find('li');
            var slideWidth = _pageData.device == 'Desktop' ? 460 : 320;
            var currentSlideIndex;
            var direction = 'right';
            var slider;

            var manageClickOnSlide = function () {
                $sliderLI.click(function () {
                    currentSlideIndex = slider.getCurrentSlide();
                    if (currentSlideIndex === $sliderLI.length - 1) {
                        direction = 'left';
                    }
                    if (currentSlideIndex === 0) {
                        direction = 'right';
                    }
                    if (direction === 'right') {
                        slider.goToNextSlide();
                    } else {
                        slider.goToPrevSlide();
                    }
                });
            };

            slider = $sliderWrap.bxSlider({
                infiniteLoop: false,
                pager: true,
                controls: false,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: slideWidth,
                hideControlOnEnd: true,
                touchEnabled: true,
                swipeThreshold: 50,
                oneToOneTouch: true,
                preventDefaultSwipeX: false,
                preventDefaultSwipeY: false,

                onSliderLoad: function () {
                    $("#rayBanLogoSlider img").css("visibility", "visible");
                    manageClickOnSlide();
                },

                onSlideAfter: function (currentSlideHtmlObject, totalSlideQty, currentSlideNumber) {
                    if (currentSlideNumber == 2) {
                        $mainContainer.trigger('scroll'); //For lazy loader
                    }
                },

                onSlideBefore: function (currentSlideHtmlObject, totalSlideQty, currentSlideNumber) {
                    if (currentSlideNumber == 2) {
                        return;
                    }
                    var $currentSlideImg = $sliderLI.eq(currentSlideNumber).find('.front');
                    var currentSrc = $currentSlideImg.attr('src');

                    var cleanSrc;

                    if (currentSrc.indexOf('?ver=') > 0) {
                        cleanSrc = currentSrc.substring(0, currentSrc.indexOf('?ver='));
                    } else {
                        cleanSrc = currentSrc;
                    }

                    var newSrc = cleanSrc + '?ver=' + Math.random(5);

                    $currentSlideImg.removeAttr('src');

                    $currentSlideImg.attr('src', newSrc);

                }
            });
        },


        lensChooser: function () {
            if ($('#lens-chooser').length === 0) {
                return;
            }
            var $lenses = $('#lenses');
            var $allLenses = $('#lente .lente');
            var lensToDisplayIndex;
            var $scrollSensibleArea = $('#scroll-sensible-area');

            var moveLens = function () {

                var $currentLens = $('#lente .current');
                $currentLens.removeClass('current');
                $allLenses.eq(lensToDisplayIndex).addClass('current');

                //$mainContainer.trigger('scroll'); //for lazyloading

                var timer = window.setTimeout(function () {
                    $(document).trigger('rotationApplied', lensToDisplayIndex);
                }, 50);

            };


            //Which lens I have to display?
            var calculateLensToDisplay = function () {
                var inlineStyle = $('#lenses')[0].getAttribute('style');
                index = inlineStyle.substr(inlineStyle.indexOf('(') + 1);
                index = index.substr(0, index.indexOf('deg'));

                lensToDisplayIndex = index <= 0 ? Math.abs((Math.round(index) / 36) % 10) : (10 - (Math.round(index) / 36) % 10) % 10;
            };

            propeller = new Propeller($lenses, {
                inertia: 0.8,
                step: 36,
                stepTransitionTime: 300,
                onStop: function () {
                    $lenses.trigger('msTransitionEnd');
                }
            });

            //$lenses.on("webkitTransitionEnd transitionend msTransitionEnd", function () {
            $lenses.on("transitionend, msTransitionEnd", function () {
                calculateLensToDisplay();
                moveLens(lensToDisplayIndex);
            });

            // http://stackoverflow.com/questions/10940896/mousewheel-event-detection-not-currently-working-in-firefox
            $scrollSensibleArea.on('mousewheel DOMMouseScroll customScroll', function (e) {
                e.preventDefault();
                scrollLIstener(e);
            });


            $lenses.on('click', function (e) {
                e.preventDefault();
                var customEvent = jQuery.Event("customScroll", {
                    delta: 1
                });
                $scrollSensibleArea.trigger(customEvent);
            });

            scrollLIstener = utils.debounce(function (e) {
                var delta;
                if (e.delta) {
                    delta = e.delta; //custom scroll
                } else {
                    delta = e.originalEvent.detail ? e.originalEvent.detail : e.originalEvent.wheelDelta; //mouse scroll
                }

                scrollDirection = delta > 0 ? 1 : -1;

                if (scrollDirection > 0) {
                    $lenses.css({
                        rotate: '-=36deg'
                    });
                } else {
                    $lenses.css({
                        rotate: '+=36deg'
                    });
                }

                $lenses.trigger('msTransitionEnd');

            }, 80);
        },


        initLensChooserTextSlider: function () {

            var $btnUP = $('#lensChooserTextSlider .top');
            var $btnDOWN = $('#lensChooserTextSlider .bottom');
            var $target = $('#scroll-sensible-area');
            var slider;
            var rotating = false;

            slider = $('#lensChooserTextSlider ul').bxSlider({
                mode: 'vertical',
                speed: 100,
                slideMargin: 0,
                moveSlides: 1,
                minSlides: 10,
                infiniteLoop: true,
                pager: false,
                controls: false,
                onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
                    currentSlideHtmlObject = parseInt(currentSlideHtmlObject + 10);
                    $('.active-slide').removeClass('active-slide');
                    $('.fade-1').removeClass('fade-1');
                    $('.fade-2').removeClass('fade-2');
                    $('.fade-3').removeClass('fade-3');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject).addClass('active-slide');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject - 1).addClass('fade-1');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject + 1).addClass('fade-1');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject - 2).addClass('fade-2');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject + 2).addClass('fade-2');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject - 3).addClass('fade-3');
                    $('#lensChooserTextSlider li').eq(currentSlideHtmlObject + 3).addClass('fade-3');
                },
                onSliderLoad: function () {
                    $('#lensChooserTextSlider li').eq(10).addClass('active-slide');

                    $('#lensChooserTextSlider li').eq(11).addClass('fade-1');

                    $('#lensChooserTextSlider li').eq(12).addClass('fade-2');

                    $('#lensChooserTextSlider li').eq(13).addClass('fade-3');

                    $('#lensChooserTextSlider li').eq(9).addClass('fade-1');

                    $('#lensChooserTextSlider li').eq(8).addClass('fade-2');

                    $('#lensChooserTextSlider li').eq(7).addClass('fade-3');
                }
            });

            $(document).on('rotationApplied', function (event, slideIndex) {
                if(rotating) {
                    return;
                }

                var timerId;
                var finalLabel;
                var current = slider.getCurrentSlide();

                rotating = true;

                //Bxslider has an inverted index for slides...
                if (slideIndex === 0) {
                    finalLabel = 0;
                }
                else {
                    finalLabel = 10 - slideIndex;
                }

                var goToNextSlides = function () {
                    slider.goToNextSlide();
                    current = slider.getCurrentSlide();
                    if (current === finalLabel) {
                        clearInterval(timerId);
                        $(document).trigger('rotationFinished');
                    }
                };

                var goToPrevSlides = function () {
                    slider.goToPrevSlide();
                    current = slider.getCurrentSlide();
                    if (current === finalLabel) {
                        clearInterval(timerId);
                        $(document).trigger('rotationFinished');
                    }
                };


                if (scrollDirection > 0) {
                    timerId = setInterval(function () {
                        goToPrevSlides();
                    }, 5);
                }
                if (scrollDirection < 0) {
                    timerId = setInterval(function () {
                        goToNextSlides();
                    }, 5);
                }


            });

            $(document).on('rotationFinished', function () {
                rotating = false;
            });


            $btnUP.click(function () {
                var customEvent = jQuery.Event("customScroll", {
                    delta: 1
                });
                $target.trigger(customEvent);
            });

            $btnDOWN.click(function () {
                var customEvent = jQuery.Event("customScroll", {
                    delta: -1
                });
                $target.trigger(customEvent);
            });

        },


        initLensChooserMobileSlider: function () {
            slider = $('#colorRangeMobileSlider ul').bxSlider({
                slideMargin: 0,
                infiniteLoop: true,
                minSlides: 1,
                maxSlides: 3,
                pager: false,
                slideWidth: 272,
                preloadImages: 'all',
                moveSlides: 1,
                swipeThreshold: 0,
                onSlideBefore: function () {
                    $mainContainer.trigger('scroll'); //For lazy loader
                }
            });

        },


        manageExperienceImage: function () {
            var $container = $('#rayBanExperienceSlider');
            var $traslatedSection = $('#traslatedSection');
            var $image = $container.find('img');
            var $buttons = $container.find('.button');
            var $prev = $container.find('.prev');
            var $next = $container.find('.next');
            var currentTraslationId = 1;
            var arrValues;
            var screenWidth = screen.width;

            switch (true) {
                case (screenWidth < 360):
                    arrValues = [0, -275, -565, -912, -1280, -1680, -2030, -2310, -2690, -3040, -3416, -3730, -4080, -4320];
                    break;
                case (screenWidth <= 414):
                    arrValues = [0, -230, -520, -870, -1235, -1635, -1985, -2265, -2645, -2995, -3370, -3685, -4035, -4275];
                    break;
                case (screenWidth < 480):
                    arrValues = [0, -230, -520, -870, -1235, -1635, -1985, -2265, -2645, -2995, -3370, -3685, -4035, -4275];
                    break;
                case (screenWidth < 568):
                    arrValues = [0, -210, -480, -840, -1200, -1600, -1950, -2235, -2615, -2965, -3335, -3650, -4000, -4245];
                    break;
                case (screenWidth < 640):
                    arrValues = [0, -160, -440, -800, -1160, -1560, -1910, -2200, -2575, -2925, -3300, -3610, -3960, -4200];
                    break;
                case (screenWidth < 667):
                    arrValues = [0, -130, -410, -770, -1130, -1530, -1880, -2170, -2545, -2895, -3270, -3580, -3930, -4170];
                    break;
                case (screenWidth < 736):
                    arrValues = [0, -110, -390, -740, -1100, -1500, -1850, -2140, -2515, -2865, -3240, -3550, -3900, -4140];
                    break;
                case (screenWidth < 960):
                    arrValues = [0, -80, -360, -710, -1070, -1470, -1820, -2110, -2485, -2835, -3210, -3520, -3870, -4110];
                    break;
                default:
                    arrValues = [0, 34, -220, -580, -990, -1348, -1660, -2000, -2333, -2690, -3040, -3440, -3710]; //desktop
                    break;
            }

            var disableArrows = function () {
                $prev.removeClass('disabled');
                $next.removeClass('disabled');
                if (currentTraslationId === 1) {
                    $prev.addClass('disabled');
                }
                if (currentTraslationId === arrValues.length - 1) {
                    $next.addClass('disabled');
                }
            };

            $traslatedSection.css({
                'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
            });

            disableArrows();

            $buttons.click(function () {
                currentTraslationId = $(this).data('btnid');
                $buttons.removeClass('active');
                $(this).addClass('active');

                $traslatedSection.css({
                    'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
                });

                disableArrows();
            });

            $prev.click(function () {
                if ($(this).hasClass('disabled')) {
                    return;
                }

                if (currentTraslationId !== 0) {

                    currentTraslationId--;

                    $traslatedSection.css({
                        'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
                    });

                    $buttons.removeClass('active');
                    $('#rayBanExperienceSlider .button[data-btnid="' + currentTraslationId + '"]').addClass('active');

                    disableArrows();
                }
            });

            $next.click(function () {
                if ($(this).hasClass('disabled')) {
                    return;
                }

                if (currentTraslationId !== arrValues.length - 1) {
                    currentTraslationId++;

                    $traslatedSection.css({
                        'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
                    });

                    $buttons.removeClass('active');
                    $('#rayBanExperienceSlider .button[data-btnid="' + currentTraslationId + '"]').addClass('active');

                    disableArrows();
                }
            });


            var scrollOnSwipe = utils.debounce(function (direction) {
                if (direction.x == 'left') {
                    if (currentTraslationId !== arrValues.length - 1) {
                        currentTraslationId++;
                        $traslatedSection.css({
                            'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
                        });

                        $buttons.removeClass('active');
                        $('#rayBanExperienceSlider .button[data-btnid="' + currentTraslationId + '"]').addClass('active');

                        disableArrows();
                    }

                } else {
                    if (currentTraslationId > 1) {
                        currentTraslationId--;
                        $traslatedSection.css({
                            'transform': 'translateX(' + arrValues[currentTraslationId] + 'px)'
                        });

                        $buttons.removeClass('active');
                        $('#rayBanExperienceSlider .button[data-btnid="' + currentTraslationId + '"]').addClass('active');

                        disableArrows();
                    }
                }
            }, 50);


            $traslatedSection.swipe(function (direction, offset) {
                scrollOnSwipe(direction);
                disableArrows();
            });

        },


        manageVideo: function () {
            $('.youtube').click(function (e) {
                e.preventDefault();
                $('body').addClass('video-opened');
                $('#video-overlay').appendTo('body').fadeIn(200);
            });


            $('.close-video').click(function (e) {
                e.preventDefault();
                $('#video-overlay').fadeOut(200);
                $('body').removeClass('video-opened');
                var myPlayer = videojs("my-video_html5_api");
                myPlayer.pause();
            });

            $("#video-overlay").on("touchmove", function (event) {
                event.preventDefault();
            });
        }


    };

}());





$(document).ready(function () {

    prescriptionApp.setPageData();

    var pageData = prescriptionApp.getPageData();

    prescriptionApp.manageLazyLoading();

    prescriptionApp.imageSlider();

    prescriptionApp.manageRayBanLogoSlider();


    if (pageData.device === "Desktop") {
        prescriptionApp.manageWindowPosition();
        prescriptionApp.scrollDown();
        prescriptionApp.lensChooser();
        prescriptionApp.initLensChooserTextSlider();
    }

    if (pageData.device === "Mobile") {
        prescriptionApp.initLensChooserMobileSlider();
    }


    prescriptionApp.manageExperienceImage();

    prescriptionApp.manageVideo();


});
