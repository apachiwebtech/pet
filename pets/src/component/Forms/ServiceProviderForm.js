import React, { useEffect, useState } from 'react';
import CustomInput from '../UI/CustomInput'
import PrimaryButton from '../UI/PrimaryButton'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../Utils/BaseUrl';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from "react-places-autocomplete"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const ServiceProviderForm = () => {
    const [address, setAddress] = useState('');
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [cat , setCat] = useState([])
    const [value, setValue] = useState({

    })

    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null,
        point: null,
    });

    const handleSelect = async (selectedAddress) => {
        try {
            const results = await geocodeByAddress(selectedAddress);
            const latLng = await getLatLng(results[0]);
            console.log("Selected Address:", selectedAddress);
            console.log("Coordinates:", latLng);
            setAddress(selectedAddress);
            setCoordinates({
                lat: latLng.lat,
                lng: latLng.lng,
                point: { type: "Point", coordinates: [latLng.lng, latLng.lat] },
            });
        } catch (error) {
            console.error("Error selecting address:", error);
        }
    };

    const MaharashtraBounds = {
        // Replace these values with the actual latitude and longitude bounds for Maharashtra
        north: 21.748512,
        south: 15.602284,
        west: 72.659167,
        east: 80.859336,
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCZAhXRzVtn3HGzQyn5SZ9AJ20y8DefuU0&libraries=places`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", () => setScriptLoaded(true));

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);


    // console.log(address, "addrees")

    const onhandleSubmit = (e) => {
        e.preventDefault();

        const data = {

        }

        axios.post(`${BASE_URL}/add_provider`, data)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    async function getcategory() {
        axios.get(`${BASE_URL}/get_category`)
            .then((res) => {
               setCat(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getcategory()
    })

    const onHandleChange = (e) => {
        setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='mx-2'>
            {scriptLoaded && (
                <form onSubmit={onhandleSubmit}>
                    <div>
                        {/* <CustomInput className="my-2" placeholder="Category: <drop-down feild " onChange={onHandleChange} /> */}
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={cat.map((item) => item.title)}
                            sx={{ width: "100%" }}
                            className='my-2'
                            renderInput={(params) => <TextField {...params} label="Category" />}
                        />
                        <CustomInput className="my-2" placeholder="Shop/Service Name" onChange={onHandleChange} />
                        <CustomInput className="my-2" placeholder="Owner's Name" onChange={onHandleChange} />

                        <div className='d-flex'>
                            <CustomInput className="my-2 mx-1" placeholder="Contact No 1" onChange={onHandleChange} />
                            <CustomInput className="my-2 mx-1" placeholder="Contact No 2" onChange={onHandleChange} />
                        </div>
                        <PlacesAutocomplete
                            value={address}
                            onChange={setAddress}
                            onSelect={handleSelect}
                            searchOptions={{
                                bounds: MaharashtraBounds,
                                // You can add other search options here if needed
                            }}
                        >
                            {({
                                getInputProps,
                                suggestions,
                                getSuggestionItemProps,
                                loading,
                            }) => (
                                <div className="col-md-12">
                                    {/* <label htmlFor="google_address" className="form-label">
                                        Address <span className="text-danger">*</span>
                                    </label> */}
                                    <input
                                        {...getInputProps({
                                            className: "location-search-input form-control",
                                            autoComplete: "off",
                                        })}
                                    />
                                    <div className="autocomplete-dropdown-container">
                                        {loading && <div>Loading...</div>}
                                        {/* {console.log(suggestions, "sugge")} */}
                                        {suggestions.map((suggestion) => {
                                            const style = {
                                                backgroundColor: suggestion.active
                                                    ? "#41b6e6"
                                                    : "#fff",
                                            };
                                            return (
                                                <div
                                                    {...getSuggestionItemProps(suggestion, {
                                                        style,
                                                    })}
                                                >
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                        <CustomInput className="my-2" placeholder="State" onChange={onHandleChange} />

                        <div className=' row d-flex justify-content-between'>
                            <div className='col-7'>
                                <CustomInput className="my-2 " placeholder="city" onChange={onHandleChange} />
                            </div>
                            <div className='col-4 '>
                                <CustomInput className="my-2 " placeholder="Pin Code" onChange={onHandleChange} />
                            </div>
                        </div>
                        <div className='d-flex justify-content-evenly '>
                            <div className='upload-box' style={{ position: "relative" }}>
                                <p>Upload 1</p>
                                <input type='file' placeholder='upload' />
                            </div>
                            <div className='upload-box' style={{ position: "relative" }}>
                                <p>Upload 2</p>
                                <input type='file' placeholder='upload' />
                            </div>
                            <div className='upload-box' style={{ position: "relative" }}>
                                <p>Upload 3</p>
                                <input type='file' placeholder='upload' />
                            </div>
                        </div>
                        <Link to="/"><PrimaryButton type="submit" children="Submit" className="mt-5" /></Link>
                    </div>
                </form>
            )}
        </div>
    )
}

export default ServiceProviderForm