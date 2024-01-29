import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PrimaryButton from './PrimaryButton';
import CustomInput from './CustomInput';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

const WeightHeightCal = (props) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    flex: "1"
  };

  const [weight, setWeight] = useState(props.type === 'weight' ? 10 : 1);
  const [height, setHeight] = useState(props.type === 'height' ? 10 : 1);

  const handleAdd = () => {
    if (props.type === 'weight') {
      setWeight(prevWeight => prevWeight + props.step);
    } else if (props.type === 'height') {
      setHeight(prevHeight => prevHeight + props.step);
    }
  };

  const handleRemove = () => {
    if (props.type === 'weight') {
      setWeight(prevWeight => prevWeight - props.step);
    } else if (props.type === 'height') {
      setHeight(prevHeight => prevHeight - props.step);
    }
  };

  const handleInputChange = (newValue) => {
    if (props.type === 'weight') {
      setWeight(newValue);
    } else if (props.type === 'height') {
      setHeight(newValue);
    }
  };
  const handleSave = () => {
    // Send the data to the parent component
    if (props.type === 'weight') {
      props.onSave(weight);
    } else if (props.type === 'height') {
      props.onSave(height);
    }

    // Close the modal
    props.onClose();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h3>Add {props.type === 'weight' ? 'Weight' : 'Height'}</h3>
          <div style={{ display: "flex", flexDirection: "row", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "", borderRadius: "10px", }}>
            <PrimaryButton style={{ borderRadius: "10px 0 0 10px" }} onClick={handleAdd}><AddIcon /></PrimaryButton>
            <CustomInput value={props.type === 'weight' ? weight : height} style={{ borderRadius: "0", boxShadow: "none", border: "none", textAlign:"center" }}
                          onChange={(e) => handleInputChange(parseInt(e.target.value, 10) || 0)}

            />
            <PrimaryButton style={{ borderRadius: "0 10px 10px 0" }} onClick={handleRemove}><RemoveIcon /></PrimaryButton>
          </div>
          <PrimaryButton onClick={handleSave} style={{ width: "90%", border: "2px solid #4acf7e", backgroundColor: "transparent", color: "#4acf7e" }}>Save</PrimaryButton>
        </Box>
      </Modal>
    </div>
  );
}

export const DateCalc=(props)=>{

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    flex: "1"
  };
  const [selectDate, setSelectDate] = useState(dayjs('2022-04-17'))

  const handleDateChange = (date) => {
    setSelectDate(date.$d);
  };
  const handleSave = () => {
    // Send the selected date to the parent component
    props.onSave(selectDate);

    // Close the modal
    props.onClose();
  };
  return (

  <div>
  <Modal
    open={props.open}
    onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <div style={{ display: "flex", flexDirection: "row", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "", borderRadius: "10px", }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'MobileDatePicker',
          'DesktopDatePicker',
          'StaticDatePicker',
        ]}
      >
          <StaticDatePicker 
           slotProps={{
            // pass props `actions={['clear']}` to the actionBar slot
            actionBar: { actions: [''] },
          }}
          defaultValue={dayjs('2022-04-17')}
          onChange={handleDateChange}

          />

      </DemoContainer>
    </LocalizationProvider>   
       </div>
      <PrimaryButton onClick={handleSave} style={{ width: "90%", border: "2px solid #4acf7e", backgroundColor: "transparent", color: "#4acf7e" }}>Save</PrimaryButton>
    </Box>
  </Modal>
</div>
  )
}
export default WeightHeightCal;
