package com.example.letsmashup_back.model;

import lombok.Builder;

@Builder
public class ResponseMember {
    private long memberPriId;
    private String memberId;
    private String passWord;
}
