$('.sidenav-link').each(function(i) {
    let main = this;
    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: $(main).attr('href'),
        start: "top center", // when the top of the trigger hits the top of the viewport
        end: 'top bottom',
        scrub: true
        }
    });

    // add animations and labels to the timeline
    $('.sidenav-link').each(function(j) {
        if ($(this).attr('href') === $(main).attr('href')) {
            tl.to($(this), {css: {color: '#34f5c5'}, duration: 0.25}, 0);
        }
        else {
            tl.to($(this), {css: {color: '#e5e5e5'}, duration: 0.25}, 0);
        }
    });
});

$('.sidenav-link').click(function() {
    gsap.to(window, {duration: 1, scrollTo: $(this).attr('href')});
});