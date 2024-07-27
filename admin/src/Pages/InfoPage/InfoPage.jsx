import React , {useState} from 'react'
import './InfoPage.css'
import { Route , Routes } from 'react-router-dom'
import {useEffect} from 'react'
import axios from 'axios'

const InfoPage = () => {

  const [info,setInfo] = useState([])

      const fetchInfo = async() => {
        const response = await axios.get("http://localhost:4000/api/info")
        console.log(response.data)
        if(response.data.success){
            setInfo(response.data.data)
        }
        else{
            console.error("error")
        }     
    }

    useEffect(()=>{
      fetchInfo()
  },[])

  return (
    <div className='list add flex-col'>
     <p>All Customers Info For Pre Booking</p>
        <div className="list-table">
            <div className="list-table-format title">
                <b>Firstname</b>
                <b>Lastname</b>
                <b>Email</b>
                <b>Street</b>
                <b>City</b>
                <b>State</b>
                <b>Zipcode</b>
                <b>Country</b>
                <b>Phone</b>
                <b>Model</b>
            </div>
            {info.map((item,index)=>{
                return (
                    <div key={index} className="list-table-format">
                        <p>{item.firstname}</p>
                        <p>{item.lastname}</p>
                        <p>{item.email}</p>
                        <p>{item.street}</p>
                        <p>{item.city}</p>
                        <p>{item.state}</p>
                        <p>{item.zipcode}</p>
                        <p>{item.country}</p>
                        <p>{item.phone}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default InfoPage