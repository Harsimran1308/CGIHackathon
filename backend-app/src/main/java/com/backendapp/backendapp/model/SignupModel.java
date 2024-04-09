package com.backendapp.backendapp.model;

import com.backendapp.backendapp.Pojo.User;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class SignupModel {

    private final UserRepository userRepository;

    @Autowired
    public SignupModel(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(User user) {
        userRepository.save(user);
    }
}
