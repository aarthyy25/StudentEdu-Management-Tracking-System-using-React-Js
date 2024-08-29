import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { PiFilesLight } from "react-icons/pi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdOutlineSettings } from "react-icons/md";
import { TbLogout } from "react-icons/tb";

function Navbar(){
    return(
        <div>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-2">
                            <div><FaUsers /></div>
                            <div>Student Management</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div><FaUserGraduate /></div>
                            <div>Alumini</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2">
                            <div><PiFilesLight /></div>
                            <div>Attendance</div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-2 foot">
                            <div><AiFillQuestionCircle /></div>
                            <div><MdOutlineSettings /></div>
                            <div><TbLogout /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Navbar;