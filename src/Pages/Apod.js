import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import '../datePicker.css'
import {useDispatch, useSelector} from "react-redux";
import {apodPosts} from "../redux/actions";
import Loader from "../components/Loader";
import CardApod from "../components/CardApod";


function Apod() {
    const [date, setDate] = useState(new Date())

    const dispatch = useDispatch()
    const apod = useSelector(state => state.get.apodPost)
    const loading = useSelector(state => state.app.loading)

    if (loading) {
        return <Loader />
    }

    return (
            <div>
                <div className='form form-apod'>
                    <DatePicker
                        selected={date}
                        onChange={date => setDate(date)}
                        dateFormat='yyyy/MM/dd'
                        maxDate={new Date()}
                        isClearable
                        showYearDropdown
                        scrollableMouthYearDropdown
                    />

                    <button className='apod-button'
                            onClick={() => dispatch(apodPosts(
                                date ?
                                `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                                    : ""
                            ))}
                    >
                        Загрузить
                    </button>
                </div>
                <CardApod data={apod} />
            </div>




    )

}




export default Apod;