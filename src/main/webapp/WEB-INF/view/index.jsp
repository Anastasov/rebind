<%@page language="java" contentType="text/html; charset=US-ASCII" pageEncoding="US-ASCII"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=US-ASCII">
    <title>ReBind</title>
    <link href="https://fonts.googleapis.com/css?family=Bungee|Maven+Pro:600|Montserrat:500,900|Nunito:700" rel="stylesheet">
</head>
<body>
<div id="rebind-app" ></div>
<spring:url value="/resources/js/rebind-app.js" var="rebindApp" />
<script type="text/javascript" src="${rebindApp}"></script>

</body>
</html>