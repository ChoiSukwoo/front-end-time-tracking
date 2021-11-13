import styled from 'styled-components';

const View = styled.div`
    @media screen and (min-width:768px){
        display: flex;  grid-row: 1 / span 2;   position: relative;
        min-width: 225px;   max-width: 450px; min-height:518px; max-height:1036px; width: 17.7vw; height: 35.97vw;    border-radius: 15px;
    }
    @media screen and (max-width:768px){
        display: flex; position: relative;  flex-direction: column;
        width: 100%;    height: 54.13vw;
    }
`

const Head = styled.div`
    background-color:#5747EA;
    border-radius: 15px;
    font-size:15px; color:#BBC0FF;

    @media screen and (min-width:768px){
        display: flex;  flex-direction: column; row-gap: 2.98vw; position: absolute; top:0px;
        min-width: 225px;   max-width: 450px; min-height:354px; max-height:708px;  width: inherit;  height: 24.58vw; padding: 2.57vw 2.22vw;
    }

    @media screen and (max-width:768px){
        display: flex; align-items: center; column-gap: 5.33vw; position: absolute; top:0px;
        width: 100%;    height: 35.46vw;    padding: 9.33vw 10.4vw 9.06vw 8.53vw;
    }

`
const ProfileImg = styled.img`

    border-radius: 50%; border:3px solid #fff; box-sizing: unset;

    @media screen and (min-width:768px){
        min-width: 78px; max-width: 156px;  min-height: 78px; max-height: 156px; width: 5.41vw; height: 5.41vw;
    }

    @media screen and (max-width:768px){
        width: 15.46vw;   height: 15.46vw;
    }
`
const ProfileNm = styled.div`
    font-size: 40px; font-weight: 300;  color: #fff ;
    @media screen and (max-width:768px){
        font-size: 24px;
    }
`
const Content = styled.div`
    background-color: #1C204B;
    font-size: 18px; color: #7078C9;
    
    @media screen and (min-width:768px){
        min-width: 225px;   max-width: 450px; min-height:518px; max-height:1036px;  width: inherit;  height: 35.97vw; padding: 2.22vw; border-radius: 15px;    
        display: flex;  flex-direction: column; justify-content: flex-end;  align-items: flex-start; row-gap: 1.45vw;
    }
    @media screen and (max-width:768px){
        width: 100%;    height: 54.13vw; border-radius: 15px;    
        display: flex;  padding: 6.66vw 0;    align-items:flex-end;
    }
`
const Selecter = styled.div`
    &:hover{color:#FFF}
    cursor: pointer;
    @media screen and (max-width:768px){
        flex: 1; display: flex; justify-content: center;
    }
`
const SelectedSelecter = styled.div`
    color: #FFF;
    cursor: pointer;
    @media screen and (max-width:768px){
        flex: 1; display: flex; justify-content: center;
    }
`

function ProfileView({profileImg,porfileNm,ChangeDayType,dayType}){

    return(
        <View>
            <Head>
                <ProfileImg src={profileImg} ></ProfileImg>
                <div>
                    <div>Report for</div>
                    <ProfileNm>{porfileNm}</ProfileNm>
                </div>
            </Head>
            <Content>
                <DayTypeSelect ChangeDayType={ChangeDayType} selectedDayType={dayType}>Daily</DayTypeSelect>
                <DayTypeSelect ChangeDayType={ChangeDayType} selectedDayType={dayType}>Weekly</DayTypeSelect>
                <DayTypeSelect ChangeDayType={ChangeDayType} selectedDayType={dayType}>Monthly</DayTypeSelect>
            </Content>
        </View>
    )
}

function DayTypeSelect({ChangeDayType,selectedDayType,children}){

    let view = (children == selectedDayType) ? <SelectedSelecter >{children}</SelectedSelecter> : <Selecter onClick={()=>ChangeDayType(children)}>{children}</Selecter>

    return(
        view
    )
}


export default ProfileView;