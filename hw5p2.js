function goToNewPage(myForm) {
	// using window.open instead of window.location to open selected index in a new tab/window
    var myStore = window.open(myForm.storeList.options[myForm.storeList.selectedIndex].value);
    window.open = myStore;
    //reload the page so user can use multiple times
    window.location.reload();
}