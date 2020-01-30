<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<!-- 구글 -->
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<meta name = "google-signin-client_id"content = "813380440202-h745hh56io2il5c0276i5th66iil2rth.apps.googleusercontent.com">
<title>Insert title here</title>
</head>
<body>
    <script>
        function onSignIn(googleUser) {
            // Useful data for your client-side scripts:
            var profile = googleUser.getBasicProfile();
            // The ID token you need to pass to your backend:
            var id_token = googleUser.getAuthResponse().id_token;
        };
    </script>
</body>
</html>