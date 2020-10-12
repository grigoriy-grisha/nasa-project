import React from 'react';



function CardApod({data}) {
    if (data.code) {
        return <h2>Ничего не найдено</h2>
    }else {
        return (
            <div className="card-apod">

                <h1>{data.title}</h1>
                <p className='apod-text'>{data.explanation}</p>
                <img className="apod-img" src={data.url} alt=""/>
            </div>
        );
    }

}

export default CardApod;
