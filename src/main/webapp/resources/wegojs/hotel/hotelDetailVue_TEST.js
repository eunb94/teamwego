var hotelDetailVue = hotelDetailVue || {}
hotelDetailVue = {
		hDetail_body: x=>{
			return '<style>'+
			'.modal{'+
			'    display: grid;'+
			'/*      grid-template-columns: 20% 1fr; */'+
			'        grid-template-rows: 100px 630px;'+
			'        width: 50%'+
			'        height: 100%'+
			'        border: 1px solid black; '+
			'        text-align: center;'+
			'}'+
			'.detail{}'+
			'.title{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc; '+
			'    }'+
			'.head{'+
			'/*             display: grid;'+
			'grid-template-columns: 20% 1fr;'+
			'        grid-template-rows: 100px 630px; */'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 10%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main{'+
			'    display:inline-flex;'+
			'     width: 100%;'+
			'    height: 90%;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.content{'+
			'     display:inline-table;'+
			'     width: 100%;'+
			'    height: 100%;'+
			'   /*  float: left; */'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.con{'+
			'      width: inherit;'+
			'    height: 100%; '+
			'    text-align: center;'+
			'    float: left;'+
			'  border: 1px solid #bcbcbc;   '+
			'}'+
			
			'	.container{'+
			'		/* display: grid; */'+
			'		grid-template-columns: 0% 1fr;'+
			'		/* grid-template-rows: 50px 500px 50px; */'+
			'		height: 100%'+
			'		border: 1px solid #bcbcbc; '+
			'		grid-template-areas: '+
			'		"header header"'+
			'		"side main"'+
			'		"footer footer"}'+
			'	.header{'+
			'		grid-area: header;'+
			'		margin: 0 auto;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			'		.main{'+
			'		grid-area: main;'+
			'		display: grid;'+
			'		grid-template-rows: 300px 500px 500px;'+
			'		border: 1px solid #bcbcbc; '+
			'	}'+
			
			'.main1 {'+
			
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: rgba(255);'+
			'	border: 1px solid #bcbcbc;} ;'+
			'	.main2 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;	'+
			'          font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
			'	.main3 {'+
			'	background-repeat: no-repeat;'+
			'	  background-attachment: fixed;'+
			'  background-size: 100% 100%;'+
			'        font-weight: bold;'+
			'          text-align: center;'+
			'        background-color: #ffffff;'+
			'        opacity: 0.9;'+
			'	border: 1px solid #bcbcbc; '+
			'	}'+
/*			'.main_common1{'+
			'background-image: url(https://images.trvl-media.com/hotels/11000000/10560000/10554500/10554498/623758b9.jpg?impolicy=fcrop&w=1200&h=800&p=1&q=medium);'+
			'	background-repeat: no-repeat;'+
			' 	  background-attachment: fixed; '+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 700px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+*/
			'.main_common2{'+
			'    display:inline-table;'+
			'    float: left;'+
			'    width: 430px;'+
			'    height: 300px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.main_common3{'+
			'    width: 100%;'+
			'    height: 100px;'+
			'    border: 1px solid #bcbcbc;'+
			'    margin-bottom: auto 0;'+
			'}'+
			'.calendar-container{'+
			'	 width: 100%;'+
			'    height: 100%;'+
			'}'+
			/*'.content1{'+
			'	grid-area: main3;'+
			'	display: grid;'+
			'	grid-template-rows: 250px 250px'+
			'    width: 50px;'+
			'    height: 50px;'+ 
			'}'+*/
		/*	'.content2{'+
			'	border: 1px solid black; '+
			'    height: 250px; '+
			'}'+*/
			'.inner {'+
			'	background-image: url(https://image.goodchoice.kr/resize_370x220/affiliate/2019/11/19/5dd3a0ef3a514.jpg);'+
			'	background-repeat: no-repeat;'+
			'/* 	  background-attachment: fixed; */'+
			'  background-size: 100% 100%;'+
			'    display:inline-table;'+
			'     width: 50%;'+
			'    height: 100%;'+
			'    float: left;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'.content3{'+
			'	grid-area: main_2 main_common2;'+
			'	width: 100%;   '+
			'    height: 100px;'+
			'    border: 1px solid #bcbcbc; '+
			'}'+
			'#star_grade a{'+
			'        text-decoration: none;'+
			'        color: gray;'+
			'    }'+
			'    #star_grade a.on{'+
			'        color: red;'+
			'    }'+
			'#comments{  border: 1px solid #bcbcbc;}'+
			'</style>'+
			'<body>'+
			'	<div class="container">'+
			'		<div class="header">'+
			'   <div class="main">'+
			'      <div class="main1" id="main1">'+

			'    </div>'+
			

			'<div class="booking_content" id="main2">'+
			'                        <div class="tab-content" id="myTabContent">'+
			'                            <div class="tab-pane fade show active" id="hotel" role="tabpanel" aria-labelledby="hotel-tab">'+
			'                                <div class="booking_form">'+
			'                                    <form action="#">'+
		
			/*Dynamic Pills*/
			'<div class="container1">'+
			' <div> <h1>호텔이름</h1></div>'+
			'<div class = "sstar">'+
			'                        <p id="star_grade">'+
			'                        <a href="#">★</a>'+	
			'                        <a href="#">★</a>'+
			'                        <a href="#">★</a>'+
			'                        <a href="#">★</a>'+
			'                        <a href="#">★</a>'+
			'                        </p> '+
			'                        </div> '+
			'<p>상세설명</p>'+
			
			'  <ul class="nav nav-pills">'+
			'    <li class="active"><a data-toggle="pill" href="#home"><h4> 객실 / </h4></a></li>'+
			'    <li><a data-toggle="pill" href="#menu1"><h4> 정책 / </h4></a></li>'+
			'    <li><a data-toggle="pill" href="#menu2"><h4> 이용후기  </h4></a></li>'+
			/*'    <li><a data-toggle="pill" href="#menu3">Menu 3</a></li>'+*/
			'  </ul>'+
			'  '+
			'  <div class="tab-content">'+
			'    <div id="home" class="tab-pane fade in active">'+
			'      <h2 style="font-weight: bold; text-align: center;">객실</h2>'+
		
			'    <div id="menu1" class="tab-pane fade">'+
			'      <h2 style="font-weight: bold; text-align: center;">정책</h2>'+
			'  <div><h4>환불 불가</h4></br>'+
			'<p>예약이 확정되면 취소/변경이 불가능합니다.체크인하지 않을 경우 노쇼(No-show)로 간주되며, 예약 총 금액(000,000원)이 부과됩니다.</p></br>'+
			'<h4>결제방법</h4></br>'+
			'<p>객실 확보를 위해 신용카드가 사전승인되거나, 객실 요금과 동일한 요금이 결제됩니다. 예약가능한 객실이 없는 경우에는 전액 환불됩니다.</p></br>'+
			'<p>기간 이후 예약을 변경하거나 취소하시는 경우 1박에 해당하는 요금(세금 포함)이 수수료로 부과됩니다.</p></br></div>'+
			'    </div>'+
			'    <div id="menu2" class="tab-pane fade">'+
			'      <h2 style="font-weight: bold; text-align: center;">이용후기</h2>'+
			'      <div id="comments"><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p></div>'+
			'    </div>'+
			'    <div id="menu3" class="tab-pane fade">'+
			'      <h3>Menu 3</h3>'+
			'      <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>'+
			'    </div>'+
			'  </div>'+
			'</div>'+
		/*	Dynamic Pills*/
			'	</div>'+
			'</div>'
			'		</div>'+
			'		</div>'+
			'	</div>'+
			'</body>'
		}
}