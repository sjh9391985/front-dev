package com.douzone.frontdev.ch08.dto;

import javax.xml.bind.annotation.XmlRootElement;

import com.douzone.frontdev.ch08.vo.GuestBookVo;

@XmlRootElement(name="response")
public class XmlResult {
	private String result;  	/* "success" or "fail"  */
	private GuestBookVo data;   /* if success, data set */
	private String message; 	/* if fail, message set */
	
	private XmlResult() {
	}

	private XmlResult(GuestBookVo data) {
		result = "success";
		this.data = data; 
	}

	private XmlResult(String message) {
		result = "fail";
		this.message = message; 
	}

	public static XmlResult success(GuestBookVo vo) {
		return new XmlResult(vo);
	}

	public static XmlResult fail(String message) {
		return new XmlResult(message);
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}

	public GuestBookVo getData() {
		return data;
	}

	public void setData(GuestBookVo data) {
		this.data = data;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	@XmlRootElement(name="data")
	public static class GuestBookVo {
		private Long no;
		private String name;
		private String password;
		private String regDate;
		private String message;
		public Long getNo() {
			return no;
		}
		public void setNo(Long no) {
			this.no = no;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getRegDate() {
			return regDate;
		}
		public void setRegDate(String regDate) {
			this.regDate = regDate;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
	}	
}