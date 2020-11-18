import React from 'react';
import s from './preloader.module.css';
import loading from "../../assets/loading/loading.svg";


const Preloader = (props) => {
    return <div>

        {props.isFetching ? <img src={loading} alt={'loading'} /> : null}

        {/*<div className={s.loading}>*/}
        {/*    <div className={s.ld}>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*        <div></div>*/}
        {/*    </div>*/}
        {/*</div>*/}

    </div>
}

export default Preloader;