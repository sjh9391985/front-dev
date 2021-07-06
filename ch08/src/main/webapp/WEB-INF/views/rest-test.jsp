<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="${pageContext.request.contextPath }/jquery/jquery-3.6.0.js"
	type="text/javascript"></script>
<script>
	$(function() {
		const vo = {

		};

		$("#create").click(function() {
			const vo = {
				name : "둘리",
				password : "1234",
				email : "dooly@gmail.com",
				gender : "male"
			};
			$.ajax({
				url : "${pageContext.request.contextPath }/api/user",
				dataType : "json", //받을 때 포맷
				type : "post", // 요청 method
				// post 요청시 보내는 데이터

				// 1. form data 포맷 (application/x-www)
				// contentType: "application/x-www-form-urlencoded",	
				// data: "name=손재현&password=1234&message=Hi",			

				// 2. json data 포멧
				contentType : "application/json",
				data : JSON.stringify(vo),

				success : function(response) {
					console.log(response);
				}
			});
		});
		
		$("#read").click(function() {
			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				dataType : "json", //받을 때 포맷
				type : "get", // 요청 method	
				success : function(response) {
					console.log(response);
				}
			});
		});
		
		$("#update").click(function() {
			const vo = {
				name : "둘리",
				password : "",
				email : "dooly@gamil.com",
				gender : "male"
			};

			$("button").click(function() {
				$.ajax({
					url : "${pageContext.request.contextPath }/api/user/10",
					async : true,
					dataType : "json", //받을 때 포맷
					type : "put", // 요청 method
					contentType : "application/json",
					data : JSON.stringify(vo),

					success : function(response) {
						console.log(response);
					}
				});
			});
		});

		$("#delete").click(function() {
			$.ajax({
				url : "${pageContext.request.contextPath }/api/user/10",
				async : true,
				dataType : "json", //받을 때 포맷
				type : "delete", // 요청 method
				data : "password=1234",
				success : function(response) {
					console.log(response);
				}
			});
		});
	});
</script>
</head>
<body>
	<h1>AJAX Test - Restful API</h1>
	<button id="create">Create(post)</button>
	<br />
	<br />

	<button id="read">Read(get)</button>
	<br />
	<br />

	<button id="update">Update(put)</button>
	<br />
	<br />

	<button id="delete">Delete(delete)</button>
</body>
</html>
