if(screen.width < 600) {
    const links = document.querySelector('.links');

    while (links.firstChild) {
        links.removeChild(links.firstChild);
    }
}