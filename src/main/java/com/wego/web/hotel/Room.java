package com.wego.web.hotel;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Component
@NoArgsConstructor
@Lazy
public class Room {
	private String rseq, hotelinfo, uids, comments,roomimg,roomtype, hotelname, hotelimg, haddr, hseq;
	double rating;
	private int price;
	public Room(String roomtype, String hotelinfo,String uids,String comments, double rating,  
			String roomimg, int price, String hotelname, String hotelimg, String haddr, String hseq) {
		this.roomtype=roomtype;
		this.hotelinfo = hotelinfo;
		this.uids = uids;
		this.comments=comments;
		this.rating= rating;
		this.roomimg=roomimg;
		this.price=price;
		this.hotelname=hotelname;
		this.hotelimg=hotelimg;
		this.haddr=haddr;
		this.hseq=hseq;
	}
}