package com.backendapp.backendapp.model;

import com.backendapp.backendapp.Pojo.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}