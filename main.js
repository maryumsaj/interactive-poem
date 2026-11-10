function zoomIn() {
    var Page = document.getElementById('body');
    var zoom = parseInt(Page.style.zoom) + 10 +'%'
    Page.style.zoom = zoom;
    return false;

}

function zoomOut() {
    var Page = document.getElementById('body');
    var zoom = parseInt(Page.style.zoom) - 10 +'%'
    Page.style.zoom = zoom;
    return false;

}
