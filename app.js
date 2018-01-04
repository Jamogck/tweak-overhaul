
var tweakHeading = "You should do some tweaking.",
	tweakDesc    = "Start with a Website Action Plan.",
	overhaulHeading = "You may be in for a redesign.",
	overhaulDesc    = "Schedule a call with me to discuss.";

$('.step').each(function() {
	var currentStep = $(this);
	$(currentStep).find('input[type="submit"]').click(function(e) {
		e.preventDefault();
			if ($('.currentStep').hasClass('step-4')) {
				nextStep(currentStep);
				tallyHo();
			} else {
				nextStep(currentStep);
			}
	});
})

function nextStep(currentStep) {
	if(currentStep.hasClass('currentStep')) {
       currentStep.removeClass('currentStep');
       currentStep.next().addClass('currentStep');
    }
}

function tallyHo() {
	var budget  = $('input[name="budget"]:checked').val(),
	    rwd     = $('input[name="rwd"]:checked').val(),
		brand   = $('input[name="brand"]:checked').val(),
		rev     = $('input[name="rev"]:checked').val();

	$('#budget').text(budget);
	$('#rwd').text(rwd);
	$('#rev').text(rev);
	$('#brand').text(brand);

	if ( budget === 'smaller' ) {
		$('#budget').prepend('<img src="icons/sm-budget.svg" alt="less than $10,000 budget">');
	} else if ( budget === 'larger' ) {
		$('#budget').prepend('<img src="icons/lg-budget.svg" alt="less than $10,000 budget">');
	}

	if ( rwd === 'friendly' ) {
		$('#rwd').prepend('<img src="icons/rwd.svg" alt="less than $10,000 budget">');
	} else if ( rwd === 'unfriendly' ) {
		$('#rwd').prepend('<img src="icons/rwd-desktop.svg" alt="less than $10,000 budget">');
	}

	if ( brand === 'on' ) {
		$('#brand').prepend('<img src="icons/onbrand.svg" alt="less than $10,000 budget">');
	} else if ( brand === 'off brand' ) {
		$('#brand').prepend('<img src="icons/offbrand.svg" alt="less than $10,000 budget">');
	}

	if ( rev === 'Looking to improve' ) {
		$('#rev').prepend('<img src="icons/rev-yes.svg" alt="less than $10,000 budget">');
	} else if ( rev === 'none' ) {
		$('#rev').prepend('<img src="icons/rev-no.svg" alt="less than $10,000 budget">');
	}

	if ( budget === 'smaller' && rev === 'Looking to improve' || budget === 'smaller' && brand === 'off brand') {
		$('.prognosis').html('<h3>You should do some tweaking.</h3><p>My <a href="#">Website Action Plan</a> is a great starting point.</p>');
	} else if ( budget === 'larger' && brand === 'off brand' || budget === 'larger' && rwd === 'unfriendly' && rev === 'none' ) {
		$('.prognosis').html('<h3>You may consider a website redesign.</h3><p>We should hop on a call to discuss.<p>')
	} else if ( budget === 'larger' && rev === 'Looking to improve' && brand === 'on' && rwd === 'unfriendly' ) {
		$('.prognosis').html('<h3>You should do some tweaking.</h3><p>Your website seems to be performing well for you. However, redesigning some important pages for mobile devices would probably boost revenue. I\'d recommend starting with the <a href="#">Website Action Plan</a> to plot a course.<p>')
	} else if ( budget === 'smaller' &&  rev === 'none' && brand === 'on' && rwd === 'unfriendly') {
		$('.prognosis').html('<h3>You should shop for a website template.</h3><p>Something like <a href="#">Squarespace</a> may be a good fit to ensure a healthy ROI.<p>')
	}
}
