const shareWrappers = document.querySelectorAll('.share-wrapper');
const shareState = document.querySelector('.share-state');
const authorWrapper = document.querySelector('.author-wrapper');
const shareTooltip = document.querySelector('.share-tooltip');

shareWrappers.forEach(function (share) {
    share.addEventListener('click', function (event) {
        if (window.screen.width < 731) {
            shareState.classList.toggle('active');
            authorWrapper.classList.toggle('hidden');
        } else {
            shareTooltip.classList.toggle('active');
        }
    });
});
