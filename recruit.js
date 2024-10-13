function displaycontent(sectionToShow) {
            // 모든 섹션을 숨기기
            document.querySelector('.submit-three-question').style.display = 'none';
            document.querySelector('.activity-three-question').style.display = 'none';
            document.querySelector('.other-three-question').style.display = 'none';

            // 선택한 섹션만 표시
            document.querySelector('.' + sectionToShow).style.display = 'block';
        }

        // 버튼 클릭 이벤트 설정
window.onload = function () {
    document.getElementById('submit-question').onclick = function () {
        displaycontent('submit-three-question');
    };

    document.getElementById('activity-question').onclick = function () {
        displaycontent('activity-three-question');
    };

    document.getElementById('other-question').onclick = function () {
        displaycontent('other-three-question');
    };
}