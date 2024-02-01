package com.example.back.util;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.Date;

public class JwtTokenUtil {

    public static String createToken(String loginId, String key, long expireTimeMs){
        Claims claims = Jwts.claims();
        claims.put("loginId",loginId);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expireTimeMs))
                .signWith(SignatureAlgorithm.HS256,key)
                .compact();
    }

    // Claims에서 loginId 꺼내기
    public static String getLoginId(String token, String scretKey){
        return extractClaims(token,scretKey).get("loginId").toString();
    }
    //발급된 Token이 만료시간이 지났는지 체크
    public static boolean isExpired(String token, String secretKey){
        Date expiredData = extractClaims(token, secretKey).getExpiration();
        return expiredData.before(new Date());
    }

    //SecretKey를 사용해 Token 파싱
    public static Claims extractClaims(String token, String secretKey){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }
}
