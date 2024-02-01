package com.example.back.service;

import com.example.back.entity.MemberEntity;
import com.example.back.model.RequestLogin;
import com.example.back.model.ResponseMember;
import com.example.back.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LoginService {

    private final MemberRepository memberRepository;

    public ResponseMember memberLogin(RequestLogin requestLogin){
        MemberEntity memberEntity = memberRepository.findByMemberIdAndPassWord(requestLogin.getMemberId(), requestLogin.getPassWord())
                .orElseThrow(() -> new RuntimeException("일치하는 회원 없음"));
        return memberEntity.toResponse();
    }
}
