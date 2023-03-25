<%@page import="dao.MyDao" %>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
     <jsp:useBean id="mbean" class="bean.MyBean" scope="session" />
    <jsp:setProperty name="mbean" property="*" />
    <%
      MyDao dao= (MyDao)mbean.getMyDao();
      if(dao.contact(mbean)){
      session.setAttribute("name",mbean.getName());
    %>
      <jsp:forward page="index.html" />
      
   <%
    }
      else{
    	  out.print("Invalid data...");
    %>
    	  <br>
    	  <%@include file="index.jsp" %> 
    <% 
      }
    %>
</body>
</html>