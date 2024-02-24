import * as React from "react";
import PropTypes from 'prop-types';
import ScoutForm from "./ScoutForm";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
    const {children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`utilities-tabpanel-${index}`}
        aria-labelledby={`utilities-tabpanel-${index}`}
        {...other}
      >
        {value === index && (
            <Box sx={{p:3}}>
                {children}
            </Box>
        )}
      </div>
    );
    
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function allyProps(index) {
    return {
        id: `utilities-tabpanel-${index}`,
        'aria-controls': `utilities-tabpanel-${index}`
    };
    
}

function Utilities() {

    // const [scouts, setScouts] = useState(Scouts);
    const [utilitiesTab, setUtilitiesTab] = React.useState(0);

    function handleChange(event, newTab) {
        console.log(event);
        setUtilitiesTab(newTab);

    }

    return (
      <div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={utilitiesTab} onChange={handleChange}>
            <Tab label="Scouts" {...allyProps(0)} />
            <Tab label="Price" {...allyProps(0)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={utilitiesTab} index={0} >
            <ScoutForm />
        </CustomTabPanel>
        <CustomTabPanel value={utilitiesTab} index={1} >
            Price
        </CustomTabPanel>
      </div>
    );

}

export default Utilities;