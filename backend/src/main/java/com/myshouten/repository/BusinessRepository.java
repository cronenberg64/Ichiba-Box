package com.myshouten.repository;

import com.myshouten.model.Business;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface BusinessRepository extends JpaRepository<Business, Long> {
    List<Business> findByCategory(String category);
    List<Business> findByNameContainingIgnoreCase(String name);
} 