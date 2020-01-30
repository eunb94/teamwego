"use strict"
var hotelDetail = hotelDetail || {}
hotelDetail = (()=>{
	const WHEN_ERR = '호출하는 hotelDetail js를 찾을 수 없습니다 .'
	        let context, js;
	        let routerjs;
	        let mainVuejs, hotelMainVuejs, hotelHomejs,hotelComparejs, hotelPayjs;
	        let init=()=>{
	            context = $.ctx()
	            js = $.js()
	            routerjs = js+'/cmm/router.js'
	          	mainVuejs = js+'/vue/mainVue.js'
	          	hotelMainVuejs = js+'/hotel/hVue/hotelMainVue.js'
	          	hotelHomejs = js+'/hotel/hotelHome.js'
	          	hotelComparejs = js+'/hotel/hotelCompare.js'
	          	hotelPayjs = js + '/hotel/hotelPay.js'
	        }
	        let onCreate=()=>{
	        	init();
	        	$.when(
	                    $.getScript(mainVuejs),
	                    $.getScript(routerjs),
	                    $.getScript(hotelHomejs),
	                    $.getScript(hotelComparejs),
	                    $.getScript(hotelPayjs)
	               
	        	).done(()=>{
	                setContentView()
	                gpa()
	                compare()
	                roomList()
	        	}).fail(()=>{
	        		alert(WHEN_ERR)
	        	})
	        }
	        let setContentView=()=>{ 	
	            let x = {css:$.css(),img:$.img()}
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	        }
	    	let hotelComparego=()=>{
	    		$('#detailgo').click(e=>{
	    			e.preventDefault()
	    		})
	    	}

	    	let gpa = ()=>{
				$('#star_grade a').click(function(){
		            $(this).parent().children("a").removeClass("on");  
		            $(this).addClass("on").prevAll("a").addClass("on"); 
		            return false;
		        })
			}
	    	let compare=()=>{
	    		$('#btn_cancel').click(e=>{
					e.preventDefault()
				})
				$('#add_file').click(e=>{
					e.preventDefault()
					alert('>>>> ')
					const modal = document.getElementById("myModal");
					modal.style.display = "block";
				})
	    	}
	    	 let heart=()=>{
	    			$('#heart1').on("click",function(e) {
	    				var $this = $(this);
	    			$this.find(">img").attr("src", function(index, attr) {
	    				if(attr.match('beforeheart')){
	    					return attr.replace("beforeheart.png","afterheart.png")
	    				}else {
	    					return attr.replace("afterheart.png", "beforeheart.png")
	    				}
	    			})
	    			})
	    		}
	    	 
	    	let roomList=x=>{
	    		$('#mainbody').html(hotelDetailVue.hDetail_body(x))
	    		 $('html').scrollTop(0);
	    		
	    		context = $.ctx()
	    		$.getJSON(context+'/hotel/roomlist', d=>{
	    			let r = d.room
	    			let i = x-1
	    			
	    			console.log(r)
	    			$(	' <div class="main_1 main_common1" style="background-repeat: no-repeat; background-attachment: fixed; background-size: 100% 100%; display:inline-table;  float: left; width: 700px; height: 300px; border: 1px solid #bcbcbc; >'+
	    					'          <p class="content"><img src="'+r[i].hotelimg+'"/></p>'+
	    					'        </div>'+
	    					'          <div class="main_2 main_common2"  style= display:inline-table; float: left; width: 430px; height: 300px;  border: 1px solid #bcbcbc; >'+
	    					'            <div class="content3"><h2 style="font-weightbolder">'+r[i].hotelname+'</h2></div>'+
	    					'            <div class="content3"><h2 style="font-weightbolder">'+r[i].haddr+'</h2></div>'+
	    					'          <div class="content3">지도</div>'+
	    					'          </div>').appendTo('#main1')

	    		$(    '<div class="container_hotelnavi">'+
	    				'  <h2>'+r[i].hotelname+'</h2><h3>평점 : '+(r[i].rating + r[x].rating) / 2+'</h3>'+
	    				' <h3>'+r[i].hotelinfo+'</h3>'+
	    				'  <ul class="nav nav-pills">'+
	    				'    <li class="active"><a data-toggle="pill" href="#home">객실</a></li>'+
	    				'    <li><a data-toggle="pill" href="#menu1">정책</a></li>'+
	    				'    <li><a data-toggle="pill" href="#menu2">이용후기</a></li>'+
	    			/*	'    <li><a data-toggle="pill" href="#menu3">Menu 3</a></li>'+*/
	    				'  </ul>'+
	    				'  '+
	    				'  <div class="tab-content">'+
	    				'    <div id="home" class="tab-pane fade in active">'+
	    				'      <h1 style="font-weight: bold;">객실</h1>'+
	    				
	    				'				<div class="content2">'+
    					'				 <div class="inner" style="background-image: url('+r[i].roomimg+');"></div>'+
    					'				<div class="inner2">'+
    					'				<h2>'+r[i].roomtype+'</h2>'+
    					'				<h2>'+r[i].price+'원</h2>'+	
    					'				 <button id="hPaygo" type="button"   onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;"> 예약</button>'+
    					'				 </div>'+
    					'				 </div>'+
	    				
    					'<div class="content2">'+
    					'				 <div class="inner" style="background-image: url('+r[x].roomimg+');"></div>'+
    					'				<div class="inner2">'+
    					'				<h2>'+r[x].roomtype+'</h2>'+
    					'				<h2>'+r[x].price+'원</h2>'+	
    					'				 <button id="hPaygo2" type="button"   onclick="location.href="/reservation?adcno=2&amp;ano=61931&amp;armgno=239371&amp;checkin_type=2&amp;checkin_date=2019-12-26&amp;checkout_date=2019-12-27";" class="genric-btn primary radius" style="inline-size:-webkit-fill-available; font-size: x-large;"> 예약</button>'+
    					'				 </div>'+
    					'				 </div>'+
	    				
	    				
	    				'    </div>'+
	    				'    <div id="menu1" class="tab-pane fade">'+
	    				'      <h1 style="font-weight: bold;">정책</h1>'+
	    				'<p>------------------------------------------------------------------------------------------</p>'+
	    				'<h4>환불 불가</h4></br>'+
	    				'<p>예약이 확정되면 취소/변경이 불가능합니다.체크인하지 않을 경우 노쇼(No-show)로 간주되며, 예약 총 금액(000,000원)이 부과됩니다.</p></br>'+
	    				'<h4>결제방법</h4></br>'+
	    				'<p>객실 확보를 위해 신용카드가 사전승인되거나, 객실 요금과 동일한 요금이 결제됩니다. 예약가능한 객실이 없는 경우에는 전액 환불됩니다.</p></br>'+
	    				'<p>기간 이후 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</p></br>'+
	    				'<h4>No refund</h4></br>'+
	    				'<p>Once the reservation is confirmed, you cannot cancel/change it.Failure to check in will result in no-show and a total booking of 000,000 will be charged.</p></br>'+
	    				'<h4>Payment method</h4></br>'+
	    				'<p>To secure a room, your credit card will be approved in advance, or you will be charged the same rate as your room rate. If you do not have a room available for reservation, you will receive a full refund.</p></br>'+
	    				'<p>If you change or cancel your reservation after the period, you will be charged a one-night fee (including tax).</p></br>'+
	    				'    </div>'+
	    				'    <div id="menu2" class="tab-pane fade">'+
	    				'      <h1 style="font-weight: bold;">이용후기</h1>'+
	    				'<p>------------------------------------------------------------------------------------------</p>'+
	    				'      <h3>'+r[i].comments+'-----'+r[i].uids+'★'+r[i].rating+'</h3>'+
	    				'      <h3>'+r[x].comments+'-----'+r[x].uids+'★'+r[x].rating+'</h3>'+
	    				'    </div>'+
	    				
	    				'  </div>'+
	    				'</div>').appendTo('#main3')
	    		
	    		$('#hPaygo').click(e=>{
	    			e.preventDefault()
	    			hotelPay.onCreate()

	    			
	    		})
	    			$('#hPaygo2').click(e=>{
	    			e.preventDefault()
	    			hotelPay.onCreate()

	    			
	    		})
	    		})
	    		
	    	}
	        return{onCreate, roomList}
})();