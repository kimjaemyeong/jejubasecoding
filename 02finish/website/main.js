window.addEventListener('load', () => {
    const btn = document.querySelector('.global-menu-btn');

    function onBtnClick() {
        // add: 추가
        // remove: 삭제
        // toggle: 뺏다 넣었다
        // contains: 포함 여부
        document.body.classList.toggle('menu-on');
    }

    btn.addEventListener('click', onBtnClick);
});