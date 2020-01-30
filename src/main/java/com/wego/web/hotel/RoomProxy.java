package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import lombok.Data;

@Data
@Component
public class RoomProxy {
	@Autowired HotelMapper hotelMapper;
	

	public List<String> roomimgList() {
		List<String> roomimg = Arrays.asList("https://image.goodchoice.kr/resize_370x220/affiliate/2016/05/23/57427066030b2.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2016/12/06/584623540866a.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/08/5938fe71bd97d.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15540000/15536400/15536302/390f425f_b.jpg",
				"https://exp.cdn-hotels.com/hotels/2000000/1530000/1528600/1528555/187bddf0_b.jpg",
				"https://image.goodchoice.kr/resize_370x220/affiliate/2017/06/01/592fbbde76887.jpg",
				"https://exp.cdn-hotels.com/hotels/40000000/39760000/39757400/39757330/86df6c02_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/01b38d28_b.jpg",
				"https://exp.cdn-hotels.com/hotels/9000000/8770000/8762900/8762820/03a00032_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/700c36bb_b.jpg",
				"https://exp.cdn-hotels.com/hotels/11000000/10640000/10630800/10630729/98f72664_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f8b790d0_b.jpg",
				"https://exp.cdn-hotels.com/hotels/17000000/16270000/16267100/16267029/f6ad45fc_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/16000000/15160000/15157500/15157404/7685d33a_b.jpg",
				"https://exp.cdn-hotels.com/hotels/34000000/33070000/33064700/33064680/976cbcbd_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/fa820e75_b.jpg",
				"https://exp.cdn-hotels.com/hotels/12000000/11020000/11017800/11017715/d650a32c_b.jpg");
		
		return roomimg;
	}
	
	  public List<String> hotelinfo() {
		  
	  List<String> hotelinfo = Arrays.asList("강남파이낸스센터 근처에 위치한 4성급 호텔, 레스토랑 이용 가능", 
			  "가로수길 근처에 위치한 4성급 호텔, 레스토랑 이용 가능", "남대문시장 근처에 위치한 4성급 호텔, 실내 수영장 이용 가능", 
			  "청계천 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", "강서에 있으며 강가에 위치한 호텔, 레스토랑 및 바/라운지 이용 가능",
	  "서울대학교 근처에 위치한 부티크 호텔, 레스토랑 이용 가능", "청계천에 가기 편리한 3성급 호텔", "스타필드 코엑스몰 근처에 위치한 아르데코 양식의 호텔, 레스토랑 이용 가능", 
	  "서울에 있는 아르데코 양식의 호텔, 레스토랑 이용 가능", "가로수길 근처에 위치한 3성급 호텔, 레스토랑 이용 가능", "가로수길 근처의 3성급 호텔, 스파 이용 가능", 
	  "코엑스 아쿠아리움 근처에 위치한 3성급 호텔, 레스토랑 이용 가능", "서울 국립대학 병원 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", 
	  "부천의 도심에 있는 호텔", "청계천 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능", "롯데백화점 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능",
	  "강남에 위치한 3.5성급 호텔, 레스토랑 및 헬스클럽 이용 가능", "광장시장 근처에 위치한 3.5성급 호텔, 레스토랑 이용 가능");
	  
	  return hotelinfo; }
	 


    public List<String> UseridList() {

        List<String> uids = Arrays.asList("agewf5", "bsqwr", "cgsdgf", "dqetsd", "egsqdf", "fdqdf", "gdsfds", "hhjrdf", "ssdfi", "ddgwj", "kgrsd", "sdfwe11", "sdgd2", "sdgds4", "sdgsd1",
                  "kkdmwo99", "vkske04", "rqeeru", "ssdgme", "tkkfw31", "ummd12","dkdkfl193");
        Collections.shuffle(uids);
       return uids;
   }
  
