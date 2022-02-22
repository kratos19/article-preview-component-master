const shareWrappers = document.querySelectorAll('.share-wrapper');
const shareState = document.querySelector('.share-state');
const authorWrapper = document.querySelector('.author-wrapper');

shareWrappers.forEach(function (share) {
    share.addEventListener('click', function (event) {
        shareState.classList.toggle('active');
        authorWrapper.classList.toggle('hidden');
    });
});
