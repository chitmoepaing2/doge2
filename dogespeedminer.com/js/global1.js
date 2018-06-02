$(".overlay, .modal_close").on("click", function() {
    $('.modal-auth').fadeOut(200);
    $('.overlay').fadeOut(200);
    $("#result_dep").hide(300);
    $('#result_dep').html('');
    $("#pl_wait").show(300);
});

function go_roll() {
    var t = document.getElementById('g-recaptcha-response').value,
        e = "action=go_roll&capcha=" + t;
    $("#go_roll").attr("disabled", !0);
    $('#result_rol2').hide();
    $('#pre_roll').show('fast');
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $('#pre_roll').hide();
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 1000);
}

function go_dice_my() {
    var e = "action=go_dice_my"
    $("#toggle1").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $("#result").html(t);
            $("#toggle1").attr("disabled", false);
        })
    }, 1000);
}

function go_dice_dep_add() {
    var e = "action=go_dice_dep_add"
    $("#dice_dep_add").hide();
    $('#result_dice_dep').html('Please wait...');
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $("#result_dice_dep").html(t);
        })
    }, 1000);
}

function go_dice_left() {
    var t = document.getElementById('my_bet').value,
        e = "action=go_dice_left&amount=" + t;
    $("#roll_left").attr("disabled", !0);
    $("#roll_right").attr("disabled", !0);
    $('#roll_left').html('Playing...');
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $('#roll_left').html('Roll <48');
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 300);
}

function go_dice_right() {
    var t = document.getElementById('my_bet').value,
        e = "action=go_dice_right&amount=" + t;
    $("#roll_left").attr("disabled", !0);
    $("#roll_right").attr("disabled", !0);
    $('#roll_right').html('Playing...');
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $('#roll_right').html('Roll >52');
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 300);
}

function go_mail() {
    var t = document.getElementById("mail_name").value,
        t1 = document.getElementById("mail_email").value,
        t2 = document.getElementById("mail_message").value,
        e = "action=go_mail&name=" + t + "&email=" + t1 + "&message=" + t2;
    $('#go_mail').html('Please wait...');
    $("#go_mail").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $('#go_mail').html('Send');
            $("#go_mail").attr("disabled", false);
            $('#mail_name').val('').change();
            $('#mail_email').val('').change();
            $('#mail_message').val('').change();
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 1000);
}

function go_enter() {
    var t = document.getElementById("go_address").value,
        e = "action=go_enter&address=" + t;
    $('#go_enter').html('Please wait...');
    $("#go_enter").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "api.php",
            data: e
        }).done(function(t) {
			
            $('#go_enter').html('Start mining');
            $("#go_enter").attr("disabled", false);
            $('#go_address').val('').change();
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 1000);
}

function go_enter2() {
    var t = document.getElementById("go_address2").value,
        e = "action=go_enter&address=" + t;
    $('#go_enter2').html('Please wait...');
    $("#go_enter2").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $('#go_enter2').html('Start mining');
            $("#go_enter2").attr("disabled", false);
            $("#enter_result").show();
            $("#result").html(t);
        })
    }, 1000);
}

function go_wd() {
    var t = document.getElementById("inpmin").value,
        e = "action=go_wd&amount=" + t;
    $('#confirm').html('Please wait...');
    $("#confirm").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "api.php",
            data: e
        }).done(function(t) {
            $('#confirm').html('Confirm');
            $("#confirm").attr("disabled", false);
            $("#text_min").hide();
            $("#wd_result_real").html(t);
        })
    }, 1000);
}

function go_exit() {
    var e = "action=go_exit"
    $('#logout').html('Please wait...');
    $("#logout").attr("disabled", !0);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        $("#result_exit").html(t);
    })
}

function go_autopay() {
    var e = "action=go_autopay"
    $("#autopay").attr("disabled", !0);
    setTimeout(function() {
        $.ajax({
            type: "POST",
            url: "/api.php",
            data: e
        }).done(function(t) {
            $("#text_min").html(t);
            $("#autopay").attr("disabled", false);
        })
    }, 1000);
}

