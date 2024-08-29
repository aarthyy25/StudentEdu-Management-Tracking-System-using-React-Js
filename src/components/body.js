import React,{useState,useEffect} from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdOutlineNaturePeople } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkBarGraphFill } from "react-icons/bs";
import { LuBuilding } from "react-icons/lu";



function Body(){
    
        let[count1,setCount1]=useState(0);
        let[count2,setCount2]=useState(0);
        let[count3,setCount3]=useState(0);
    function Count(){
        useEffect(()=>{
            setTimeout(()=>{
                setCount1(count1=>count1+1)
                setCount2(count2=>count2+1)
                setCount3(count3=>count3+1)
             },2000)
        })
    }
    return(
        <div>
            <section>
                <div class="container">
                    <div class="row boxes">
                        <div class='col-2'></div>
                        <div class="col-3 card">
                            <div>
                                <span><FaUserAlt /></span>
                                <span>{count1}</span>
                                <div>Regular Students</div>
                            </div>
                        </div>
                        <div class="col-3 card">
                            <div>
                                <span><FaBook /></span>
                                <span>{count2}</span>
                                <div>Remedial Students</div>
                            </div>
                        </div>
                        <div class="col-3 card">
                            <div>
                                <span><MdOutlineNaturePeople /></span>
                                <span>{count3}</span>
                                <div>In paid clubs</div>
                            </div>
                        </div>
                    </div>
                    <div class="row menu">
                        <div class="col-2"></div>
                        <div class="col-10">
                            <h4>Menu</h4> 
                        </div>
                    </div>
                    <div class="row menu">
                        <div class="col-2"></div>
                        <div class="col-3">
                            <div><FaUserAlt /></div>
                            <button onclick={Count()}>Regular Employement</button>
                        </div>
                        <div class="col-3">
                            <div><FaBook /></div>
                            <button onClick={Count()}>Remedial Employement</button>
                        </div>
                        <div class="col-3">
                            <div><MdOutlineNaturePeople /></div>
                            <button onClick={Count()}>Club Management</button>
                        </div>
                    </div>
                    <div class="row menu">
                        <div class="col-2"></div>
                        <div class="col-3">
                            <div><FaBookReader /></div>
                            <div>Classroom Management</div>
                        </div>
                        <div class="col-3">
                            <div><MdEmail /></div>
                            <div>SMS/Email</div>
                        </div>
                        <div class="col-3">
                            <div><BsFileEarmarkBarGraphFill /></div>
                            <div>Attendance</div>
                        </div>
                    </div>
                    <div class="row menu">
                        <div class="col-5"></div>
                        <div class="col-3">
                            <div><LuBuilding /></div>
                            <div>Clinic</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Body;