import React, { useEffect, useState } from 'react';
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
import { esES } from '@mui/x-date-pickers';

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

  const [weight, setWeight] = useState(props.type === 'weight' ? 0 : 5);
  const [height, setHeight] = useState(props.type === 'height' ? 10 : 10);
  const [disabled, setDisabled] = useState(false);
  const handleAdd = () => {
    if (props.type === 'weight' && weight >= 5) {
      setWeight(prevWeight => prevWeight + props.step);
    } else if (props.type === 'height'&& height >= 10) {
      setHeight(prevHeight => prevHeight + props.step);
    }
  };

  const handleRemove = () => {
    if (props.type === 'weight' && weight >=10) {
      setWeight(prevWeight => prevWeight - props.step);
    } else if (props.type === 'height' && height >=20) {
      setHeight(prevHeight => prevHeight - props.step);
    }
  };

  const handleInputChange = (newValue) => {
    if (props.type === 'weight') {
      setWeight(newValue);
      console.log(newValue,"ee")
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
useEffect(()=>{
  if(weight=== 5 && height=== 10 ){
    setDisabled(true);
  }else{
    setDisabled(false)
  }
}, [weight, height])

useEffect(()=>{
  if(props.petObject){
    setHeight(Number(props.petObject.height) || 10);
    setWeight(Number(props.petObject.weight) || 5);
  }
}, [props.petObject])
console.log(props.petObject, "inside weight heoght")
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
            <PrimaryButton style={{ borderRadius: "0 10px 10px 0", backgroundColor: disabled ? "grey" : "#4acf7e" }} onClick={handleRemove} disabled={disabled}><RemoveIcon /></PrimaryButton>
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
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are zero-indexed, so adding 1
  const day = date.getDate();
  
  const formattedDate = `${year}-${month}-${day}`;
  const [selectDate, setSelectDate] = useState(dayjs(formattedDate))

  console.log(formattedDate); // Output: 2024-2-7
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
          defaultValue={dayjs(formattedDate)}
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
