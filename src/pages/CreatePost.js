import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import manager from "../images/manager.png"
import "../css/manager.css"
function CreatePost() {
 

  return (
    <body class="manager-body">
      <div class="QRcode-box"><img src={manager}></img></div>
    </body>
  )
}

export default CreatePost;
