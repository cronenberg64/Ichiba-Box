package com.myshouten.service;

import com.myshouten.model.Business;
import com.myshouten.repository.BusinessRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class BusinessService {
    private final BusinessRepository businessRepository;

    @Autowired
    public BusinessService(BusinessRepository businessRepository) {
        this.businessRepository = businessRepository;
    }

    public List<Business> getAllBusinesses() {
        return businessRepository.findAll();
    }

    public Optional<Business> getBusinessById(Long id) {
        return businessRepository.findById(id);
    }

    public List<Business> getBusinessesByCategory(String category) {
        return businessRepository.findByCategory(category);
    }

    public List<Business> searchBusinesses(String query) {
        return businessRepository.findByNameContainingIgnoreCase(query);
    }

    public Business createBusiness(Business business) {
        return businessRepository.save(business);
    }

    public Optional<Business> updateBusiness(Long id, Business businessDetails) {
        return businessRepository.findById(id)
            .map(existingBusiness -> {
                existingBusiness.setName(businessDetails.getName());
                existingBusiness.setDescription(businessDetails.getDescription());
                existingBusiness.setAddress(businessDetails.getAddress());
                existingBusiness.setPhoneNumber(businessDetails.getPhoneNumber());
                existingBusiness.setCategory(businessDetails.getCategory());
                existingBusiness.setOpeningHours(businessDetails.getOpeningHours());
                return businessRepository.save(existingBusiness);
            });
    }

    public void deleteBusiness(Long id) {
        businessRepository.deleteById(id);
    }
} 