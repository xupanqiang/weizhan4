var winW, winH;
var adfri = true;
var vdSupp = true;
$(function() {
	winW = document.documentElement.clientWidth || document.body.clientWidth;
	winH = document.documentElement.clientHeight || document.body.clientHeight;
	document.body.style.width = winW + "px";
	document.body.style.height = winH + "px"
});
$(function() {
	var curCount = 0,
		startY = 0,
		endY = 0,
		dTime = 500,
		norZidx = "10",
		curZidx = "20",
		totZidx = "30",
		isMove = false,
		isUp = false,
		isDown = false;
	var illi = $(".itemlist li");
	var totCount = illi.length;
	$(document).bind("touchstart", function(e) {
		e.stopPropagation();
		startY = endY = parseInt(e.touches[0].clientY);
		illi.css({
			"z-index": norZidx,
			"visibility": "hidden"
		});
		$(illi.get(curCount)).css({
			"z-index": curZidx,
			"visibility": "visible"
		});
		if (curCount == 0) {
			$(illi.get(curCount + 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + winH + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + winH + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + winH + "px,0)",
			})
		} else if (curCount == totCount - 1) {
			$(illi.get(curCount - 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + (-winH) + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + (-winH) + "px,0)",
			})
		} else if (curCount > 0 && curCount < totCount - 1) {
			$(illi.get(curCount + 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + winH + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + winH + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + winH + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + winH + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + winH + "px,0)"
			});
			$(illi.get(curCount - 1)).css({
				"z-index": totZidx,
				"visibility": "visible",
				"-webkit-transition-duration": "0ms",
				"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
				"-moz-transition-duration": "0ms",
				"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
				"-ms-transition-duration": "0ms",
				"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
				"-o-transition-duration": "0ms",
				"-o-transform": "translate3d(0," + (-winH) + "px,0)",
				"transition-duration": "0ms",
				"transform": "translate3d(0," + (-winH) + "px,0)"
			})
		}
	});
	$(document).bind("touchmove", function(e) {
		e.stopPropagation();
		e.preventDefault();
		endY = parseInt(e.touches[0].clientY);
		var diffY = parseInt(endY - startY);
		if (curCount == 0) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					$(illi.get(curCount + 1)).css({
						"-webkit-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (winH + diffY) + "px,0)"
					})
				}
			}
		} else if (curCount == totCount - 1) {
			if (diffY > 10) {
				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (-winH + diffY) + "px,0)"
					})
				}
			}
		} else if (curCount > 0 && curCount < totCount - 1) {
			if (diffY < -10) {
				if (!isDown) {
					isUp = true;
					if (winH + diffY == 0) {
						return
					}
					$(illi.get(curCount + 1)).css({
						"-webkit-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (winH + diffY) + "px,0)"
					})
				}
			} else if (diffY > 10) {
				if (!isUp) {
					isDown = true;
					$(illi.get(curCount - 1)).css({
						"-webkit-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-moz-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-ms-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"-o-transform": "translate3d(0," + (-winH + diffY) + "px,0)",
						"transform": "translate3d(0," + (-winH + diffY) + "px,0)"
					})
				}
			}
		}
	});
	$(document).bind("touchend", function(e) {
		e.stopPropagation();
		var translateY = 0;
		if (isUp) {
			var next = $(illi.get(curCount + 1));
			translateY = parseInt(next.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
			if (Math.abs(translateY / winH) < 0.9) {
				next.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + 0 + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + 0 + "px,0)"
				});
				curCount++
			} else {
				next.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + winH + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + winH + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + winH + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + winH + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + winH + "px,0)"
				})
			}
			isUp = false;
			isDown = false
		}
		if (isDown) {
			var prev = $(illi.get(curCount - 1));
			translateY = parseInt(prev.css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
			if (Math.abs(translateY / winH) < 0.9) {
				prev.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + 0 + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + 0 + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + 0 + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + 0 + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + 0 + "px,0)"
				});
				curCount--
			} else {
				prev.css({
					"-webkit-transition-duration": dTime + "ms",
					"-webkit-transform": "translate3d(0," + (-winH) + "px,0)",
					"-moz-transition-duration": dTime + "ms",
					"-moz-transform": "translate3d(0," + (-winH) + "px,0)",
					"-ms-transition-duration": dTime + "ms",
					"-ms-transform": "translate3d(0," + (-winH) + "px,0)",
					"-o-transition-duration": dTime + "ms",
					"-o-transform": "translate3d(0," + (-winH) + "px,0)",
					"transition-duration": dTime + "ms",
					"transform": "translate3d(0," + (-winH) + "px,0)"
				})
			}
			isUp = false;
			isDown = false
		}
		if (curCount == 0) {
			$(".pageup").show();
			$(".pagedown").hide()
		} else if (curCount == totCount - 1) {
			$(".pageup").hide();
			$(".pagedown").show()
		} else if (curCount == 4) {
			$(".pageup").hide()
		} else if (curCount > 0 && curCount < totCount - 1) {
			$(".pageup").show();
			$(".pagedown").show()
		}
	});
	$(".musicplay").bind("touchstart", function(e) {
		e.stopPropagation();
		var _this = $(this);
		try {
			var oMusic = $(".music").get(0)
		} catch (e) {
			alert('抱歉，您的设备不支持audio！');
			return
		}
		if (oMusic.paused) {
			if (_this.hasClass("musicplay")) {
				_this.removeClass("musicplay").addClass("musicpause")
			} else {
				oMusic.play();
				_this.removeClass("musicpause").addClass("musicplay")
			}
		} else {
			oMusic.pause();
			_this.removeClass("musicplay").addClass("musicpause")
		}
	});
	try {
		var vdb = $(".videobox");
		var vd = $(".video");
		var oVideo = vd.get(0)
	} catch (e) {
		vdSupp = false
	}
	$(".videobox").bind("touchend", function(e) {
		if (!vdSupp) {
			alert('抱歉，您的设备不支持video！');
			return
		}
		if (isMove) {
			isMove = false;
			return
		}
		if (oVideo.paused) {
			vdb.css({
				"background-color": "#000"
			});
			vd.css({
				"display": "block"
			});
			oVideo.play()
		} else {
			oVideo.pause();
			vd.css({
				"display": "none"
			});
			vdb.css({
				"background-color": "transparent"
			})
		}
	});
	$(".editbox, .itemlist .clip, .itemlist .pop, .pop .close,.item03 .pcon .close,.item03 .pcon .light,.item06 .tit03 .t02,.item06 .tit03 .t03").bind("touchstart touchmove touchend", function(e) {
		e.stopPropagation()
	});
	var transend = "webkitTransitionEnd MSTransitionEnd oTransitionEnd TransitionEnd";
	$(".item01,.item02,.item03,.item04,.item06,.item07,.item10,.item09").bind(transend, function() {
		if (!vdSupp) {
			return
		}
		if (oVideo.ended || oVideo.paused) {
			vd.css({
				"display": "none"
			});
			vdb.css({
				"background-color": "transparent"
			});
			return
		}
		oVideo.pause();
		vd.css({
			"display": "none"
		});
		vdb.css({
			"background-color": "transparent"
		})
	});
	$(".item01").find(".tit01").addClass("tran01");
	$(".item01").find(".tit02").addClass("tran02");
	$(".item01").find(".tit05").addClass("tran02");
	$(".item01").bind(transend, function(e) {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				_this.find(".tit02").addClass("tran02");
				_this.find(".tit05").addClass("tran02")
			}, 0)
		}
	});
	$(".item01").bind("touchstart", function() {
		try {
			var oMusic = $(".music").get(0);
			if (adfri && oMusic.paused && !! $(document).find(".musicplay").length) {
				oMusic.play()
			}
			adfri = false
		} catch (e) {}
		var itn = $(".item02");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit01").removeClass("tran02");
		itn.find(".tit01").removeClass("tran03");
		itn.find(".tit01").removeClass("tran04");
		itn.find(".tit01").removeClass("tran05");
		itn.find(".tit01").removeClass("tran06");
		itn.find(".tit01").removeClass("tran07");
		itn.find(".tit01").removeClass("tran08");
		itn.find(".tit01").removeClass("tran09");
		itn.find(".tit01").removeClass("tran10");
		itn.find(".tit01").removeClass("tran11");
		itn.find(".pop").removeClass("ptran").hide();
		itn.find(".p01").css("z-index", "2")
	});
	$(".item02").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			setTimeout(function() {
				_this.find(".tit01").addClass("tran01");
				setTimeout(function() {
					$(".item02 .p01").addClass("ptran").show()
				}, 2400)
			}, 0)
		}
	});
	$(".cls1").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(this).parent().css("z-index", "-1");
		$(".item02").find(".tit01").removeClass("tran01");
		$(".item02").find(".tit01").addClass("tran02");
		setTimeout(function() {
			$(".item02 .p02").addClass("ptran").show()
		}, 2200)
	});
	$(".cls2").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran03");
		setTimeout(function() {
			$(".item02 .p03").addClass("ptran").show()
		}, 2200)
	});
	$(".cls3").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran04");
		setTimeout(function() {
			$(".item02 .p04").addClass("ptran").show()
		}, 2200)
	});
	$(".cls4").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran05");
		setTimeout(function() {
			$(".item02 .p05").addClass("ptran").show()
		}, 2200)
	});
	$(".cls5").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran06");
		setTimeout(function() {
			$(".item02 .p06").addClass("ptran").show()
		}, 2200)
	});
	$(".cls6").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran07");
		setTimeout(function() {
			$(".item02 .p07").addClass("ptran").show()
		}, 2200)
	});
	$(".cls7").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran08");
		setTimeout(function() {
			$(".item02 .p08").addClass("ptran").show()
		}, 2200)
	});
	$(".cls8").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran09");
		setTimeout(function() {
			$(".item02 .p09").addClass("ptran").show()
		}, 2200)
	});
	$(".cls9").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran10");
		setTimeout(function() {
			$(".item02 .p10").addClass("ptran").show()
		}, 2200)
	});
	$(".cls10").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide();
		$(".item02").find(".tit01").addClass("tran11");
		setTimeout(function() {
			$(".item02 .p11").addClass("ptran").show()
		}, 2200)
	});
	$(".cls11").bind("touchend", function() {
		$(this).parent().removeClass("ptran").hide()
	});
	$(".item02").bind("touchstart", function() {
		var itp = $(".item01");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit05").removeClass("tran02");
		var itn = $(".item03");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran01");
		itn.find(".tit04").hide();
		itn.find(".pop").hide();
		itn.find(".pcon").hide();
		itn.find(".black").removeClass("tran01").hide()
	});
	var eleTime = 0;
	$(".item03").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran01");
			if (eleTime == 0) {
				setTimeout(function() {
					_this.find(".tit04").show();
					_this.find(".black").show()
				}, 2600);
				eleTime++
			}
		}
	});
	var eles = $(".item03 .tit02 .win");
	eles.each(function(i) {
		$(this).parent().find(".w" + i).bind("touchend", function() {
			$(".item03 .pop").show();
			$(".item03 .pcon").hide();
			$(".item03 .black").show();
			var _this = $(this).parent().parent().find(".p0" + i);
			_this.show();
			setTimeout(function() {
				_this.addClass("tran01")
			}, 100)
		})
	});
	$(".item03 .tit01").bind("touchend", function() {
		$(".item03 .pop").show();
		$(".item03 .pcon").hide();
		$(".item03 .black").show();
		$(".item03 .p00").show();
		setTimeout(function() {
			$(".item03 .p00").addClass("tran01")
		}, 100)
	});
	$(".item03 .tit04").bind("touchend", function() {
		setTimeout(function() {
			$(".item03 .tit04").hide();
			$(".item03 .black").hide()
		}, 0)
	});
	$(".item03 .tit03").bind("touchend", function() {
		$(".item03 .pop").show();
		$(".item03 .pcon").hide();
		$(".item03 .black").show();
		$(".item03 .p04").show();
		setTimeout(function() {
			$(".item03 .p04").addClass("tran01")
		}, 100)
	});
	$(".item03 .pcon .close").bind("touchend", function() {
		var _this = $(this);
		$(".item03 .pop").hide();
		$(".item03 .pcon").hide();
		$(".item03 .black").hide();
		_this.parent().hide().removeClass("tran01")
	});
	$(".item03").bind("touchstart", function() {
		var itp = $(".item02");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit01").removeClass("tran02");
		itp.find(".tit01").removeClass("tran03");
		itp.find(".tit01").removeClass("tran04");
		itp.find(".tit01").removeClass("tran05");
		itp.find(".tit01").removeClass("tran06");
		itp.find(".tit01").removeClass("tran07");
		itp.find(".tit01").removeClass("tran08");
		itp.find(".tit01").removeClass("tran09");
		itp.find(".tit01").removeClass("tran10");
		itp.find(".tit01").removeClass("tran11");
		itp.find(".pop").removeClass("ptran").hide();
		itp.find(".p01").css("z-index", "2");
		var itn = $(".item04");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran01")
	});
	$(".item04").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran01")
		}
	});
	$(".item04").find(".tit01 .more").bind("touchstart", function() {
		var _this = $(this);
		$(".tit01 .detail").addClass("tran03");
		$(".item04").find(".tit01 .morex").css("opacity", "1")
	});
	$(".item04").find(".tit01 .morex").bind("touchstart", function() {
		var _this = $(this);
		$(".tit01 .detail").removeClass("tran03");
		$(".tit01 .detail").addClass("tran01")
	});
	$(".item04").find(".tit02 .morex").bind("touchstart", function() {
		var _this = $(this);
		$(".tit02 .detail").addClass("tran02");
		setTimeout(function() {
			$(".item04").find(".tit02 .more").css("opacity", "1")
		}, 1500)
	});
	$(".item04").find(".tit02 .more").bind("touchstart", function() {
		var _this = $(this);
		$(".tit02 .detail").removeClass("tran02");
		$(".tit02 .detail").addClass("tran01")
	});
	$(".item04").bind("touchstart", function() {
		var itp = $(".item03");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran01");
		itp.find(".pop").hide();
		itp.find(".pcon").hide();
		itp.find(".black").removeClass("tran01").hide();
		var itn = $(".item05");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02")
	});
	$(".item05").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02")
		}
	});
	$(".item05").bind("touchstart", function() {
		var itp = $(".item04");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran01");
		var itn = $(".item06");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran01")
	});
	$(".item06").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit02 .p01").addClass("tran02");
			_this.find(".tit03").addClass("tran01")
		}
	});
	$(".item06 .tit03 .t02").bind("touchend", function() {
		var _this = $(this);
		$(".item06 .tit02 .p01").removeClass("tran02");
		$(".item06 .tit02 .pop").hide().removeClass("tran03");
		$(".item06 .tit02 .p02").show();
		setTimeout(function() {
			$(".item06 .tit02 .p02").addClass("tran03")
		}, 300)
	});
	$(".item06 .tit03 .t03").bind("touchend", function() {
		var _this = $(this);
		$(".item06 .tit02 .pop").hide().removeClass("tran03");
		$(".item06 .tit02 .p03").show();
		setTimeout(function() {
			$(".item06 .tit02 .p03").addClass("tran03")
		}, 300)
	});
	$(".item06 .tit03 .t04").bind("touchend", function() {
		var _this = $(this);
		$(".item06 .tit02 .pop").hide().removeClass("tran03");
		$(".item06 .tit02 .p04").show();
		setTimeout(function() {
			$(".item06 .tit02 .p04").addClass("tran03")
		}, 300)
	});
	$(".item06 .tit03 .t05").bind("touchend", function() {
		var _this = $(this);
		$(".item06 .tit02 .pop").hide().removeClass("tran03");
		$(".item06 .tit02 .p05").show();
		setTimeout(function() {
			$(".item06 .tit02 .p05").addClass("tran03")
		}, 300)
	});
	$(".item06 .tit03 .t01").bind("touchend", function() {
		var _this = $(this);
		$(".item06 .tit02 .pop").hide().removeClass("tran03");
		$(".item06 .tit02 .p01").show();
		setTimeout(function() {
			$(".item06 .tit02 .p01").addClass("tran03")
		}, 300)
	});
	$(".item06 .tit03 .tot").bind("touchend", function() {
		var _this = $(this);
		_this.siblings().removeClass("toton");
		_this.addClass("toton")
	});
	$(".item06").bind("touchstart", function() {
		var itp = $(".item05");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		var itn = $(".item07");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran04");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06");
		itn.find(".tit07").removeClass("tran07");
		itn.find(".tit08").removeClass("tran01")
	});
	$(".item07").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran03");
			_this.find(".tit04").addClass("tran04");
			_this.find(".tit05").addClass("tran05");
			_this.find(".tit06").addClass("tran06");
			_this.find(".tit07").addClass("tran07");
			_this.find(".tit08").addClass("tran01")
		}
	});
	$(".item07").bind("touchstart", function() {
		var itp = $(".item06");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran01");
		var itn = $(".item08");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran01")
	});
	$(".item08").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran01")
		}
	});
	$(".item08").bind("touchmove", function() {
		var translateYp = parseInt($(".item07").css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
		var translateYn = parseInt($(".item09").css("-webkit-transform").split(/[(]|[,]|[)]/)[2]);
		if (Math.abs(translateYp / winH) < 0.9 || Math.abs(translateYn / winH) < 0.9) {
			isMove = true;
			oVideo.pause();
			vd.css({
				"display": "none"
			});
			vdb.css({
				"background-color": "transparent"
			})
		}
	});
	$(".item08").bind("touchstart", function() {
		var itn = $(".item07");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		itn.find(".tit04").removeClass("tran04");
		itn.find(".tit05").removeClass("tran05");
		itn.find(".tit06").removeClass("tran06");
		itn.find(".tit07").removeClass("tran07");
		itn.find(".tit08").removeClass("tran01");
		var itp = $(".item09");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran02")
	});
	$(".item09").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02");
			_this.find(".tit03").addClass("tran02")
		}
	});
	$(".item09").bind("touchstart", function() {
		var itn = $(".item07");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit02").removeClass("tran02");
		itn.find(".tit03").removeClass("tran03");
		var itp = $(".item10");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02")
	});
	$(".item10").bind(transend, function() {
		var _this = $(this);
		if (_this.css("z-index") == totZidx) {
			_this.find(".tit01").addClass("tran01");
			_this.find(".tit02").addClass("tran02")
		}
	});
	$(".item10").bind("touchstart", function() {
		var itp = $(".item09");
		itp.find(".tit01").removeClass("tran01");
		itp.find(".tit02").removeClass("tran02");
		itp.find(".tit03").removeClass("tran02");
		var itn = $(".item02");
		itn.find(".tit01").removeClass("tran01");
		itn.find(".tit01").removeClass("")
	});
	$(".t1").bind("touchend", function() {
		var num = $(this).text().replace(/\D/g, "");
		location.href = "tel:" + num
	});
	$(".item09 .close").bind("touchend", function() {
		$(this).parent().removeClass("tran01")
	})
});
$(function() {
	$(".datebox select").each(function() {
		var _this = $(this);
		var selectDom = _this.get(0);
		var selectId = selectDom.id;
		var _day = $("#day");
		var _month = $("#month");
		var _year = $("#year");
		selectDom.onchange = function() {
			var sedIndex = selectDom.selectedIndex;
			var sedValue = selectDom.options[sedIndex].value;
			var showBox = _this.siblings("p");
			if (selectId == "year") {
				showBox.text(sedValue + "年");
				if (_this.siblings("p").text() == "年") {
					_this.get(0).options[0].selected = true;
					sedValue = "";
					return
				}
			} else if (selectId == "month") {
				if (_year.siblings("p").text() == "年") {
					_this.get(0).options[0].selected = true;
					sedValue = "";
					alert("请先选择年份");
					return
				}
				showBox.text(sedValue + "月");
				if (_this.siblings("p").text() == "月") {
					_day.get(0).options[0].selected = true;
					_day.siblings("p").text("日");
					sedValue = "";
					return
				}
				var dayhtml = "";
				for (var i = 0; i <= 28; i++) {
					var tmpval = 0;
					if (i == 0) {
						var tmpval = ""
					} else {
						var tmpval = i
					}
					dayhtml += "<option value=\"" + tmpval + "\">" + tmpval + "日</option>"
				}
				if (sedValue) {
					var appopt = "<option value=\"29\">29日</option><option value=\"30\">30日</option>";
					var curday = parseInt(_day.siblings("p").text());
					if (sedValue == "2") {
						if (curday > 29) {
							_day.siblings("p").text("日")
						}
					} else if (sedValue == "4" || sedValue == "6" || sedValue == "9" || sedValue == "11") {
						dayhtml += appopt;
						if (curday > 30) {
							_day.siblings("p").text("日")
						}
					} else {
						appopt += "<option value=\"31\">31日</option>";
						dayhtml += appopt
					}
				} else {
					_day.siblings("p").text("日")
				}
				_day.html(dayhtml);
				if (curday > 0 && curday < _day.find("option").length) {
					_day.get(0).options[curday].selected = true
				} else {
					_day.get(0).options[0].selected = true
				}
			} else if (selectId == "day") {
				if (_year.siblings("p").text() == "年" || _month.siblings("p").text() == "月") {
					_this.get(0).options[0].selected = true;
					sedValue = "";
					alert("请先选择年、月份");
					return
				}
				showBox.text(sedValue + "日")
			}
		}
	})
});