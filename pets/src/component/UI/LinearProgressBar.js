import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme, barColor }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:barColor
    },
}));
let MIN = 0
let MAX = 5
const normalise = (value) => ((value - MIN) * 100) / (MAX - MIN);

const CustomLinearProgress = ({ value, style,color }) => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <BorderLinearProgress variant="determinate" 
      style={{
        marginLeft: 'auto',
        width: '16rem',
        ...style, // Merge with the provided style prop
      }}
      value={normalise(value)}
      barColor={color}
      />
    </Box>
  );
};

export default CustomLinearProgress;
