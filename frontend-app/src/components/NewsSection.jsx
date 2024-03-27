import * as React from 'react';
import './NewsSection.css'
import Skeleton from '@mui/material/Skeleton';
import { Divider } from '@mui/material';

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
    return (
        <div className="news-container">
            {news_loader_cards}
        </div>
    )
}