import React, { useState, useEffect } from 'react';
import './PreBook.css';
import { ScrollTrigger } from "gsap/all";
import gsap from 'gsap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const PreBook = () => {

    const navigate = useNavigate();


    useEffect(() => {
        window.scrollTo(0, 0);

        gsap.to(".navbar", {
          backgroundColor: "yellow",
          duration: 0.5,
          height: "120px",
          scrollTrigger: {
            trigger: ".navbar",
            scroller: "body",
            start: "top -10%",
            end: "top -11%",
            scrub: 1,
          },
        });
    }, []);

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }));
    }

    const onPreBook = async (event) => {
        event.preventDefault();
        const url = "http://localhost:4000/api/prebook";
        try {
            const response = await axios.post(url, data);
            if (response.data.success) {
                alert("data submitted successfully");
                navigate('/#home')
            } else {
                console.error("Server error:", response.data);
                alert("Server error: " + response.data.message);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form: " + error.message);
        }
    }

    return (
        <form onSubmit={onPreBook} className="place-order">
            <div className="place-order-left">
                <h2 className="title">Pre Book Now</h2>
                <div className="multi-fields">
                    <input required name="firstname" onChange={onChangeHandler} value={data.firstname} type="text" placeholder="First Name" />
                    <input required name="lastname" onChange={onChangeHandler} value={data.lastname} type="text" placeholder="Last Name" />
                </div>
                <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email address" />
                <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
                    <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip code" />
                    <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
                </div>
                <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone" />
                <div className="proceed-btn">
                    <button type="submit">Proceed</button>
                </div>
            </div>
        </form>
    );
}

export default PreBook;

