package com.example.back.controller;

import com.example.back.model.RequestLogin;
import com.example.back.model.ResponseMember;
import com.example.back.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class LoginController {

    private final LoginService loginService;

    @GetMapping("/v1/login")
    public ResponseMember memberLogin(RequestLogin requestLogin){
        return loginService.memberLogin(requestLogin);
    }
}
