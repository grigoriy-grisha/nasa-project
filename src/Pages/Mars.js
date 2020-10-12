import React, {useEffect, useState} from 'react';
import RadioList from "../components/RadioList";
import MarsInput from "../components/MarsInput";
import MarsButton from "../components/MarsButton";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../components/Loader";
import {marsPosts} from "../redux/actions";
import SelectMars from "../components/selectMars";
import MarsCard from "../components/MarsCard";

const numRegex = RegExp(/^[0-9]+$/);


function Mars() {

    const [radio,setRadio] =  useState('')
    const [text, setText] =  useState('')
    const [select, setSelect] = useState('Curiosity')
    const [filter, setFilter] = useState(['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','MARDI','NAVCAM'])
    const [error, setError] = useState(null)

    const dispatch = useDispatch()
    const mars = useSelector(state => state.get.marsPost)
    const loading = useSelector(state => state.app.loading)

     const changeRadio = () => {
        if (select === 'Opportunity' || select === 'Spirit') {
            setFilter(['FHAZ','RHAZ','NAVCAM','PANCAM','MINITES'])
        }else {
            setFilter(['FHAZ','RHAZ','MAST','CHEMCAM','MAHLI','MARDI','NAVCAM'])
        }
    }
    useEffect(() => {
        changeRadio()
    },[select])

    const handleSelectChange = (e) => {
        setSelect(e.target.value)
        setRadio('')
    }




    const handlerRadio = ( e ) => {
        setRadio(e.target.value)

    }

    const changeInput = ( e ) => {
        setText(e.target.value)
    }

    const checkForm = ( e ) => {
        e.preventDefault()

        if (radio) {
            setError(false)
        }

        if (text) {
            setError(false)
        }

        if (text.match(numRegex) &&
            (Number(text) <= 1000 && Number(text) >= 0))
        {
            setText('')
            setError(true)
            submitMars()
        }else {
            setError(false)
        }
    }

    const submitMars = () => {
        dispatch( marsPosts(select,text,radio))
    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="form-mars">
            <div className="radio-checkButton">
                <div className="container-radioButton">
                    <h2>should choose a rover</h2>
                    <SelectMars
                        arraySelect={['Curiosity','Opportunity','Spirit']}
                        onChangeSelect={handleSelectChange}
                        select={select}
                    />
                    <h2>should choose a camera:</h2>
                    <RadioList
                        radioList={filter}
                        handlerRadio={handlerRadio}
                        radio={radio}
                    />
                </div>
            </div>
            {!error && <span>Введите корректные данные!</span>}
            <MarsInput
                onChangeInput={changeInput}
                value={text}
            />
            <MarsButton onCheckForm={checkForm}/>
            {mars.photos &&
            (mars.photos.map( (item,index) => (
                <MarsCard
                    key={`${item['camera'].name}_${index}`}
                    cameraName={item['camera'].name}
                    cameraFullName={item['camera'].full_name}
                    earthDate={item.earth_date}
                    roverName={item['rover'].name}
                    status={item['rover'].status}
                    imgSrc={item['img_src']}
                />
                )
            ))

            }

        </div>
    )
}

export default Mars;
