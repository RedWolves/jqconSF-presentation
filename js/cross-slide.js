$(document).ready(function(){
	$("#personal").click(function(){
	$("#personal").crossSlide({
		fade: 1 }, [
		{
			src: 'images/personal1.jpg',
			from: 'center top 1.5x',
			to: '60% 100% 1.2x',
			time: 5
		}, {
			src: 'images/personal2.jpg',
			href: '',
			from: '0% 50% 1.5x',
			to: '80% 0% 1.2x',
			time: 5
		}, 	{
				src: 'images/personal3.jpg',
				href: '',
				from: '50% 50% 1.3x',
				to: '50% 50% 1.8x',
				time: 5
			}, {
				src: 'images/personal4.jpg',
				href: '',
				from: '100% 0% 1x',
				to: '45% 0% 1.5x',
				time: 5
			}	, {
					src: 'images/personal5.jpg',
					href: '',
					from: '0% 0% .9x',
					to: '100% 50% 1.4x',
					time: 5
				},	{
						src: 'images/personal6.jpg',
						from: 'left top .5x',
						to: 'left top .75x',
						time: 5
					}, {
						src: 'images/personal7.jpg',
						href: '',
						from: '0% 50% .30x',
						to: '20% 0% .45x',
						time: 5
					}, {
							src: 'images/personal8.jpg',
							href: '',
							from: '50% 0% .6x',
							to: '100% 50% .75x',
							time: 5
						}, {
							src: 'images/personal9.jpg',
							href: '',
							from: '100% 0% .5x',
							to: '45% 0% .75x',
							time: 5
						}, {
								src: 'images/personal10.jpg',
								href: '',
								from: '0% 0% .7x',
								to: '100% 0% .75x',
								time: 5
							},{
										src: 'images/personal11.jpg',
										href: '',
										from: '100% 0% .6x',
										to: '0% 0% .6x',
										time: 5
									}
		]
	);
	});
});