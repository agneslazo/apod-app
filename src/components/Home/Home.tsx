import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './Home.module.css';
import { Button, Paper } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router';

function Home() {
    const history = useHistory();

    const initialAPodData = {"date":"2020-09-15","explanation":"Could there be life floating in the atmosphere of Venus? Although Earth's planetary neighbor has a surface considered too extreme for any known lifeform, Venus' upper atmosphere may be sufficiently mild for tiny airborne microbes. This usually disfavored prospect took an unexpected upturn yesterday with the announcement of the discovery of Venusian phosphine. The chemical phosphine (PH3) is a considered a biomarker because it seems so hard to create from routine chemical processes thought to occur on or around a rocky world such as Venus -- but it is known to be created by microbial life on Earth.  The featured image of Venus and its thick clouds was taken in two bands of ultraviolet light by the Venus-orbing Akatsuki, a Japanese robotic satellite that has been orbiting the cloud-shrouded world since 2015.  The phosphine finding, if confirmed, may set off renewed interest in searching for other indications of life floating high in the atmosphere of our Solar System's second planet out from the Sun.   Experts Debate: How will humanity first discover extraterrestrial life?","hdurl":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg","media_type":"image","service_version":"v1","title":"Biomarker Phosphine Discovered in the Atmosphere of Venus","url":"https://apod.nasa.gov/apod/image/2009/VenusClouds_Akatzuki_960.jpg"}

    const [apodData, setApodData] = useState(initialAPodData);

    useEffect(()=>{
        axios.get('https://api.nasa.gov/planetary/apod?api_key=kKB6lWp1qTcx8tVT5GnkcPaoMCuRZ2bqO1V0GtXT')
        .then((result) => {
            console.log(result);
            setApodData(result.data);
        });
    },[]);

    const goToAPODPage = () => {
        history.push('/apod');
    }

    return (
        <div className={classes.HomeContainer} >
            <div className={classes.Date} >
                {new Date(apodData.date).toDateString()}
            </div>
            <Paper elevation={3} className={classes.Paper} >
                <div style={{textAlign: 'center'}} >Astronomy Picture of the Day</div>
                <div className={classes.APODImgContainer} >
                    <img
                        src={apodData.url}
                        alt='AstronomyPhotoOfTheDay'
                    />
                </div>
                <div className={classes.Title} >{apodData.title}</div>
                <div className={classes.View} >
                    <Button endIcon={<ChevronRightIcon fontSize='small' />} onClick={goToAPODPage}>View</Button>                    
                </div>
            </Paper>
        </div>
    );
}

export default Home;