function go_dep() {
    var e = "action=go_dep"
    $('.overlay').fadeIn(200);
    $('.modal-auth').fadeIn(200);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        setTimeout(function() {
            $("#pl_wait").hide();
            $("#result_dep").show();
            $("#result_dep").html(t);
        }, 2000);
    })
}

function video(a) {
    var e = "action=video&name=" + a;
    $('.overlay').fadeIn(200);
    $('.modal-auth').fadeIn(200);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        setTimeout(function() {
            $("#pl_wait").hide();
            $("#result_dep").show();
            $("#result_dep").html(t);
        }, 2000);
    })
}

function go_deps(a) {
    var e = "action=go_deps&amount=" + a;
    $('.overlay').fadeIn(200);
    $('.modal-auth').fadeIn(200);
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        setTimeout(function() {
            $("#pl_wait").hide();
            $("#result_dep").show();
            $("#result_dep").html(t);
        }, 2000);
    })
}


function go_deps_pro(a) {
	var	e = "action=go_deps_pro&amount=" + a;

	$('.overlay').fadeIn(200);
    $('.modal-auth').fadeIn(200);
	
	
	$.ajax({
		type: "POST",
		url: "api.php",
		data: e
	})
	
	.done(function(t) {
		console.log(t);
	
	setTimeout(function(){
		$("#pl_wait").hide();
		$("#result_dep").show();
		$("#result_dep").html(t);
	}, 2000);
	})
	
}


function go_dep_btc() {
    var e = "action=go_dep_btc";
    $("#result_dep").hide();
    $("#pl_wait").show();
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        setTimeout(function() {
            $("#pl_wait").hide();
            $("#result_dep").show();
            $("#result_dep").html(t);
        }, 2000);
    })
}

function go_dep_balance(a) {
    var e = "action=go_dep_balance&amount=" + a;
    $("#result_dep").hide();
    $("#pl_wait").show();
    $.ajax({
        type: "POST",
        url: "api.php",
        data: e
    }).done(function(t) {
        setTimeout(function() {
            $("#pl_wait").hide();
            $("#result_dep").show();
            $("#result_dep").html(t);
        }, 2000);
    })
}


function go_dep_pro_balance(a) {
	var	e = "action=go_dep_pro_balance&amount=" + a;
	
	$("#result_dep").hide();
	$("#pl_wait").show();
	
	
	$.ajax({
		type: "POST",
		url: "api.php",
		data: e
	})
	
	.done(function(t) {
	setTimeout(function(){
		$("#pl_wait").hide();
		$("#result_dep").show();
		$("#result_dep").html(t);
	}, 2000);
	})
	
}


$("#withdraw").on('click', function() {
    $(".first-mine").hide();
    $(".second-mine").show();
});
$("#cancel").on('click', function() {
    $(".first-mine").show();
    $(".second-mine").hide();
});
$("#logout").on('click', function() {
    $(".after-log").hide();
    $(".input-mine").show();
});



$("#check-miners").on('click', function(){
if ($('#dmpro').is(':checked')) {
	$("#doge-def0").hide();
    $("#doge-def").hide();
    $("#doge-def2").hide();
    $("#doge-def4").hide();
    $("#doge-def5").hide();
    $("#doge-pro0").fadeIn(300);
    $("#doge-pro").fadeIn(300);
    $("#doge-pro1").fadeIn(300);
    $("#doge-pro2").fadeIn(300);
    $("#doge-pro3").fadeIn(300);
    $("#doge-pro4").fadeIn(300);
    $("#doge-pro5").fadeIn(300);
    $("#logo-change").removeClass("logo logo2").addClass("logo2");
    document.cookie = "doge=pro";
} 
if ($('#dm').is(':checked')) {
	$("#doge-def0").fadeIn(300);
    $("#doge-def").fadeIn(300);
    $("#doge-def2").fadeIn(300);
    $("#doge-def4").fadeIn(300);
    $("#doge-def5").fadeIn(300);
    $("#doge-pro0").hide();
    $("#doge-pro").hide();
    $("#doge-pro1").hide();
    $("#doge-pro2").hide();
    $("#doge-pro3").hide();
    $("#doge-pro4").hide();
    $("#doge-pro5").hide();
    $("#logo-change").removeClass("logo logo2").addClass("logo");
    document.cookie = "doge=def";
}
}); 
