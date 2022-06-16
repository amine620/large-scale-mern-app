import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { CardContainer, DateCalendar, Icon, ItemContainer, LineSeperator, Name, SmallIcon } from "./style";
import { Marginer } from "../marginer";

export function BookCard(){
    const [startDate, setStartDate] = useState<Date>(new Date())
    const [isStartCalendarOpen, setisStartCalendarOpen] = useState(false)

    const [returnDate, setReturnDate] = useState<Date>(new Date())
    const [isReturnCalendarOpen, setisReturnCalendarOpen] = useState(false)

    const toggleStartCalendar=()=>{
        setisStartCalendarOpen(!isStartCalendarOpen)
        if(isReturnCalendarOpen)
         setisReturnCalendarOpen(!isReturnCalendarOpen)
    }
    const toggleReturnCalendar=()=>{
        setisReturnCalendarOpen(!isReturnCalendarOpen)
        if(isStartCalendarOpen)
         setisStartCalendarOpen(!isStartCalendarOpen)
    }
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleStartCalendar}>
                    Pick Up Date
                </Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretDown : faCaretUp}/>
                </SmallIcon>
                {isStartCalendarOpen && <DateCalendar value={startDate} onChange={setStartDate}  />}
            </ItemContainer>
            <LineSeperator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name onClick={toggleReturnCalendar}>
                    Return Date
                </Name>
                <SmallIcon>
                    <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretDown : faCaretUp}/>
                </SmallIcon>
                {isReturnCalendarOpen && <DateCalendar value={returnDate} onChange={setReturnDate}  />}

            </ItemContainer>
            <Marginer direction="horizontal" margin={"2em"}/>
            <Button text="Book Your Ride" />
        </CardContainer>
    )
}