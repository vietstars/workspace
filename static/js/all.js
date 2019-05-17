;(function ($, window, undefined) { 
    $(document).ready(function () {
        /******** check ***********/
        // let scrollTop = $(document).scrollTop();
        // let goTop = $('.go-top'); 
        // if(scrollTop<10){
        // 	goTop.attr('hidden',false).slideUp('slow');
        // }
        // if(scrollTop>10){
        // 	goTop.attr('hidden',false).slideDown('slow');
        // }
        // $(document).scroll(function(){
        // 	let scrollTop = $(document).scrollTop();
        //     if(scrollTop>10){
        //         goTop.slideDown('slow');
        //     }else{
        //     	goTop.slideUp('slow');
        //     }
        // });
        // goTop.click(function(e) {
        //     $("html, body").animate({ scrollTop: 0 }, 600);
        //     e.preventDefault();
        // });
        $(document).on('click','.tongue-up',(e)=>{
            let _obj= $('.tongue-up').attr('href');
            $("html, body").animate({ scrollTop: $(_obj).offset().top }, 600);
            e.preventDefault();
        })
        /*************************/
        $('[data-toggle="tooltip"]').tooltip()
    })
})(jQuery, window);