$(function(){
    /* datepicker 시작 */
    //시작일
    $('#datepicker_start').datepicker({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,altFormat: "DD, d MM, yy"// alt 데이터 포멧
        ,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        // ,changeYear: true //콤보박스에서 년 선택 가능
        // ,changeMonth: true //콤보박스에서 월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        ,showButtonPanel: true	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
        ,showAnim : "slideDown"// option 종류 : "show" , "slideDown", "fadeIn", "blind", "bounce", "clip", "drop", "fold", "slide"
        // 년 월이 셀렉트 박스로 표현 되어서 선택할 수 있다.
        ,showOptions: { direction: "up" } //달력 보여줄때 이벤트 옵션
        ,prevText: '이전 달'	// 마우스 오버시 이전달 텍스트
        ,nextText: '다음 달'	// 마우스 오버시 다음달 텍스트
        ,closeText: '닫기' // 닫기 버튼 텍스트 변경
        ,currentText: '오늘' // 오늘 텍스트 변경
        ,duration: "fast" //달력 나타나는 속도, "slow", "normal", "fast"
        ,buttonImage: "images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']	//한글 캘린더중 월 표시를 위한 부분
        ,monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']	//한글 캘린더 중 월 표시를 위한 부분
        ,dayNames: ['일', '월', '화', '수', '목', '금', '토']	//한글 캘린더 요일 표시 부분
        ,dayNamesShort: ['일', '월', '화', '수', '목', '금', '토']	//한글 요일 표시 부분
        ,dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']	// 한글 요일 표시 부분
        ,minDate: "-2Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "0D" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        // ,onClose: function(selectedDate) {} datepicker가 닫힐 때
        ,onSelect: function () {
            // 시작일(fromDate) datepicker가 선택될 때
            // 종료일(toDate)의 선택할 수 있는 최소 날짜(minDate)를 선택한 시작일로 지정
            let minDate = $(this).datepicker('getDate');
            clearStart = setTimeout(function() {
                $("#datepicker_end").datepicker( "option", "minDate", minDate );
                $('img.ui-datepicker-trigger').attr('align', 'absmiddle');
                // $('.ui-datepicker').css({ "margin-left" : "-30px", "margin-right": "auto"});  //달력(calendar) 위치 
            }, 300);
        }
    });
    
    //종료일
    $('#datepicker_end').datepicker({
        dateFormat: 'yy-mm-dd' //Input Display Format 변경
        ,altFormat: "DD, d MM, yy"// alt 데이터 포멧
        ,showOtherMonths: false //빈 공간에 현재월의 앞뒤월의 날짜를 표시
        ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
        // ,changeYear: true //콤보박스에서 년 선택 가능
        // ,changeMonth: true //콤보박스에서 월 선택 가능                
        ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시
        ,showButtonPanel: true	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
        ,showAnim : "slideDown"// option 종류 : "show" , "slideDown", "fadeIn", "blind", "bounce", "clip", "drop", "fold", "slide"
        // 년 월이 셀렉트 박스로 표현 되어서 선택할 수 있다.
        ,showOptions: { direction: "up" } //달력 보여줄때 이벤트 옵션
        ,prevText: '이전 달'	// 마우스 오버시 이전달 텍스트
        ,nextText: '다음 달'	// 마우스 오버시 다음달 텍스트
        ,closeText: '닫기' // 닫기 버튼 텍스트 변경
        ,currentText: '오늘' // 오늘 텍스트 변경
        ,duration: "fast" //달력 나타나는 속도, "slow", "normal", "fast"
        ,buttonImage: "images/calendar.gif" //버튼 이미지 경로
        ,buttonImageOnly: true //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함
        ,buttonText: "선택" //버튼에 마우스 갖다 댔을 때 표시되는 텍스트                
        ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
        ,monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']	//한글 캘린더중 월 표시를 위한 부분
        ,monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']	//한글 캘린더 중 월 표시를 위한 부분
        ,dayNames: ['일', '월', '화', '수', '목', '금', '토']	//한글 캘린더 요일 표시 부분
        ,dayNamesShort: ['일', '월', '화', '수', '목', '금', '토']	//한글 요일 표시 부분
        ,dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']	// 한글 요일 표시 부분
        ,minDate: "-2Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
        ,maxDate: "0D" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
        // ,onClose: function(selectedDate) {} datepicker가 닫힐 때
        ,onSelect: function () {
            // 종료일(toDate) datepicker가 선택될 때
            // 시작일(fromDate)의 선택할 수 있는 최대 날짜(maxDate)를 선택한 종료일로 지정
            let maxDate = $(this).datepicker('getDate');
            clearEnd = setTimeout(function() {
                $("#datepicker_start").datepicker( "option", "maxDate", maxDate );
                $('img.ui-datepicker-trigger').attr('align', 'absmiddle');
                // $('.ui-datepicker').css({ "margin-left" : "-30px", "margin-right": "auto"});  //달력(calendar) 위치
            }, 300);
        }
    });

    //초기값 설정
    $('#datepicker_start').datepicker('setDate', '-3m');
    $('#datepicker_end').datepicker('setDate', 'today');
    //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    $('img.ui-datepicker-trigger').attr('align', 'absmiddle');
    // $('.ui-datepicker').css({ "margin-left" : "-30px", "margin-right": "auto"});  //달력(calendar) 위치

    $('.period_today').click(function(){
        $('#datepicker_end').datepicker('setDate', 'today');
        if($('#datepicker_end').datepicker('setDate', 'today')){
            let endToday=$('#datepicker_end').datepicker('getDate');
            $("#datepicker_start").datepicker( "option", "maxDate", endToday);
            $('#datepicker_start').datepicker('setDate', endToday);
        }
    });
    $('.period_week').click(function(){
        $('#datepicker_end').datepicker('setDate', 'today');
        if($('#datepicker_end').datepicker('setDate', 'today')){
            let endToday=$('#datepicker_end').datepicker('getDate');
            $("#datepicker_start").datepicker( "option", "maxDate", endToday);
            $('#datepicker_start').datepicker('setDate', '-1w');
        }
    });
    $('.period_one_m').click(function(){
        $('#datepicker_start').datepicker('setDate', '-1m');
        $('#datepicker_end').datepicker('setDate', 'today');
    });
    $('.period_three_m').click(function(){
        $('#datepicker_start').datepicker('setDate', '-3m');
        $('#datepicker_end').datepicker('setDate', 'today');
    });
    /* datepicker 종료 */

    const menuToggle = $('.menu_toggle_row'),
    closeToggle = $('.ico_close'),
    searchArea = $('.search_area'),
    btnCancel = $('.btn_cancel'),
    selectToggle = $('.dep_sel'),
    selectLabel = $('.dep_label')

    menuToggle.on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('menu_search')==false){
            setTimeout(function(){
                menuToggle.addClass('active');
                $('.dim').show();
            }, 100);
            if(menuToggle.hasClass('active')){
                if($(this).hasClass('menu_search')==false){
                    setTimeout(function(){
                        searchArea.removeClass('select');
                        menuToggle.removeClass('active');
                        $('.dim').hide();
                    }, 100);
                };
                if($(this).hasClass('menu_toggle_close')||$(this).hasClass('menu_search')){
                    return;
                }
                menuToggle.removeClass('select');
                $(this).addClass('select');
            };
        }
        if($(this).hasClass('menu_search')){
            setTimeout(function(){
                searchArea.addClass('select');
                menuToggle.removeClass('active');
                $('.menu_toggle').css({"zIndex":"2700"})
                $('.dim').show();
            }, 100);
        };
    });
    closeToggle.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            menuToggle.removeClass('active');
            $('.dim').hide();
        }, 100);
    });
    $('.dim').on('click', function(e){
        e.preventDefault();
		if(menuToggle.hasClass('active')) {
            setTimeout(function(){
                menuToggle.removeClass('active');
                $('.dim').hide();
            }, 100);
		};
        if(menuToggle.hasClass('active')==false) {
            setTimeout(function(){
                searchArea.removeClass('select');
                $('.menu_toggle').css({"zIndex":"5000"})
                $('.dim').hide();
            }, 100);
        };
    });
    btnCancel.on('click', function(e){
        e.preventDefault();
        setTimeout(function(){
            searchArea.removeClass('select');
            $('.menu_toggle').css({"zIndex":"5000"})
            $('.dim').hide();
        }, 100);
    });

    selectToggle.on('click', function(e){
        e.preventDefault();
        selectToggle.toggleClass('select');
        $('.dim_trans').toggleClass('show');
    });
    $('.dim_trans').on('click', function(e){
        e.preventDefault();
        selectToggle.toggleClass('select');
        $('.dim_trans').toggleClass('show');
    });
    selectLabel.on('click', function(e){
        return false;
    });

    /* 로그인 화면 팝업창 */
    // const login_cta = $('.login_cta');
    // const arr_popup = $('.arr_popup');
    // const arr_text = $('.arr_popup .arr_text');
    // const arr_close = $('.arr_popup .btn_close');
    // const arr_yes = $('.arr_popup .arr_yes');
    // arr_popup.hide();

    // login_cta.on('click', function(e){
    //     e.preventDefault();
    //     arr_text.text('로그인에 실패하셨습니다. 와이파이 연결을 확인해주세요.')
    //     setTimeout(function(){
    //         arr_popup.show().addClass('on');
    //         $('.dim').show();
    //     }, 100);
    // });
    // arr_close.on('click', function(e){
    //     e.preventDefault();
    //     setTimeout(function(){
    //         arr_popup.hide().removeClass('on');
    //         $('.dim').hide();
    //     }, 100);
    // });
    // arr_yes.on('click', function(e){
    //     e.preventDefault();
    //     setTimeout(function(){
    //         arr_popup.hide().removeClass('on');
    //         $('.dim').hide();
    //     }, 100);
    // });
    // $('.dim').on('click', function(e){
    //     if(arr_popup.hasClass('on')) {
    //         setTimeout(function(){
    //             arr_popup.hide().removeClass('on');
    //             $('.dim').hide();
    //         }, 100);
    //     };
    // });
})