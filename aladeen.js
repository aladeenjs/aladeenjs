$.fn.aladeen = function(options) {
	console.log('Wassup');
    console.log('▬▬ι═══════ﺤ -═══════ι▬▬');
    console.log('٩(͡๏̯͡๏)۶'); // <-- WTH IS THIS? HAHAHA

	/* ---
	ALADEEN JS COMES WITH A COUPLE OF SPECIAL OPTIONS FOR YOU
	64% OF THE TIME DEVELOPERS PREFER TO SET THEIR ALADEEN OPTION 100% OF THE TIME
	--- */
	var defaults = {
			aladeen: 'slideLeft',
			aladeen: 'fadeIn',
			aladeen : false,
			aladeen: true,
			aladeen: 'Aladeen'
		},
		options = $.extend(defaults, options);

	if(options.aladeen !== 'Aladeen'){
		options.aladeen = 'It\'s Aladeen';
	}
	console.log(options); // PRINTS OUT THE OPTIONS
	return this; // WILL ALLOW FURTHER CHAINING
};