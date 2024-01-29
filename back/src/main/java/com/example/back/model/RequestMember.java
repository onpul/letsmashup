package com.example.back.model;



import com.example.back.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class RequestMember {
    private String memberId;
    private String passWord;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .memberId(this.memberId)
                .passWord(this.passWord)
                .createdAt(this.createdAt)
                .updatedAt(this.updatedAt)
                .build();
    }
}
