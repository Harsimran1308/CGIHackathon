package com.backendapp.backendapp.model;
import com.backendapp.backendapp.Pojo.NewsArticle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NewsRepository extends MongoRepository<NewsArticle, String> {
}
