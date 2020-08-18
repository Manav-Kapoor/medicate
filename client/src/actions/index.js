import users from '../apis/users';
import bookedappointments from '../apis/bookedappointments';


export const userSubmit = (user) =>{
     //return an action with type and payload which is an object for every user
    return {
        type: 'USER_SUBMIT',
        payload: user
    }
}

export const submit = (data) => async dispatch =>{
    const response = await users.get(`/users/?name=${data.account}`);
    users.put(`/users/${response.data[0].id}`,{
        ...response.data[0],
        bookedAppointments: [...response.data[0].bookedAppointments, data]
    })
    .then((newResponse)=>{
        dispatch({type: 'SUBMIT', payload: newResponse.data});       
    })
}
export const bookAppointment = (data) => async dispatch =>{
    bookedappointments.post('/bookedappointments', data)
    .then((response)=>{
        console.log(response.data);
        dispatch({type: 'BOOK_APPOINTMENT', payload: [response.data]})
    })
}

export const addTest = (data) => {
    return {
        type: 'ADD_TEST',
        payload: data
    }
}

export const removeTest = (data) => {
    return {
        type: 'REMOVE_TEST',
        payload: data
    }
}
export const submitTestData = (data) => async dispatch =>{
    const response = await users.get(`/users/?${data.account}`);
    users.put(`/users/${response.data[0].id}`,
    {
        ...response.data[0],
        bookedTest: [...response.data[0].bookedTest, data]
    }).then(()=>{
        alert('Your Test has been booked. Thank You!');
        dispatch({type: 'BOOK_TEST', payload: data})
    })
}
export const bookTest = (data)=>{
    return{
        type: 'BOOK_TEST',
        payload: data
    }
}

export const update = (data) =>{
    return{
        type: 'UPDATE',
        payload: data
    }
}
export const emptyBookedTest = () =>{
    return {
        type: 'EMPTY_BOOKED_TEST'
    }
}
export const addAccount = (data) => async dispatch => {
    const response = await users.post('/users', data);
    dispatch({type: 'SIGN_IN', payload: response.data})
}
export const login = (data) => async dispatch =>{
    await users.get(`/users/?name=${data.username}`)
    .then((response)=>{
        if(data.password === response.data[0].password){
            dispatch({type:'SIGN_IN', payload: response.data[0]});
        }else{
            alert("Invalid Password");
        }
    })
    .catch(error => {
        alert("Invalid Username");
    })
}
export const logout = () =>{
    return{
        type: 'SIGN_OUT'
    }
}

export const getAppointment = (data) => async dispatch =>{
    bookedappointments.get('/bookedappointments')
    .then((response)=>{
        dispatch({type:'BOOK_APPOINTMENT', payload: response.data})
    })
}