import React from 'react';
import Card from '../UI/Card';
import PetsIcon from "@mui/icons-material/Pets";
import dog from "../../image/dog.png";
import Rating from "@mui/material/Rating";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PrimaryButton from "../UI/PrimaryButton";
import {DUMMY_DATA} from '../../Dummy_Data'
const ListingCard = (props)=>{
    return (
        <Card
                  style={{
                    width: "100%",
                    height: "300px",
                    padding: "20px",
                    boxSizing: "border-box",
                    marginBottom: "25px",
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
                    }}
                  >
                    <span>
                      <PetsIcon sx={{ color: "#454545" }}></PetsIcon>
                    </span>
                    <h4
                      style={{
                        margin: "0",
                        padding: "0",
                        fontWeight: "bold",
                        color: "#454545",
                      }}
                    >
                      {props.heading}
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
                        src={dog}
                        alt="dog"
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
                      <h5 style={{ margin: "0 0 0px 0", color: "#454545" }}>
                        {props.title}
                      </h5>
                      <p
                        style={{
                          fontSize: "0.8rem",
                          margin: "0 0 10px 0",
                          color: "#adadad",
                        }}
                      >
                        something about them
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: " 0 0 0",
                          gap: "5px",
                          width: "90%",
                          position: "absolute",
                          bottom: "",
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
                          <div>
                            <Rating
                              name="read-only"
                              value={props.rating}
                              size="small"
                              readOnly
                            />
                          </div>
                          <div>reviews</div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: "0",
                          }}
                        >
                          <button
                            style={{
                              border: "1px solid black",
                              backgroundColor: "transparent",
                              borderRadius: "20px",
                              padding: "3px 10px",
                              textAlign: "center",
                              display: "inline-block",
                              width: "fit-content",
                              fontSize: "0.9rem",
                            }}
                          >
                            icon1
                          </button>
                          <div>icons</div>
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
                      {`Last visit` + " " + props.date}
                    </div>
                    <PrimaryButton
                      style={{
                        backgroundColor: "transparent",
                        padding: "0",
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        border: "none",
                      }}
                    >
                      Book Appointment
                      <NavigateNextIcon />
                    </PrimaryButton>
                  </Card>
                </Card>
    )
}

export default ListingCard;