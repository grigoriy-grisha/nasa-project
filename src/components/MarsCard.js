import React from "react";



function MarsCard({cameraName,cameraFullName,earthDate,roverName,status,imgSrc}) {

    return (
        <div className='marsCard'>
            <span>Camera Name: {cameraName} </span>
            <span>Camera Full Name: {cameraFullName}</span>
            <span>Earth Date: {earthDate}</span>
            <span>Rover NAme: {roverName} </span>
            <span>Status: {status}</span>
            <img src={imgSrc}/>
        </div>
    )
}

export default MarsCard;