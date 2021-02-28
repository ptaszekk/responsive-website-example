$('#view-work').on('click', function () {
	const images = $('#images').position().top;

	$('html, body').animate(
		{
			scrollTop: images,
		},
		900,
	);
	return false;
});

console.log('object');
