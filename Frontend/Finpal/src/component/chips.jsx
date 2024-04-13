import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function ClickableChips({ label, link }) {
  const handleClick = () => {
    console.info('You clicked the Chip.');
    window.open(link, '_blank');
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip label={label} variant='outline' color='primary'  onClick={handleClick}
      icon={<ArrowDownwardIcon />}
       sx={{":hover":{
        cursor: "pointer",
        variant: "filled",
      },
      borderRadius: 2,
      height: 46,
      width: 200,
      
      }} />
    </Stack>
  );
}

ClickableChips.propTypes = {
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
