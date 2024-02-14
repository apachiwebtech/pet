import React from 'react'
import Card from '../UI/Card'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import PrimaryButton from '../UI/PrimaryButton';

const CommunityCard = (props) => {
    const timestampStr = props.date; // Assuming item.book_date is the timestamp string
    const timestamp = new Date(timestampStr);

    // Extracting components
    const dateComponent = timestamp.toLocaleDateString();
    return (
        <div className='container' style={{ padding: "10px" }}>
            <Card
                style={{
                    width: "100%",
                    height: "300px",
                    padding: "20px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px",
                        alignContent: "center",
                        marginBottom: "10px",
                        fontWeight: "bold",
                    }}>
                    <span>

                        <PetsIcon />
                    </span>
                    <h4
                        style={{
                            margin: "0",
                            padding: "0",
                            fontWeight: "bold",
                            color: "#454545",
                            whiteSpace: "nowrap"
                        }}
                    >


                        {props.heading || 'heading'}
                    </h4>
                </div>
                <Card
                    style={{
                        height: "80%",
                        padding: "20px",
                        display: "grid",
                        gridTemplateColumns: "0.7fr 1fr",
                        gridTemplateRows: "1fr 0.4fr",
                        gap: "10px",
                        gridRowGap: "15px",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            src={`http://thetalentclub.co.in/pet-app/upload/product/` + props.img}
                            alt={props.id}
                            style={{
                                objectFit: "contain",
                                height: "100px",
                                width: "100%",
                            }}
                        />
                    </div>
                    <div
                        style={{
                            backgroundColor: "",
                            lineHeight: "1rem",
                            padding: "5px",
                            position: "relative",
                        }}
                    >



                        {/* <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: " 0 0 0",
                gap: "5px",
                width: "90%",
                position: "absolute",
                top: "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: "0",
                }}
              >
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gridTemplateRows: "1fr",
                  gridColumnGap: "10px",
                  padding: "0",
                  backgroundColor: "",
                  height: "100%",
                }}
              >
                <div style={{ display: "flex",width:"80px",  justifyContent: "space-between" }}>
                  <span>Price</span>
                  <p className='text-success'>: $200</p>
                </div>
                <div>
                    <button>send</button>
                </div>

              
              </div>
            </div> */}
                        <div className='row'>
                            <div className='col-6'>
                                <div className='d-flex justify-content-between'>
                                    <span>Price:</span>
                                     <p className='text-success'>₹200</p>
                                </div>
                            </div>
                            <div className='py-4'>
                                <PrimaryButton>Send Enquiry</PrimaryButton>
                            </div>

                        </div>
                    </div>
                    <div
                        style={{
                            backgroundColor: "",
                            fontSize: "0.9rem",
                            padding: "0",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            color: "#adadad",
                        }}
                    >
                        {dateComponent || 'Behavior'}
                    </div>
                    <div
                        style={{
                            fontSize: "0.8rem",
                            padding: "0",
                            display: "flex",
                            float: "right",
                            alignItems: "center",
                            justifyContent: "flex-end", // This will make the inner div float right and have flex-end alignment
                            border: "none",
                            backgroundColor: "",
                            color: "black",
                            width: "100%",
                        }}
                    >
                        <div
                            style={{
                                fontSize: "0.8rem",
                                padding: "0",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                border: "none",
                                backgroundColor: "",
                                color: "black",
                                width: "80%",
                            }}
                        >
                            <FavoriteBorderOutlinedIcon />
                            <ChatBubbleOutlineOutlinedIcon />
                            <BookmarkBorderOutlinedIcon />
                        </div>

                        {/* <NavLink to='/bookappointment' style={{ textDecoration: "none", color: "black" }}>
    Book Appointment
  </NavLink> */}
                    </div>

                </Card>
            </Card>
        </div>)
}

export default CommunityCard