import styled from 'styled-components';
import { ReactComponent as WorkSvg } from '../images//icon-work.svg';
import { ReactComponent as PlaySvg } from '../images//icon-play.svg';
import { ReactComponent as StudySvg } from '../images//icon-study.svg';
import { ReactComponent as ExerciseSvg } from '../images//icon-exercise.svg';
import { ReactComponent as SocialSvg } from '../images//icon-social.svg';
import { ReactComponent as SelfSvg } from '../images//icon-self-care.svg';


const View = styled.div`
    display: flex;  flex-direction: column; justify-content: flex-start; position: relative;
    width: 17.7vw;  height: 16.94vw;
`

const Head = styled.div`
    display: flex;  justify-content: flex-end;  overflow: hidden;
    min-width: 225px;   max-width: 450px;   width: inherit; height: 11.11vw;    border-radius: 15px; 
    background-color: ${props => props.headColor};
`

const SvgCover = styled.div`
    position: relative;
    top: -0.41vw;
`

const Content = styled.div`
    display:flex;   flex-direction: column; position:absolute;  bottom: 0; row-gap: 1.66vw;
    min-width: 225px;   max-width: 450px;  width: inherit; height: 13.82vw; border-radius: 15px;    padding: 2vw 2.43vw 0 2.1vw;
    background-color: #1C204B;
    color: #fff;
`

const TypeCover = styled.div`
    display: flex;  justify-content: space-between;
    width: 100%;
`

const Type = styled.div`
    font-size: 18px;
`

const MiniCycleCover = styled.div`
    column-gap: 0.1vw;
`

const MiniCycle = styled.div`
    width: 0.4vw; height: 0.4vw;    
    background-color: #BBC0FF;  border-radius: 50%;
`

const TimeCover = styled.div`
    display: flex;  flex-direction:column;  row-gap: 0.66vw;
`

const CurrentTime = styled.div`
    font-size: 56px;    font-weight: 300;
`

const PreviousTime = styled.div`
    font-style: 15px;   font-weight: 400;   color: #BBC0FF;
`

function TimeTrackView({ TimeTrackData, DayType }) {

    let currentTime = TimeTrackData.timeframes[DayType].current
    let previousTime = TimeTrackData.timeframes[DayType].previous
    let headColor
    let headSvg

    switch(TimeTrackData.title){
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
                    <Type>{TimeTrackData.title}</Type>
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