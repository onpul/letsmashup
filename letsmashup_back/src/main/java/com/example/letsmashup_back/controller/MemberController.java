package com.example.letsmashup_back.controller;

import com.example.letsmashup_back.model.RequestMember;
import com.example.letsmashup_back.model.ResponseMember;
import com.example.letsmashup_back.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PutMapping("/v1/member")
    public ResponseMember createMember(RequestMember requestMember){
        return memberService.createMember(requestMember);
    }
}
