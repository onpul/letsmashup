package com.example.back.service;



import com.example.back.entity.MemberEntity;
import com.example.back.model.RequestMember;
import com.example.back.model.ResponseMember;
import com.example.back.repository.MemberRepository;
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
