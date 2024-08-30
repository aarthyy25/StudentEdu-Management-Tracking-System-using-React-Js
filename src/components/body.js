import React,{useState,useEffect,useRef} from 'react';
import logo from './assests/logo.jpeg';
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiFilesLight } from "react-icons/pi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdOutlineNaturePeople } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";

function Body(){
    let[count1,setCount1]=useState(0);
    let[count2,setCount2]=useState(0);
    let[count3,setCount3]=useState(0);
    count1=useRef(0);
    count2=useRef(0);
    count3=useRef(0);
    useEffect(()=>{
        setTimeout(()=>{
            count1.current=count1.current+1;
        })
    })
    useEffect(()=>{
        setTimeout(()=>{
            count2.current=count2.current+1;
        })
    })
    useEffect(()=>{
        setTimeout(()=>{
            count3.current=count3.current+1;
        })
    })
    return(
        <div>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-3 nav">
                            <div>
                                <img src={logo} alt="Logo image"></img>
                            </div>
                            <a><FaUsers /></a>
                            <p>Student Management</p>
                            <a><FaUserGraduate /></a>
                            <p>Alumini Association</p>
                            <a><PiFilesLight /></a>
                            <p>Attendance</p>
                            <div class="foot">
                                <a><AiFillQuestionCircle /></a>
                                <a><MdOutlineSettings /></a>
                                <a><TbLogout /></a>
                            </div>
                        </div>
                        <div class="col-9 content">
                            <h1>Student Management System</h1>
                            <div class="cards">
                                <div class="card1">
                                    <span class="icon"><a><FaUserAlt /></a></span>
                                    <span>{count1.current}</span>
                                    <div><p>Regular Students</p></div>
                                </div>
                                <div class="card2">
                                    <span class="icon"><a><FaBook /></a></span>
                                    <span>{count2.current}</span>
                                    <div><p>Remedial Students</p></div>
                                </div>
                                <div class="card3">
                                    <span class="icon"><a><MdOutlineNaturePeople /></a></span>
                                    <span>{count3.current}</span>
                                    <div><p>In paid clubs</p></div>
                                </div>
                            </div>
                            <h2>Menu</h2>
                            <div class="row1">
                                <button onclick={()=>{
                                    setCount1(prev1=>prev1+1)
                                }}>
                                    <div><a><FaUserAlt /></a></div>
                                    <div>Regular Employement</div>
                                </button>
                                <button onClick={()=>{
                                    setCount2(prev2=>prev2+1)
                                }}>
                                    <div><a><FaBook /></a></div>
                                    <div>Remedial Employement</div>
                                </button>
                                <button onclick={()=>{
                                    setCount3(prev3=>prev3+1)
                                }}>
                                    <div><a><MdOutlineNaturePeople /></a></div>
                                    <div>Club Management</div>
                                </button>
                            </div>
                            <div class="row2">
                                <button>
                                    <a><FaBookReader /></a>
                                    <p>Classroom Management</p>
                                </button>
                                <button>
                                    <a><MdEmail /></a>
                                    <p>SMS/Email</p>
                                </button>
                                <button>
                                    <a><BsFileEarmarkBarGraphFill /></a>
                                    <p>Attendance</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Body;
