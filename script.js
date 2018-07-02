var menu = document.getElementById("menu-list");
var menuIcon = document.getElementById("menu-icon")

var browse = document.getElementById("browse-list");
var browseIcon = document.getElementById("browse-icon");

window.onclick = function(event) {
	if (event.target.matches('#menu-button')) {
		menu.classList.toggle("active");
		if (menu.classList.contains("active")) {
			menuIcon.innerHTML = "close";
		} else {
			menuIcon.innerHTML = "menu";
		}
	} else if (menu != event.target && !menu.contains(event.target)) {
		menu.classList.remove("active");
		menuIcon.innerHTML = "menu";
	}
	if (event.target.matches('#browse-button')) {
		browse.classList.toggle("active");
		if (browse.classList.contains("active")) {
			browseIcon.innerHTML = "cancel";
		} else {
			browseIcon.innerHTML = "arrow_drop_down_circle";
		}
	} else if (browse != event.target && !browse.contains(event.target)) {
		browse.classList.remove("active");
		browseIcon.innerHTML = "arrow_drop_down_circle";
	} 
}