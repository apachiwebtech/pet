import React, { useState, useEffect } from 'react';
import CustomInput from '../UI/CustomInput';
import PrimaryButton from '../UI/PrimaryButton';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { BASE_URL } from '../Utils/BaseUrl';

const PetProfileForm = (props) => {
  // const [values, setValues] = useState({
  //   id: '',
  //   parent: props.parentName || '',
  //   address: props.address || '',
  //   state: props.state || '',
  //   city: props.city || '',
  //   pincode: props.pincode || '',
  //   pet: props.petName || '',
  //   mobile: props.mobile || '',
  // });
  const [values, setValues] = useState(
    props
      ? {
          id: '',
          parent: props.parentName ,
          address: props.address ,
          state: props.state,
          city: props.city,
          pincode: props.pincode ,
          pet: props.petName ,
          mobile: props.mobile ,
        }
      : {
          id: '',
          parent: '',
          address: '',
          state: '',
          city: '',
          pincode: '',
          pet: '',
          mobile: '',
        }
  );
  

  const [errors, setErrors] = useState({
    parent: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    pet: '',
    mobile: '',
  });

  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      id: localStorage.getItem('pet_id'),
    }));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  
    // Clear the error messages after 3 seconds
    setTimeout(() => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }, 3000);
  };
  

  const validateForm = () => {
    const newErrors = { ...errors };

    if (!values.parent) {
      newErrors.parent = 'Please enter parent name';
    } else {
      newErrors.parent = '';
    }

    if (!values.address) {
      newErrors.address = 'Please enter address';
    } else {
      newErrors.address = '';
    }

    if (!values.state) {
      newErrors.state = 'Please enter state';
    } else {
      newErrors.state = '';
    }

    if (!values.city) {
      newErrors.city = 'Please enter city';
    } else {
      newErrors.city = '';
    }

    if (!values.pincode) {
      newErrors.pincode = 'Please enter PIN code';
    } else if (!/^\d{6}$/.test(values.pincode)) {
      newErrors.pincode = 'PIN code should be 6 digits';
    } else {
      newErrors.pincode = '';
    }

    if (!values.pet) {
      newErrors.pet = 'Please enter pet name';
    } else {
      newErrors.pet = '';
    }

    if (!values.mobile) {
      newErrors.mobile = 'Please enter mobile number';
    } else if (!/^\d{10}$/.test(values.mobile)) {
      newErrors.mobile = 'Mobile number should be 10 digits';
    } else {
      newErrors.mobile = '';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

  const newDate = new Date(props.date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();

  const date = `${year}-${month}-${day}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const userid = localStorage.getItem('pet_id');
    const formData = new FormData();
    formData.append('userId', userid);
    formData.append('parent', values.parent);
    formData.append('address', values.address);
    formData.append('state', values.state);
    formData.append('city', values.city);
    formData.append('pincode', values.pincode);
    formData.append('pet', values.pet);
    formData.append('mobile', values.mobile);
    formData.append('image', props.image);
    formData.append('color', props.color);
    formData.append('breed', props.breed);
    formData.append('height', props.height);
    formData.append('weight', props.weight);
    formData.append('gender', props.gender);
    formData.append('date', date);

    console.log(props.image, 'from form');
    if (validateForm()) {
      axios
        .post(`${BASE_URL}/petProfile`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const addToCommunity = () => {
    const status = 1;
    const userid = localStorage.getItem('pet_id');
    const data = {
      status,
      userid,
    };
    axios
      .put(`${BASE_URL}/updatePetProfile`, { data })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: '2em', padding: '10px 10px 30px 10px', backgroundColor: '' }}>
      <form id="profileForm" onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', gap: '20px', flexDirection: 'column' }}>
        <CustomInput
          style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
          type="text"
          placeholder="Parent's Name"
          name="parent"
          value={values.parent}
          defaultValue={props.parentName}
          onChange={handleChange}
        />
      {errors.parent && <span className='text-danger'>{errors.parent}</span>}

        <CustomInput
          style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
          type="text"
          placeholder="Pets Name"
          name="pet"
          value={ values.pet}
          onChange={handleChange}
        />
      {errors.pet && <span className='text-danger'>{errors.pet}</span>}

        <CustomInput
          style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
          type="text"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleChange}
        />
      {errors.address && <span className='text-danger'>{errors.address}</span>}

        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <CustomInput
            style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="State"
            name="state"
            value={values.state}
            onChange={handleChange}
          />
        {errors.state && <span className='text-danger'>{errors.state}</span>}

          <CustomInput
            style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="City"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
        {errors.city && <span className='text-danger'>{errors.city}</span>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <CustomInput
            style={{ width: '30%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="PIN Code"
            name="pincode"
            value={values.pincode}
            maxLength="6"
            onChange={handleChange}
          />
        {errors.pincode && <span className='text-danger'>{errors.pincode}</span>}

          <CustomInput
            style={{ width: '60%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            maxLength="10"
            onChange={handleChange}
          />
        {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
        </div>
      </form>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between', gap: '10px', width: '100%', backgroundColor: '' }}>
        <PrimaryButton type="submit" form="profileForm">
          Save Profile
        </PrimaryButton>
        <PrimaryButton type="submit" onClick={addToCommunity}>
          Post to Community
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PetProfileForm;
