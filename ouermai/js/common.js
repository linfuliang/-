/*
	*便利商家详情页
	*点击出现详细宝贝介绍
	*FL
 */ 
function produce() {
    var det = true;
    $(".det-product").click(function() {
        if(det == true) {
            $(".detimg").css({
                "display" : "block"
            })
            $(this).find("span").css({
                "background": "#eeeeee url(../images/apply-list-1.png) no-repeat",
                "background-size" : "1.67rem",
                "background-position" : "17rem center"
            })
            det = false;
        }
        else {
            $(".detimg").css({
                "display" : "none"
            })
            $(this).find("span").css({
                "background": "#eeeeee url(../images/apply-list-2.png) no-repeat",
                "background-size" : "1.67rem",
                "background-position" : "17rem center"
            })
            det = true;
        }
    })
}produce();
/*
	*便利商家选择尺寸、颜色
	*点击选择
	*FL
 */
function detSize() {
    var detbt = true;
    $(".det-bt strong").click(function() {
        if (this.className == "detshow") {
            this.className = "";
            $(this).siblings().removeClass("detshow");
        }else if (this.className == "") {
            this.className = "detshow";
            $(this).siblings().removeClass("detshow");
        }
    })
    $(".det-color strong").click(function() {
        if (this.className == "detshow") {
            this.className = ""
        }else if (this.className == "") {
            this.className = "detshow"
        }
    })
}detSize();
/*
	*便利商家数量选择
	*加减产品数量
	*FL
 */
function detNum() {
    var shopNum = $(".det-select li").eq(1).text();
    $(".det-select li").eq(0).click(function() {
        if(shopNum == 0) {
            shopNum = 0;
        }
        else {
            shopNum--;
            $(".det-select li").eq(1).text(shopNum);
        }
    })
    $(".det-select li").eq(2).click(function() {
        shopNum++;
        $(".det-select li").eq(1).text(shopNum)
    })
}detNum();
//找对象 
$(".object-tab span").on("tap", function(){
	$(this).css({
		"-webkit-box-shadow": "inset 0 -2px #ff6600",
		"-moz-box-shadow": "inset 0 -2px #ff6600",
		"box-shadow": "inset 0 -2px #ff6600"
	})
	$(this).siblings().css({
		"-webkit-box-shadow": "inset 0 0 #ff6600",
		"-moz-box-shadow": "inset 0 0 #ff6600",
		"box-shadow": "inset 0 0 #ff6600"
	})
	$(".object-tabcon > div").eq($(this).index()).addClass("object-con").siblings().removeClass("object-con");
})
// 我的购物车
var inte = document.getElementById("integral");
var doll= document.getElementById("dollars");
var allDown = document.querySelector('.alldown');
var moneySum = 0;
var numArr = [];
var moneyArr = [];
var moneys = [];

function shopCar() {
    var type = ".rmb";
    $(".shop-buy p").find("span").on("tap",function() {
        $(this).addClass("buy-show").parent().siblings().find("span").removeClass("buy-show");
        if (inte.className == "buy-show") {
            type = ".mark";
            shopSum(type);
        }
        if (doll.className == "buy-show") {
            type = ".rmb";
            shopSum(type);
        };
    })
    $('.own-con .shop-list dt span').on("tap", function(){
        if (this.className != "list-btn") {
            this.className = "list-btn";
            $(this).parent().next().find("p").eq(3).find("strong").addClass("money");
            if ($(".own-con .list-btn").length == $(".own-con .shop-list").length) {
                allDown.id = "all-select";
            };
            shopSum(type);
        } else if (this.className == "list-btn") {
            this.className = "";
            if ($(".own-con .list-btn").length != $(".own-con .shop-list").length) {
                allDown.id = "";
            };
            $(this).parent().next().find("p").eq(3).find("strong").removeClass("money");
            numArr.pop();
            moneyArr.pop();
            shopSum(type);
        }
    })
    $('.reduce').on("tap", function() {
        var num = $(this).siblings("strong").html();
        if (num == 0) {
            num = 0;
        }else {
            num--;
        }
        $(this).siblings("strong").html(num);
        shopSum(type);
    })
    $('.add').on("tap", function() {
        var num = $(this).siblings("strong").html();
        num++;
        $(this).siblings("strong").html(num);
         shopSum(type);
    })
    $(".shop-pay span").eq(0).on("tap", function(){
        if (this.id == "all-select") {
            this.id = "";
            $('.shop-list dt span').removeClass("list-btn");
            $('.shop-list dd p strong').removeClass("money");
         shopSum(type);
        }else if (this.id == "") {
            this.id = "all-select";
            $('.shop-list dt span').addClass("list-btn");
            $('.shop-list dd p strong').addClass("money");
            shopSum(type);
        }
    })
}
shopCar();
// 总价计算
function shopSum(a) {
     moneySum = 0;
     for (var i = 0; i < $(".own-con .list-btn").length; i++) {
            numArr[i] = $(".own-con .money").eq(i).html();
            moneyArr[i] = $('.own-con ' + a).eq(i).html();
            moneys[i] = numArr[i]*moneyArr[i];
            moneySum += moneys[i];
        }
    $(".money-rmb").html(moneySum);
}

// 配送方式
$('.sent-cona p, .sent-conb p').on("tap", function() {
    $(this).addClass('sent-select').siblings().removeClass('sent-select');
})
// 发票留言 
$('.speak-style p span').on("tap", function() {
    $(this).addClass('speak-select').siblings().removeClass('speak-select');
})
// 订单提交成功
var signPay = true;
$('.pay-platform div').on("tap", function() {
    if ($('.pay-platform div').length == 1) {
        if (signPay) {
            $(this).addClass('pay-select');
            signPay = false;
        } else {
            $(this).removeClass('pay-select');
            signPay = true;
        }
    } else {
        $(this).addClass('pay-select').siblings().removeClass('pay-select');
    }
})