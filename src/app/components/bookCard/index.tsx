import React, { useState } from "react";
import {
  faCalendarAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../button";
import { CardContainer, Icon, ItemContainer, LineSeperator, Name } from "./style";
import { Marginer } from "../marginer";

export function BookCard(){
    return (
        <CardContainer>
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>
                    Pick Up Date
                </Name>
            </ItemContainer>
            <LineSeperator />
            <ItemContainer>
                <Icon>
                    <FontAwesomeIcon icon={faCalendarAlt} />
                </Icon>
                <Name>
                    Return Name 
                </Name>
            </ItemContainer>
            <Marginer direction="horizontal" margin={"2em"}/>
            <Button text="Book Your Ride" />
        </CardContainer>
    )
}