import React, { useState, useEffect } from 'react';
import './NewsSection.css'
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';
import NewsCard from './NewsCard';

let news_loader_cards = []
for (let index = 0; index < 5; index++) {
    if(index == 4) {
        news_loader_cards.push(
            <div className='news-card'>
                <div className='news-card-details'>
                    <div className='news-image'>
                        <Skeleton animation="wave" variant="rectangular" className='skelton-image'/>
                    </div>
                    <div className='news-text'>
                        <div className='news-source'>
                            <Skeleton animation="wave" variant="circular" width={20} height={20} />
                            <Skeleton animation="wave" height={20} width="40px" className='news-source-name'/>
                        </div>
                        <div className='news-header'>
                            <Skeleton animation="wave" height={40} width="70%"/>
                        </div>
                        <div className='news-description-short'>
                            <Skeleton animation="wave" height={20} width="90%"/>
                            <Skeleton animation="wave" height={20} width="60%"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        news_loader_cards.push(
            <div className='news-card'>
                <div className='news-card-details'>
                    <div className='news-image'>
                        <Skeleton animation="wave" variant="rectangular" className='skelton-image'/>
                    </div>
                    <div className='news-text'>
                        <div className='news-source'>
                            <Skeleton animation="wave" variant="circular" width={20} height={20} />
                            <Skeleton animation="wave" height={20} width="40px" className='news-source-name'/>
                        </div>
                        <div className='news-header'>
                            <Skeleton animation="wave" height={40} width="70%"/>
                        </div>
                        <div className='news-description-short'>
                            <Skeleton animation="wave" height={20} width="90%"/>
                            <Skeleton animation="wave" height={20} width="60%"/>
                        </div>
                    </div>
                </div>
                <Divider sx={{ my: 1.5 }} />
            </div>
        )
    }
    
}
export default function NewsSection() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:8080/news/getAll');
            const jsonData = await response.json();
            // Simulate some processing time
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(jsonData)
            setData(jsonData);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    if (loading) {
        // Show loading skeleton while data is being fetched
        return (
            <div className="news-container">
                {news_loader_cards}
            </div>
        )
    }
    return (
        <div className="news-container">
            {data.map((item, index, data) => (
                <NewsCard
                    key={index} 
                    data={item} 
                    showDivider={(index + 1 === data.length) ? false : true}
                />
            ))}
            
        </div>
    )
}