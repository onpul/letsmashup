package com.example.back.controller;



import com.example.back.model.RequestMember;
import com.example.back.model.ResponseMember;
import com.example.back.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/v1/member")
    public ResponseMember createMember(RequestMember requestMember){
        return memberService.createMember(requestMember);
    }


}
