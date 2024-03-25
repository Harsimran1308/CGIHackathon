import { useEffect } from 'react';
import './LineGraph.css'

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';

// third-party
import ApexCharts from 'apexcharts';
import Chart from 'react-apexcharts';

// project imports
import ChartData from './ChartData';

const LineGraph = () => {
  const theme = useTheme();
//   const customization = useSelector((state) => state.customization);
//   const { navType } = customization;

  const orangeDark = "#AB9AD5";

  useEffect(() => {
    const newSupportChart = {
      ...ChartData.options,
      colors: [orangeDark],
      tooltip: {
        theme: 'light'
      }
    };
    ApexCharts.exec(`support-chart`, 'updateOptions', newSupportChart);
  }, []);

  return (
    <Card sx={{ bgcolor: '#ede7f6' }}>
      <Grid container sx={{ p: 2, pb: 0, color: '#fff' }}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="subtitle1" sx={{ color: theme.palette.secondary.dark }} className='stock-graph-name'>
                Tesla
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" sx={{ color: theme.palette.grey[800] }} className='rate-graph-text'>
                $500.00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" sx={{ color: theme.palette.grey[800] }} className='stock-percentage'>
            20% Loss
          </Typography>
        </Grid>
      </Grid>
      <Chart {...ChartData} color/>
    </Card>
  );
};

export default LineGraph;
