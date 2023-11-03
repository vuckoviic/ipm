if(screen.width < 600) {
    const links = document.querySelector('.links');

    while (links.firstChild) {
        links.removeChild(links.firstChild);
    }
}

const photoEdits = document.querySelector('.photo-edits');
const photoEditsText = document.querySelector('.photo-edits-text');

const videoEdits = document.querySelector('.video-edits');
const videoEditsText = document.querySelector('.video-edits-text');


photoEdits.addEventListener('mouseover', () => {
    photoEdits.removeChild(photoEditsText);
});

photoEdits.addEventListener('mouseout', () => {
    photoEdits.appendChild(photoEditsText);
});

videoEdits.addEventListener('mouseover', () => {
    videoEdits.removeChild(videoEditsText);
});

videoEdits.addEventListener('mouseout', () => {
    videoEdits.appendChild(videoEditsText);
});