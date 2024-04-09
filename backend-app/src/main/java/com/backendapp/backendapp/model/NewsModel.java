package com.backendapp.backendapp.model;

import com.backendapp.backendapp.Pojo.NewsArticle;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class NewsModel {
    private final NewsRepository newsRepository;

    @Autowired
    public NewsModel(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<NewsArticle> getNews() {
        return  newsRepository.findAll();
    }
}
