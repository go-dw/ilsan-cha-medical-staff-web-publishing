$(function(){
    const menuToggle = $('.menu_toggle_row'),
    closeToggle = $('.ico_close'),
    mainSearch = $('.main_search'),
    searchToggle = $('.ico_search'),
    searchArea = $('.search_area'),
    btnCancel = $('.btn_cancel'),
    selectToggle = $('.dep_sel')

    menuToggle.on('click', function(e){
        e.preventDefault();
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
            if($(this).hasClass('menu_search')){
                setTimeout(function(){
                    searchArea.addClass('select');
                    menuToggle.removeClass('active');
                    $('.menu_toggle').css({"zIndex":"2700"})
                    $('.dim').show();
                }, 100);
            };
            if($(this).hasClass('menu_toggle_close')||$(this).hasClass('menu_search')){
                return;
            }
            menuToggle.removeClass('select');
            $(this).addClass('select');
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
        $(this).toggleClass('select');
    });

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