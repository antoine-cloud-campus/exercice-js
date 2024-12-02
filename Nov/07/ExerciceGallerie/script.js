document.addEventListener('DOMContentLoaded', function () {
    function changeMainImage(fullImageSrc, captionText) {
        document.getElementById('main-image').src = fullImageSrc;
        document.getElementById('caption').textContent = captionText;
    }

    document.querySelectorAll('.sidebar img').forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const fullImageSrc = thumbnail.getAttribute('data-full');
            const captionText = thumbnail.getAttribute('data-caption');
            changeMainImage(fullImageSrc, captionText);
        });
    });
});