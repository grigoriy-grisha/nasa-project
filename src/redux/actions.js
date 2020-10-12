import { GET_APOD, GET_MARS, HIDE_LOADER, SHOW_LOADER} from "./types";



export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function apodPosts(date) {
    return async dispatch => {
      try {
        dispatch(showLoader())
        const response = await fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=hMmTNxGjT9qQPJC8SVRzD1xzcomrUoz4giM0tO22`)
        const json = await response.json()
        setTimeout(() => {
          dispatch({ type: GET_APOD, payload: json })
          dispatch(hideLoader())
        }, 500)
      } catch (e) {
          console.error('Что-то пошло не так')
        // dispatch(showAlert('Что-то пошло не так'))
        dispatch(hideLoader())
      }
    }
}


export  function  marsPosts(select,sol,name) {
    return async dispatch => {
        try {
            dispatch(showLoader())
            const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${select}/photos?sol=${sol}&camera=${name}&api_key=hMmTNxGjT9qQPJC8SVRzD1xzcomrUoz4giM0tO22`)
            const json = await response.json()
            setTimeout(() => {
                dispatch({ type: GET_MARS, payload: json })
                dispatch(hideLoader())
            }, 500)
        } catch (e) {
            console.log('Что-то пошло не так')
            // dispatch(showAlert('Что-то пошло не так'))
            dispatch(hideLoader())
        }
    }

}


