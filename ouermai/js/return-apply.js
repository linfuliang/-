// 申请退货商品列表 - 下拉效果
function listSelect() {
	var listSign = true;
	$('.apply-list h3').on('tap', function() {
		if (listSign) {
			$('.applylist-massage').stop(true).animate({
				'height' : '20.42rem'
			}, 500)
			$('.apply-list h3').css({
				'background' : 'url("../images/apply-list-1.png") center bottom no-repeat'
			})
			listSign = false;
		} else {
			$('.applylist-massage').stop(true).animate({
				'height' : '0'
			}, 500)
			$('.apply-list h3').css({
				'background' : 'url("../images/apply-list-2.png") center bottom no-repeat'
			})
			listSign = true;
		}
	})
}
listSelect();

// 退货状态 - 自动跳转
function applyState() {
	var stateWord = [];
	stateWord.push("退货中");
	stateWord.push("退货成功，等待退款");
	stateWord.push("");
	stateWord.push("");

	var num = 0;
	var timer = setInterval(function () {
		if (num == 1) {
			$('.apply-cancel').css({
				'display' : 'none'
			})
		};
		if (num > stateWord.length - 1) {
			clearInterval(timer);
		} else {
			wordSee(stateWord[num]);
			num ++;			
		}
		if (num == 3) {
			window.location.href = 'return-success.html';
		};
	}, 3000);
	function wordSee(stateWord) {
		$('#apply-state').text(stateWord);
		$('#apply-state').fadeIn(1000);
	}
}

// 取消申请
$('.apply-cancel').on('tap', function() {
	window.location.href = 'myreturn.html';
})
 // 等待退货 - 提交信息按钮
$('.apply-control').children('button').on('tap', function() {
    window.location.href = 'returnprogress.html';
})


