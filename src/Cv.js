import React from 'react'
import res from "./photos/resume.pdf"
import { AiOutlineDownload } from "react-icons/ai";

//<a href={res} download className='https:drive.google.com/file/d/1Bc9-18LoXVBN5ciyOFN3_0vkPNyA3WmI/embeded/drive_link'></a>

export const Cv = () => {
  return (
    <div id="cv">
          <button
    variant="primary"
    href={res}
    target="_blank"
    style={{
      maxWidth: "250px",
      margin: "10px auto",
      padding: "10px 20px ",
      borderRadius: "5px",
      backgroundColor: "#337ab7",
      width:"150px",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      paddingLeft:"20px",
      marginLeft:"600px"
    }}
    >
    
    &nbsp;Download CV
   </button>
       <iframe
    src={res}
    style={{
      marginTop: "40px",
      marginBottom: "40px",
      width: "75%",
      height: "75vh",
      border: "2px solid #ddd",
      overflow: "auto",
       marginLeft:"150px"
    }}
    title="Resume Preview"
    />
   
   
    
</div>
   

  )
}
