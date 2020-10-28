$(document).ready(function() {
    // hover은 마우스가 들어오고 나가는 이벤트 메소드, 따라서 event handler도 두개
    // 보통은 handler이 하나밖에 없음
    $('#gnb>li').hover(
    function() { // 마우스가 올라왔을때 
        // this는 context(문맥), 여기서는 hover가 된 li만으로 적용 대상 국한
        $('.submenu', this).stop().slideDown();
    }, 
    function() { // 마우스가 빠졌을때
        $('.submenu', this).stop().slideUp();
    });

    // 자바스크립트에서는 처음 들어간 값에 따라 선언
    // var 안붙이면 무조건 전역변수
    var idx = 0;

    // 함수 정의
    function mainSlide() {
        // 변수가 함수를 가리킬수 있다
        // setInterval을 통해 지정한 시간마다 실행 가능
        ms = setInterval(function() {
            // 웹 프로그래밍에서 문자는 무조건 따옴표로 감싼다.
            // 아래처럼 { 속성명:값, 속성명:값, ... } 식으로 쓰는 것을 json(JavaScript Object Notation)이라 한다
            $('#mainSlide>a>img').eq(idx).animate({left:'-100%'}, 1000)
            .animate({left:'100%'}, 0);
            idx == 2 ? idx=0 : idx++;
            $('#mainSlide>a>img').eq(idx).animate({left:'0%'}, 1000)
        }, 5000);
    }
    
    // 함수 호출
    mainSlide();

    $('#mainSlide').hover(
        function(){
            // 마우스가 들어오면 멈춤
            // clearInterval 통해 멈춤
            clearInterval(ms);
        }, 
        function(){
            mainSlide();
        });
});
