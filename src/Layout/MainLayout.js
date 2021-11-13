import styled from 'styled-components';
import React, { useState } from 'react';

import ProfileView from '../Component/ProfileView';
import TimeTrackView from '../Component/TimeTrackView';

import ProfileImg from '../images/image-jeremy.png'

const Layout = styled.div`
    width : 100%;   min-height: 100%;
`

const ContentCover = styled.div`
    display: grid;  grid-template-columns: repeat(4,auto);   grid-template-rows: repeat(2,auto);  gap: 2.01vw;
    width: max-content;
    @media screen and (max-width:768px){
        display:flex; flex-direction: column; padding: 21.6vw 6.4vw;  gap: 6.4vw;
        width: 100vw;
    }
`

function MainLayout({ TimeData }) {

    const [DayType, setDayType] = useState('Daily');

    const changeDayType = (type) =>{
        console.log(type)
        setDayType(type)
    }



    let TimeTrackList = TimeData.map((value, key) => <TimeTrackView key={value.title} timeTrackData={value} dayType={DayType} />)

    return (
        <Layout className='center'>
            <ContentCover>
                <ProfileView profileImg={ProfileImg} porfileNm={'Jeremy Robson'} ChangeDayType={changeDayType} dayType={DayType}/>
                {TimeTrackList}
            </ContentCover>
        </Layout>
    )
}

export default MainLayout;