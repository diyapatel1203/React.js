import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleTheme } from '../redux/action';


const Theme = () => {
    const {theme}=useSelector((store)=>store.themeReducer)
    const dispatch = useDispatch();

    return (
        <div style={{marginBottom:"20px"}}>
            <button
                onClick={() => dispatch(handleTheme('light'))}
               style={{padding:"10px 50px 10px 50px"}}
               disabled={theme == 'light'}
            >
                Switch to Light
            </button>&nbsp;
            <button
                onClick={() => dispatch(handleTheme('dark'))}
                style={{padding:"10px 50px 10px 50px"}}
                disabled={theme == 'dark'}
            >
                Switch to Dark
            </button>
        </div>
    );
};

export default Theme;