	public List<String> commentsList(){
		List<String> comments = Arrays.asList("강아지데리고가서 해먹으면서 놀기에는 최고에요. 룸컨디션도 나쁘지않고, 스텝들도 엄청친절해요",
				"반려동물과 함께 가족 숙박으로 좋은 선택이었어요.",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌",
				"가성비 대비 방싸이즈 주방 세탁기구비 등등 만족하고 특히 투숙객 사우나 무료이용이 출장객한테는 하루 피로를 풀수있는 좋은 기회인거 같습니다",
				"깨끗하고 안락한 숙박시설",
				"합리적이며 편안한 숙박지이었어요... 사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"깔끔한 객실과 친절한 서비스",
				"편의시설이 잘 되어있고 숙소 또한 깨끗하고 편리하게 이용할 수있도록 되어있었어요...그리고 직원분들이 친절하셨어요^^!!",
				"방은 넓고 쾌적하였습니다",
				"넓고 좋았어요 치약이 부족했던 점 제외하고는 괜찮았아요","시설이 낡은거 외엔 다 편리합니다. 가격대비 가성비 좋아요",
				"셀수없을정도로 자주 이용하는 곳입니다. 이번에도 전반적으로 전부 만족스러웠습니다",
				"다들 너무 좋다고 겨울오기전에 또 가기로 했어요",
				"제가 약간 귀찮은 요구를 했었는데도 친절하게 응대해 주셔서 너무 감사했습니다","좋아요",
				"위치가 너무너무 좋지만.. 커피포트 같은 건 관리가 됐으면 좋겠어요","고양이, 강아지 데리고 놀러갔는데 좋았어요",
				"반려동물과 함께 자주 찾는 곳이고, 앞으로 더 자주 찾을 것 같아요.");

		
		return comments;
		
	}
	
	public List<Double> ratingList(){
		List<Double> rating = Arrays.asList(8.6,5.4,8.6,8.0,6.4,9.4,5.2,8.0,4.0,5.5,9.2,9.2,7.0,7.2,6.4,7.6,5.4,5.5);
		
		return rating;
		
	}

	

	public List<String> roomtypeList() {
		List<String> roomtype = Arrays.asList("스튜디오 더블", 
				"스튜디오 트윈", 
				"원베드 디럭스", 
				"투베드 디럭스",
				"스튜디오,퀸사이즈침대 1개",
				"스튜디오,싱글침대 2개",
				"베이직룸",
				"aloft,룸,킹사이즈침대 1개,시내 전망",
				"aloft,룸,싱글침대 2개,시내 전망",
				"패밀리룸",
				"Quad Room",
				"스탠다드룸",
				"디럭스룸",
				"공용 도미토리,여성 전용",
				"공용 도미토리2,여성 전용",
				"시티룸,퀸사이즈침대 1개",
				"스탠다드룸,금연",
				"4인 도미토리");
		
		return roomtype;
	}

