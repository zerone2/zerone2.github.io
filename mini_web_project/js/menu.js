$('.menu-btn').click(function() {
	// body...
	var $href = $(this).attr('href');
	layer_popup($href);
});

function layer_popup(el){
	var $el = $(el);
	var isDim = $el.prev().hasClass('popBg');

	 isDim ? $('.pop-layer').fadeIn() : $el.fadeIn();

        var $elWidth = ~~($el.outerWidth()),
            $elHeight = ~~($el.outerHeight()),
            docWidth = $(document).width(),
            docHeight = $(document).height();

        // 화면의 중앙에 레이어를 띄운다.
        if ($elHeight < docHeight || $elWidth < docWidth) {
            $el.css({
                marginTop: -$elHeight /2,
                marginLeft: -$elWidth/2
            })
        } else {
            $el.css({top: 0, left: 0});
        }

         /*$el.find('a.btn-layerClose').click(function(){
            isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
            return false;
        });*/

        $('.layer .popBg').click(function(){
            $('.pop-layer').fadeOut();
            return false;
        });
}