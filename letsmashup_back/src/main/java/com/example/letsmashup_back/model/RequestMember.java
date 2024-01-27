package com.example.letsmashup_back.model;

import com.example.letsmashup_back.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@AllArgsConstructor
public class RequestMember {
    private String memberId;
    private String passWord;

    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .memberId(this.memberId)
                .passWord(this.passWord)
                .build();
    }
}
