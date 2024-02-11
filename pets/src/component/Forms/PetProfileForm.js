import React, { useState, useEffect } from 'react';
import CustomInput from '../UI/CustomInput';
import PrimaryButton from '../UI/PrimaryButton';
import axios from 'axios';
import { BASE_URL } from '../Utils/BaseUrl';
import { ToastContainer, toast, Slide } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const PetProfileForm = (props) => {
  // const [values, setValues] = useState(
  //   props
  //     ? {
  //         id: '',
  //         parent: props.petObject.parent_name ,
  //         address: props.address ,
  //         state: props.state,
  //         city: props.city,
  //         pincode: props.pincode ,
  //         pet: props.petName ,
  //         mobile: props.mobile ,
  //         gender: props.gender,
  //       }
  //     : {
  //         id: '',
  //         parent: '',
  //         address: '',
  //         state: '',
  //         city: '',
  //         pincode: '',
  //         pet: '',
  //         mobile: '',
  //         gender:'',
  //       }
  // );
  const [petObject, setPetObject] = useState({});
  const [values, setValues] = useState({
    id: '',
    parent: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    pet: '',
    mobile: '',
    gender: '',
    breed: "",
    date: '',
    height: '',
    weight: '',
    color: '',
  });

  console.log(values.height)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userid = localStorage.getItem('pet_id');
        const response = await axios.post(`${BASE_URL}/getPetProfiledata`, { userId: userid });
        if (response.data && response.data.length > 0) {
          setPetObject(response.data[0]);
        }
      } catch (error) {
        console.warn(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setValues({
      id: petObject.id || '',
      parent: petObject.parent_name || '',
      address: petObject.address || '',
      state: petObject.state || '',
      city: petObject.city || '',
      pincode: petObject.pincode || '',
      pet: petObject.pet_name || '',
      mobile: petObject.mobile || '',
      gender: petObject.gender || '',
      breed: petObject.breed || '',
      date: petObject.date || '',
      weight: Number(petObject.weight) || 10,
      height: Number(petObject.height) || 10,
      color: petObject.color || '',
    });
  }, [petObject]);
  const notifyMe = (message) => toast.error(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    delay: 1000,
    limit: 1,
    transition: Slide
  });
  const notifySuccess = (message) => toast.success(`${message}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    delay: 1000,
    limit: 3,
    transition: Slide
  });

  const [errors, setErrors] = useState({
    emptyFoemFields: '',
    parent: '',
    address: '',
    state: '',
    city: '',
    pincode: '',
    pet: '',
    mobile: '',
    gender: '',
    color: '',
    breed: '',
    height: '',
    weight: '',
    image: '',
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


    if (!values.parent && !values.address && !values.pet && !values.pincode && !values.city && !values.mobile && !values.state) {
      newErrors.emptyFoemFields = 'Form cannot be empty';
      notifyMe(newErrors.emptyFoemFields);


    }
    else {

      if (!values.parent) {
        newErrors.parent = 'Please enter parent name';
        notifyMe(newErrors.parent);
      } else {
        newErrors.parent = '';
      }

      if (!values.address) {
        newErrors.address = 'Please enter address';
        notifyMe(newErrors.address);

      } else {
        newErrors.address = '';
      }

      if (!values.state) {
        newErrors.state = 'Please enter state';
        notifyMe(newErrors.state);

      } else {
        newErrors.state = '';
      }

      if (!values.city) {
        newErrors.city = 'Please enter city';
        notifyMe(newErrors.city);

      } else {
        newErrors.city = '';
      }

      if (!values.pincode) {
        newErrors.pincode = 'Please enter PIN code';
        notifyMe(newErrors.pincode);

      } else if (!/^\d{6}$/.test(values.pincode)) {
        newErrors.pincode = 'PIN code should be 6 digits';
        notifyMe(newErrors.pincode);

      } else {
        newErrors.pincode = '';
      }

      if (!values.pet) {
        newErrors.pet = 'Please enter pet name';
        notifyMe(newErrors.pet);

      } else {
        newErrors.pet = '';
      }

      if (!values.mobile) {
        newErrors.mobile = 'Please enter mobile number';
        notifyMe(newErrors.mobile);

      } else if (!/^\d{10}$/.test(values.mobile)) {
        newErrors.mobile = 'Mobile number should be 10 digits';
        notifyMe(newErrors.mobile);

      } else {
        newErrors.mobile = '';
      }


      if (!petObject.height) {
        newErrors.height = 'Please enter Height';
        notifyMe(newErrors.height);

      } else if (petObject.height <= 0) {
        newErrors.height = 'Please enter a valid value for weight';
        notifyMe(newErrors.height);

      }
      if (!petObject.weight) {
        newErrors.weight = 'Please enter Weight';
        notifyMe(newErrors.weight);

      } else if (petObject.weight <= 0) {
        newErrors.weight = 'Please enter a valid value for weight';
        notifyMe(newErrors.weight);

      }
      if (!petObject.color) {
        newErrors.color = 'Please select a color';
        notifyMe(newErrors.color);
      }

      if (!petObject.breed) {
        newErrors.breed = 'Please select a breed';
        notifyMe(newErrors.breed);
      }

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

    if (validateForm()) {
      axios
        .post(`${BASE_URL}/petProfile`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          // console.log(res)
          notifySuccess('Profile saved')
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
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div style={{ marginTop: '2em', padding: '10px 10px 30px 10px', backgroundColor: '' }}>
        <form id="profileForm" onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', gap: '20px', flexDirection: 'column' }}>
          <CustomInput
            style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="Parent's Name"
            name="parent"
            value={values.parent}
            onChange={handleChange}
          />
          <CustomInput
            style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="Pets Name"
            name="pet"
            value={values.pet}
            onChange={handleChange}
          />

          <CustomInput
            style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
            type="text"
            placeholder="Address"
            name="address"
            value={values.address}
            onChange={handleChange}
          />

          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            <CustomInput
              style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
              type="text"
              placeholder="State"
              name="state"
              value={values.state}
              onChange={handleChange}
            />

            <CustomInput
              style={{ width: '100%', padding: '10px', borderRadius: '8px' }}
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={handleChange}
            />
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

            <CustomInput
              style={{ width: '60%', padding: '10px', borderRadius: '8px' }}
              type="text"
              placeholder="Mobile"
              name="mobile"
              value={values.mobile}
              maxLength="10"
              onChange={handleChange}
            />
            <CustomInput
              style={{ width: '20%', padding: '10px', borderRadius: '8px', textAlign: "center" }}
              type="text"
              placeholder="gender M or F"
              name="gender"
              value={values.gender}
              onChange={handleChange}
            />
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

      <ToastContainer
        style={{ marginBottom: "10px", width: "300px", padding: "4px" }}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl
        pauseOnFocusLoss
        draggable
        stacked={false}
        pauseOnHover
        theme="light"
        transition={Slide}

      />
    </>
  );
};

export default PetProfileForm;
