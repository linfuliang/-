// 显示密码
function pwdShow() {
	var sign = true;
	$('.pwd-show div').click(function() {
		if (sign) {
			$('#login-pwd').attr('type', 'text');
			$(this).css({
				'background' : 'url("../images/pwd-show.png") center center no-repeat'
			})
			sign = false;
		} else {
			$('#login-pwd').attr('type', 'password');
			$(this).css({
				'background' : '0'
			})
			sign = true;
		}
	})
}
pwdShow();

// 用户登录
function loginText(username, password) {
	if (username == "") {
		$('.login-error').text("请输入用户名");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(password == "") {
		$('.login-error').text("请输入密码");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!(username == "aaaaaa" && password == "111111")) {
		$('.login-error').text("用户名或密码填写错误");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'index.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#login-success').on('touchstart', function() {
	var username = $('#login-name').val();
	var password = $('#login-pwd').val();
	loginText(username, password);
})

// 注册 - 用户名注册
function enrollName(username, password) {
	var regName = /^[a-zA-Z0-9]\w{5,19}/;
	var regPwd = /^[a-zA-Z0-9]{6,16}/
	if (username == "") {
		$('.login-error').text("请输入用户名");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(password == "") {
		$('.login-error').text("请输入密码");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regName.test(username)) {
		$('.login-error').text("用户名需用6-20个字符，不能使用中文");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regPwd.test(password)) {
		$('.login-error').text("密码需用6-16个数字或字母");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#enrollname-ok').on('tap', function() {
	var username = $('#login-name').val();
	var password = $('#login-pwd').val();
	enrollName(username, password);
})

// 注册 - 邮箱注册
function enrollEmail(username, password) {
	var regEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var regPwd = /^[a-zA-Z0-9]{6,16}/;
	if (username == "") {
		$('.login-error').text("请输入邮箱");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(password == "") {
		$('.login-error').text("请输入密码");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regEmail.test(username)) {
		$('.login-error').text("邮箱格式不正确");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regPwd.test(password)) {
		$('.login-error').text("密码需用6-16个数字或字母");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#enroll-emailok').on('tap', function() {
	var username = $('#login-name').val();
	var password = $('#login-pwd').val();
	enrollEmail(username, password);
})
// 注册 - 手机注册
function enrollTel(username) {
	var regTel =  /^1([38]\d|4[567]|5(?!4)\d|7[678])\d{8}$/;
	if (username == "") {
		$('.login-error').text("请输入手机号码");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regTel.test(username)) {
		$('.login-error').text("手机号码格式不正确");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login-enroll-pho-verify.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#enroll-tel').click(function() {
	var username = $('#login-name').val();
	enrollTel(username);
})

// 注册 - 手机注册（验证）
var num = 0;
var phoNum = $('.pho-namber').text();
var timer = null;
$('.sent-control').on('tap', function() {
	if (timer) {
		clearInterval(timer);
	}
	$(this).text('重新获取验证码');
	$(this).css({
		'color' : '#797979',
		'background-color' : '#e7e7e7'
	})
	$('.sent-time').css({
		'visibility' : 'visible'
	})
	num = 5;
	$('.sent-time span').text(num);
	timer = setInterval(sentTime, 1000);
})
function sentTime() {
	num--;
	if (num <= 0) {
		num = 0;
		$('.sent-time').css({
			'visibility' : 'hidden'
		})
		$('.sent-control').text('获取验证码');
		$('.sent-control').css({
			'color' : '#fff',
			'background-color' : '#f25000'
		})
	};
	$('.sent-time span').text(num);
}
function enrollTel2(proveNum) {
	var regProve = /^[0-9]{6}$/;
	var proveNum = $('#prove-num').val();
	if (!regProve.test(proveNum)) {
		$('.login-error').text("验证码输入错误");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login-enroll-pho-pwd.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#pho-verify').on('tap', function() {
	var proveNum = $('#prove-num').val();
	enrollTel2(proveNum);
})

// 注册 - 手机注册(设置密码)
function enTelPwd(password) {
	var regPwd = /^[a-zA-Z0-9]{6,16}/;
	if(password == "") {
		$('.login-error').text("请输入密码");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if(!regPwd.test(password)) {
		$('.login-error').text("密码需用6-16个数字或字母");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#enroll-telok').on('tap', function() {
	var password = $('#login-pwd').val();
	enTelPwd(password);
})

// 找回密码
function backpwd(username) {
	var regTel =  /^1([38]\d|4[567]|5(?!4)\d|7[678])\d{8}$/;
	var regEmail =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if (username == "") {
		$('.login-error').text("请输入手机/邮箱");
		$('.login-error').css({
			'display' : 'block'
		})
	} else if (!regTel.test(username)) {
		$('.login-error').text("输入的格式错误");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login-backpwd-verify.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
}
$('#log-backpwd').on('tap', function() {
	var username = $('#login-name').val();
	backpwd(username);
})

// 找回密码 - 验证
var verSign = true;
$('.verify-select').on('tap', function() {
	if (verSign) {
		$(this).children('ul').css({
			'display' : 'block'
		})
		verSign = false;
	} else {
		$(this).children('ul').css({
			'display' : 'none'
		})
		verSign = true;
	}
})
$('.verify-select ul').children('li').on('tap', function() {
	$('.verify-select em').text($(this).text());
})
$('.verify-control').on('tap', function() {
	$(this).text('重新获取验证码');
	$(this).css({
		'color' : '#585858',
		'background-color' : '#e7e7e7'
	})
})
$('#backpwd-ver').on('tap', function() {
	var regProve = /^[0-9]{6}$/;
	var proveNum = $('#prove-num').val();
	if (!regProve.test(proveNum)) {
		$('.login-error').text("验证码输入错误");
		$('.login-error').css({
			'display' : 'block'
		})
	} else {
		$('.login-next').attr('href', 'login-backpwd-new.html');
		$('.login-error').css({
			'display' : 'none'
		})
	}
})