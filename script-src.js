function hideDescriptionText() {
	var descriptions = document.getElementsByClassName('description');
	for (var i = 0; i < descriptions.length; i++) {
		descriptions[i].style.padding = '7px 0';
		descriptions[i].getElementsByTagName('p')[0].style.display = 'none';
	}

	var icons = document.getElementsByClassName('icon');
	for (var i = 0; i < icons.length; i++) {
		icons[i].style.margin = '0';
		icons[i].style.width = '37px';
	}

	var info = document.getElementById('info');
	info.style.padding = '0';
	info.style.background = 'none';
	info.getElementsByTagName('p')[0].style.display = 'none';

	var button = document.getElementById('visibility');
	button.setAttribute('onClick','showDescriptionText()');
	button.innerHTML = 'Zobrazit popisky';

	/* Set cookie */
	var d = new Date();
	d.setTime(d.getTime() + (365*24*60*60*1000));
	document.cookie = "guide_brief=;expires=" + d.toUTCString() + "; path=/;";
}

function showDescriptionText() {
	var descriptions = document.getElementsByClassName('description');
	for (var i = 0; i < descriptions.length; i++) {
		descriptions[i].style.removeProperty('padding');
		descriptions[i].getElementsByTagName('p')[0].style.removeProperty('display');
	}

	var icons = document.getElementsByClassName('icon');
	for (var i = 0; i < icons.length; i++) {
		icons[i].style.removeProperty('margin');
		icons[i].style.removeProperty('width');
	}

	var info = document.getElementById('info');
	info.style.removeProperty('padding');
	info.style.removeProperty('background');
	info.getElementsByTagName('p')[0].style.removeProperty('display');

	var button = document.getElementById('visibility');
	button.setAttribute('onClick','hideDescriptionText()');
	button.innerHTML = 'Skrýt popisky';

	/* Remove cookie */
	document.cookie="guide_brief=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
}

function checkCookie() {
	return document.cookie.indexOf('guide_brief=');
}

/* RUN WHEN DOM READY */
if (checkCookie() != -1) {
	hideDescriptionText();
}