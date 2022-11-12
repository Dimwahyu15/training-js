const paragraph = 'Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela 	oleh serigala ketika harimau mendekati gajah.';
	const regex = /sang gajah|serigala|harimau/gi;
	const found = paragraph.match(regex);

	console.log(found);