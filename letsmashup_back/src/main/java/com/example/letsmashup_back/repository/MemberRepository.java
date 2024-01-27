package com.example.letsmashup_back.repository;

import com.example.letsmashup_back.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity,Long> {
}
