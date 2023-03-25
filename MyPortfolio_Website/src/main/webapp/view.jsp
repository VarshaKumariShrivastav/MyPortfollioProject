
<%@page import="dao.MyDao" %>
<%@page import="bean.ViewBean" %>
<%@page import="java.util.List" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<style>th{background:blue;color:white;font-size:30px;} td{background:white;color:blue;font-size:25px;}</style>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
     <jsp:useBean id="cvbean" class="bean.ViewBean" scope="session"/>
     <%
        MyDao dao1=(MyDao)cvbean.getMyDao();
        List<ViewBean> stlist1= dao1.getContactRecord();
      %>        
      <table border='2px' cellpadding='10px' cellspacing='0px'>
	  <tr><th>Name</th><th>Email</th><th>Subject</th><th>Massage</th></tr>
		<% 
		for(ViewBean sobj1: stlist1){
		%>	
		<tr>
		<td><%= sobj1.getName()%></td>
		<td><%= sobj1.getEmail()%></td>
		<td><%= sobj1.getSubject()%></td>
		<td><%= sobj1.getMsg()%></td>
		
		</tr>
		<% 
		}
		 %>
		</table>
</body>
</html>