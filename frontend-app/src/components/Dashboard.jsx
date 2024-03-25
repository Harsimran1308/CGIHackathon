import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Avatar, Box, ButtonBase, Chip } from '@mui/material';
import { IconMenu2, IconBell, IconSettings } from '@tabler/icons-react';
import './Dashboard.css'
import { useTheme } from '@mui/material/styles';
import MarketOverview from './MarketOverview';
import Stocks from './Stocks';

export default function Dashboard() {
    const theme = useTheme();

  return (
    <div className='main-container'>
        <div className='nav-bar'>
            <div className="left-header-container">
                <div className='logo-container'>
                    <div className='company-logo'>
                        <img src="profits.png" alt="Company Logo" />
                    </div>
                    <div className="company-name"> CGI InvestSmart</div>
                </div>
                <div className='toggle-menu'>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                        // ...theme.typography.commonAvatar,
                        // ...theme.typography.mediumAvatar,
                        transition: 'all .2s ease-in-out',
                        background: '#EDE7f6',
                        color: "#7450BC",
                        '&:hover': {
                            background: "#7450BC",
                            color: '#EDE7f6'
                        }
                        }}
                        color="inherit"
                    >
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                    </ButtonBase>
                </div>
                <div className='search-bar'>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <IconButton type="button" sx={{ p: '8px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        variant="filled"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    </Paper>
                </div>
            </div>
            <div className="right-header-container">

                <div className='notification-icon'>
                    <ButtonBase sx={{ borderRadius: '12px' }}>
                        <Avatar
                            variant="rounded"
                            sx={{
                            // ...theme.typography.commonAvatar,
                            // ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: "#EDE7f6",
                            color: '#7450BC',
                            '&[aria-controls="menu-list-grow"],&:hover': {
                                background: "#7450BC",
                                color: '#EDE7f6'
                            }
                            }}
                            // ref={anchorRef}
                            aria-controls={false ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            // onClick={handleToggle}
                            color="inherit"
                        >
                            <IconBell stroke={1.5} size="1.3rem" />
                        </Avatar>
                    </ButtonBase>
                </div>
                <div className='profile-section'>
                    <Chip
                        sx={{
                        height: '48px',
                        alignItems: 'center',
                        borderRadius: '27px',
                        transition: 'all .2s ease-in-out',
                        borderColor: "#EEF2F6",
                        backgroundColor: "#EEF2F6",
                        '& .MuiChip-label': {
                            lineHeight: 0
                        }
                        }}
                        icon={
                        <Avatar
                            src={"/man.png"}
                            sx={{
                            ...theme.typography.mediumAvatar,
                            margin: '8px 0 8px 8px !important',
                            cursor: 'pointer'
                            }}
                            aria-controls={true ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            color="inherit"
                        />
                        }
                        label={<IconSettings stroke={1.5} size="1.5rem" color={"#2096F3"} />}
                        variant="outlined"
                        aria-controls={false ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        color="primary"
                    />
                </div>
            </div>
        </div>
        <div className='dashboard-body-container'>
            <div className='dashboard-card'>
                <div className='tile-container'>
                    <table className='table-content'>
                        <tr className='row1-container'>
                            <td rowSpan={2} className='news-tile-container'>
                                <div className='news-tile'>
                                </div>
                            </td>
                            <td className='market-overview-container'>
                            <div className='market-overview'>
                                <MarketOverview></MarketOverview>
                            </div>
                            </td>
                        </tr>
                        <tr className='row2-container'>
                            <td className='stocks-summary-container'>
                                <div className='stocks-summary'>
                                    <Stocks></Stocks>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    </div>
  );
}