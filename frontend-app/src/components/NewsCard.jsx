import React, { useState, useEffect } from 'react';
import './NewsSection.css'
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function NewsCard(props) {
    var newsSourceName = ""
    if (props.data.source === "cbc news") {
        newsSourceName = "CBC News"
      } else if (props.data.source === "toronto star") {
        newsSourceName = "Toronto Star"
      } else if (props.data.source === "city news") {
        newsSourceName = "City News"
      } else if (props.data.source === "global news") {
        newsSourceName = "Global News"
      } else if (props.data.source === "cnn") {
        newsSourceName = "CNN"
      } else if (props.data.source === "cnbc") {
        newsSourceName = "CNBC"
      } else if (props.data.source === "wall street journal") {
        newsSourceName = "Wall Street Journal"
      } else if (props.data.source === "the economist") {
        newsSourceName = "The Economist"
      } else {
        newsSourceName = "Source Not Found"
      }
    return (
        <div className='news-card'>
                <div className='news-card-details'>
                    <div className='news-image'>
                    <CardMedia
                        component="img"
                        sx={{ width: 150, height: 150 }}
                        image={props.data.photo_link}
                        alt="news-image"
                        className='loaded-news-image'
                    />
                    </div>
                    <div className='news-text'>
                        <div className='news-source'>
                            <CardMedia
                                component="img"
                                sx={{ width: 20, height: 20 }}
                                image={`${props.data.source}.jpg`}
                                alt="news-image"
                                className='loaded-news-icon'
                            />
                            <div className='loaded-news-source-name'>
                                {
                                     newsSourceName
                                }
                            </div>
                        </div>
                        <div className='loaded-news-header' onClick={() =>{window.open(props.data.link, '_blank')}}>
                            <Typography variant="h6" gutterBottom>
                                {props.data.title}
                            </Typography>
                        </div>
                        <div className='loaded-news-description-short'>
                            <Typography variant="body2" gutterBottom>
                                {props.data.summary}
                            </Typography>
                        </div>
                        <div className='loaded-news-time-section'>
                            <div className='loaded-news-time'>
                                {props.data.date}
                            </div>
                            <div className='loaded-news-read-time'>
                                {props.data.read_time}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    props.showDivider ? 
                        <Divider sx={{ my: 1.5 }} />
                        :
                        ""
                }
            </div>
    )
}