package com.example.back.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@AllArgsConstructor
@Getter
public class ResponseMember {
    private long memberPriId;
    private String memberId;
    private String passWord;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
