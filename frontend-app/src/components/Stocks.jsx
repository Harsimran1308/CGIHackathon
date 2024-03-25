import React, { useState } from 'react';
import './Stocks.css'
import LineGraph from './LineGraph';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Checkbox from '@mui/material/Checkbox';


export default function Stocks() {
  const [stocksList, setStocksList] = useState([
      {
        name:"Apple",
        price: 200,
        profit:true,
        percentage:10
      },
      {
        name:"Tesla",
        price: 500,
        profit:false,
        percentage: 20
      }
  ]);
  return (
    <div className='stocks-container'>
        <div className='stock-header-name'>
            <h4>Stocks</h4>
        </div>
        <div className='graph-section'>
                <LineGraph></LineGraph>
        </div>
        <div className='stock-list'>
          <Grid item xs={12}>
              {stocksList.map(item => (
                <div key={item.id}>
                  <Grid container direction="column">
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                            <div>
                              <Checkbox defaultChecked size="small" className='name-inline stock-name-checkbox'/>
                              <Typography variant="subtitle1" color="inherit" className='name-inline stock-name' >
                                {item.name}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item>
                            <Grid container alignItems="center" justifyContent="space-between">
                              <Grid item>
                                <Typography variant="subtitle1" color="inherit" className='stock-rate'>
                                  ${item.price}
                                </Typography>
                              </Grid>
                              <Grid item>
                                {
                                  item.profit ?
                                    <Avatar
                                    variant="rounded"
                                    sx={{
                                      width: 16,
                                      height: 16,
                                      borderRadius: '5px',
                                      backgroundColor: "#b9f6c9",
                                      color: '#40d16a',
                                      ml: 2
                                    }}
                                  >
                                    <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" className='stock-keyup'/>
                                  </Avatar>
                                  :
                                  <Avatar
                                  variant="rounded"
                                  sx={{
                                    width: 16,
                                    height: 16,
                                    borderRadius: '5px',
                                     backgroundColor: "#fbe9e6",
                                     color: '#e06344',
                                    ml: 2
                                  }}
                                >
                                  <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" className='stock-keyup'/>
                                </Avatar>
                                }
                                
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item>
                        {
                          item.profit ?
                            <Typography variant="subtitle2" className='stock-percentage stock-percentage-profit'>
                              {item.percentage}% Profit
                            </Typography>
                            :
                            <Typography variant="subtitle2" sx={{ color: '#de5937' }} className='stock-percentage stock-percentage-loss'>
                              {item.percentage}% Loss
                            </Typography>
                        }
                        
                      </Grid>
                    </Grid>
                   <Divider sx={{ my: 1.5 }} />
                </div>
              ))}
          </Grid>
        </div>
    </div>
  );
}