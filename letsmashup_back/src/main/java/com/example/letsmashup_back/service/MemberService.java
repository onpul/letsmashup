package com.example.letsmashup_back.service;

import com.example.letsmashup_back.entity.MemberEntity;
import com.example.letsmashup_back.model.RequestMember;
import com.example.letsmashup_back.model.ResponseMember;
import com.example.letsmashup_back.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public ResponseMember createMember(RequestMember requestMember){
        MemberEntity memberEntity = memberRepository.save(requestMember.toEntity());
        return memberEntity.toResponse();
    }
}