	public List<Integer> priceList(){
		List<Integer> price = Arrays.asList(93397,47273,95000,52364,90909,36091,40909,53273,45455,
				63636,59091,160000,52728,61322,49587,36364,35455,36364);
		
		return price;
		
	}
	public List<String> hotelnameList() {
		List<String> hotelname = Arrays.asList("호텔 카푸치노","알로프트 서울 강남","프레이저 플레이스",
				"더리센츠 호텔","골든호텔","카라쉬 호텔","케니스토리","호텔 크레센도","호텔 데님",
				"호텔 선샤인 서울","호텔 포레힐","라비타 호텔","메이플레이스","호텔 파비아","아벤트리 호텔","크라운 호텔","호텔 페이토","호텔 아트리움");
		
		return hotelname;
	}
	public List<String> hotelimgList(){
		List<String> hotelimg = Arrays.asList("https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/02/20/5a8bd16270015.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743e4abad01d.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2017/05/12/59155dd18fd3b.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57427066030b2.jpg",//
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/60449/0/5cf9fa5002ed3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/11/20/5dd4d28239794.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/57843/0/5d6cc2fc934bc.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743b380cbe43.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/10/17/5da8243dcefbd.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/24/5743fc4cd44d8.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/23/57425f4e7f400.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/51149/0/5b472ee80c5ef.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/21/573ffda182be0.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/46392/0/592f4601e1fb3.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2019/07/16/5d2d628cede99.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2016/05/20/573ebadaddeed.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/affiliate/2018/10/31/5bd96e0371c77.jpg",
				"https://image.goodchoice.kr/resize_1000X500x0/adimg_new/6244/0/574e49a02aef8.jpg");
		
		return hotelimg;
		
	}
	public List<String> haddrList(){
		List<String> haddr = Arrays.asList("서울특별시 강남구 봉은사로 155", 
				"서울 강남구 영동대로 736", 
				"서울 중구 통일로 78 프레이저플레이스", 
				"서울특별시 동대문구 천호대로 383",
				"서울특별시 강서구 공항대로 663",
				"서울특별시 동작구 동작대로1길 15",
				"서울특별시 종로구 창경궁로16가길 9",
				"서울특별시 서울특별시 봉은사로 428",
				"서울특별시 강남구 논현로 66",
				"서울특별시 강남구 도산대로 205",
				"서울특별시 강남구 학동로 117",
				"서울특별시 강남구 영동대로 712",
				"서울특별시 종로구 율곡로 179",
				"경기도 부천시 원미구 심곡동 139-14",
				"서울특별시 종로구 우정국로 46",
				"서울특별시 중구 남대문로7길 19",
				"서울특별시 서초구 강남대로 259",
				"서울특별시 종로구 중구 창경궁로 106");
		
		return haddr;
		
	}
	public String selectHseq() {
		String result = "";
		 int a[] = new int[10]; //int형 배열 선언
	        Random r = new Random(); //객체생성
	        System.out.print("중복없이 뽑힌 6개의 숫자는 : ");
	        for(int i=0;i<=9;i++)    //숫자 6개를 뽑기위한 for문
	        {
	            a[i] = r.nextInt(10)+1; //1~10숫자중 랜덤으로 하나를 뽑아 a[0]~a[5]에 저장
	            for(int j=0;j<i;j++) //중복제거를 위한 for문 
	            {
	                /*현재 a[]에 저장된 랜덤숫자와 이전에 a[]에 들어간 숫자 비교
	                 ※예를 들어
	                 배열 a[3]에 숫자 6이 들어갔을때 이전에 완성된 배열 a[0],a[1],a[2]와 비교하여
	                 숫자 6이 중복되지 않을시 다음 a[4]으로 넘어가고, 중복된다면 다시 a[3]에 중복되지   
	                 않는 숫자를 넣기 위하여 i를 한번 감소한후 처음 for문으로 돌아가 다시 a[3]을 채운다
	                 */
	                if(a[i]==a[j])  
	                {
	                    i--;
	                    result=Integer.toString(a[i]); 
	                    System.out.println(result + "===================");
	                }
	            }
	        }
	        for(int k=0;k<=9;k++) //채워진 배열을 출력하기 위한 for문
	        {
	            if(k==9)
	            {
	                System.out.print(a[k]);
	            }
	            else
	            {    
	                System.out.print(a[k]+",");
	            }
	            
	        }
	        
	        System.out.print("입니다.");
			return result;


	}
	 public List<Room> roomDB() {
		 Room room= null;
		 List<Room> roomList = new ArrayList<>();
		 for(int i = 0 ; i<roomtypeList().size();i++) {
			 room = new Room(roomtypeList().get(i), hotelinfo().get(i), UseridList().get(i),
					 commentsList().get(i), ratingList().get(i),roomimgList().get(i), priceList().get(i),
					 hotelnameList().get(i), hotelimgList().get(i), haddrList().get(i), selectHseq());
			 roomList.add(room);
			
		 }
		 
	  return roomList;
	 }
	 
		@Transactional
		public void insertRoomDB() {
			 List<Room> rList = roomDB();
			for(int i=0;i<rList.size();i++) {
				hotelMapper.insertRoom(rList.get(i));
			}
		
		}
	 
}