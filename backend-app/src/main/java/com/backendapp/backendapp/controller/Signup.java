package com.backendapp.backendapp.controller;

import com.backendapp.backendapp.Pojo.User;
import com.backendapp.backendapp.model.SignupModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/signup")
public class Signup {
    private final SignupModel signupModel;

    @Autowired
    public Signup(SignupModel signupModel) {
        this.signupModel = signupModel;
    }

    @PostMapping("/save")
    public ResponseEntity<String> save(@RequestBody User user) {
        signupModel.saveUser(user);
        return new ResponseEntity<>("User added successfully", HttpStatus.CREATED);
    }
}
