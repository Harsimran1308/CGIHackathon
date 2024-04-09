package com.backendapp.backendapp.controller;

import com.backendapp.backendapp.Pojo.NewsArticle;
import com.backendapp.backendapp.model.NewsModel;
import com.backendapp.backendapp.model.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/news")
@CrossOrigin
public class News {

    private NewsModel newsModel;
    @Autowired
    private NewsRepository newsRepository;


    @GetMapping("/getAll")
    public ResponseEntity<List<NewsArticle>> getAllNewsArticles() {
        List<NewsArticle> newsArticles = newsRepository.findAll();
        return new ResponseEntity<>(newsArticles, HttpStatus.OK);
    }
}

