import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

import ProfileView from '../Component/ProfileView';
import TimeTrackView from '../Component/TimeTrackView';

const Layout = styled.div`
    width : 100%;   min-height: 100%;
`

const ContentCover = styled.div`
    display: grid;  grid-template-columns: repeat(4,auto);   grid-template-rows: repeat(2,auto);  gap: 2.01vw;
    @media screen and (max-width:768px){grid-template-columns: repeat(1,auto); grid-template-rows: repeat(7,auto);}
    width: max-content;
`

function MainLayout({ TimeData }) {

    const [DayType, setDayType] = useState('daily');


    let TimeTrackList = TimeData.map((value, key) => <TimeTrackView key={value.title} TimeTrackData={value} DayType={DayType} />)

    return (
        <Layout className='center'>
            <ContentCover>
                <ProfileView />
                {TimeTrackList}
            </ContentCover>
        </Layout>
    )
}

export default MainLayout;