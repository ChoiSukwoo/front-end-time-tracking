import styled from 'styled-components';
import { ReactComponent as WorkSvg } from '../images//icon-work.svg';
import { ReactComponent as PlaySvg } from '../images//icon-play.svg';
import { ReactComponent as StudySvg } from '../images//icon-study.svg';
import { ReactComponent as ExerciseSvg } from '../images//icon-exercise.svg';
import { ReactComponent as SocialSvg } from '../images//icon-social.svg';
import { ReactComponent as SelfSvg } from '../images//icon-self-care.svg';


const View = styled.div`
    display: flex;  flex-direction: column; justify-content: flex-start; position: relative;
    @media screen and (min-width:768px){
        min-width: 225px;   max-width: 450px; min-height:244px; max-height:488px;  width: 17.7vw;  height: 16.94vw;
    }
    @media screen and (max-width:768px){
        width: 100%; height: 42.66vw;
    }
`

const Head = styled.div`
    display: flex;  justify-content: flex-end;  overflow: hidden;
    background-color: ${props => props.headColor};
    @media screen and (min-width:768px){
        min-width: 225px;   max-width: 450px; min-height:160px; max-height:320px;  width: inherit; height: 11.11vw;    border-radius: 15px; 
    }
    @media screen and (max-width:768px){
        width: 100%;    height: inherit;   border-radius: 15px; 
    }
`

const SvgCover = styled.div`
    position: relative;
    @media screen and (min-width:768px){
        top: -11px;
    }
    @media screen and (max-width:768px){
        top: -14.5px;
    }
`

const Content = styled.div`
    display:flex;   flex-direction: column; position:absolute;  bottom: 0;
    background-color: #1C204B;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #33397A;
    }
    @media screen and (min-width:768px){
        row-gap: 1.66vw;
        min-width: 225px;   max-width: 450px;  min-height:199px; max-height:398px; width: inherit; height: 13.82vw; border-radius: 15px;    padding: 2vw 2.43vw 0 2.1vw;
    }
    @media screen and (max-width:768px){
        justify-content:space-between;
        width:100%; height: 32.53vw; border-radius: 15px; padding: 7.46vw 6.4vw;
    }
`

const TypeCover = styled.div`
    display: flex;  justify-content: space-between;
    width: 100%;
`

const Type = styled.div`
    font-size: 18px;
`

const MiniCycleCover = styled.div`
    column-gap: 3px;
`

const MiniCycle = styled.div`
    width: 5px; height: 5px;    
    background-color: #BBC0FF;  border-radius: 50%;
`

const TimeCover = styled.div`
    @media screen and (min-width:768px){
        display: flex;  flex-direction:column;  row-gap: 0.66vw;
    }
    @media screen and (max-width:768px){
        display: flex;  justify-content: space-between; align-items: center;
    }
`

const CurrentTime = styled.div`
    font-size: 56px;    font-weight: 300;
    @media screen and (max-width:768px){
        font-size: 32px;
    }
`

const PreviousTime = styled.div`
    font-size: 15px;   font-weight: 400;   color: #BBC0FF;
`

function TimeTrackView({ timeTrackData, dayType }) {
    
    let currentTime = timeTrackData.timeframes[dayType].current
    let previousTime = timeTrackData.timeframes[dayType].previous
    let headColor
    let headSvg

    switch(timeTrackData.title){
        case 'Work':
            headColor = '#FF8B64'
            headSvg = <WorkSvg/>
        break;
        case 'Play':
            headColor = '#55C2E6'
            headSvg = <PlaySvg/>
        break;
        case 'Study':
            headColor = '#FF5E7D'
            headSvg = <StudySvg/>
        break;
        case 'Exercise':
            headColor = '#4BCF82'
            headSvg = <ExerciseSvg/>
        break;
        case 'Social':
            headColor = '#7335D2'
            headSvg = <SocialSvg/>
        break;
        case 'Self Care':
            headColor = '#F1C75B'
            headSvg = <SelfSvg/>
        break;
    }    


    return (
        <View>
            <Head headColor={headColor}>
                <SvgCover>{headSvg}</SvgCover>
            </Head>
            <Content>
                <TypeCover>
                    <Type>{timeTrackData.title}</Type>
                    <MiniCycleCover className="center"><MiniCycle /><MiniCycle /><MiniCycle /></MiniCycleCover>
                </TypeCover>
                <TimeCover>
                    <CurrentTime>{currentTime}hrs</CurrentTime>
                    <PreviousTime>
                        Last Week - {previousTime}hrs
                    </PreviousTime>
                </TimeCover>
            </Content>
        </View>
    )
}

export default TimeTrackView;