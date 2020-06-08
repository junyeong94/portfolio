$(function(){
            var welcomeTop;
            var iamTop;
            var skillTop;
            var portTop;
            var telTop;



            navMenu();    
            sectionTop();


            $(window).resize(function(){
            navMenu();
            });

            $('#open_nav_btn').click(function(){
                $('.nav>ul').show(200);
            });
            $('#close_nav_btn').click(function(){
                $('.nav>ul').hide(200);
            });
           
            function navMenu(){
                var winWidth=$(window).width();
                if(winWidth>=768){
                    $('.nav>ul').css('display','flex');
                    $('#open_nav_btn').css('display','none');
                }else{
                    $('.nav>ul').css('display','none');
                    $('#open_nav_btn').css('display','block');
                } 
            };
            // 스크롤 이벤트
            $(window).scroll(function(){
                var scrTop=$(this).scrollTop();
                if(scrTop<=50){
                    $('.header').css({backgroundColor:'#ffffff',height:'100px'});
                }else if(scrTop>50 && scrTop<skillTop-80){
                    $('.header').css({backgroundColor:'#ffffff',height:'80px'});
                }else if(scrTop>=skillTop-80 && scrTop<portTop-80){
                    $('.header').css({backgroundColor:'#ff0000',height:'80px'});
                }else if(scrTop>=portTop-80 && scrTop<telTop-80){
                    $('.header').css({backgroundColor:'#ffffff',height:'80px'});
                }
            });
            
            function sectionTop(){
            welcomeTop=$('#wellcome').offset().top;
            iamTop=$('#i_am').offset().top;
            skillTop=$('#skill').offset().top;
            portTop=$('#portfolio').offset().top;
            telTop=$('#tel').offset().top;
            }
});