import React from "react";
import "./card_list_style.css"
import { Card } from "../card/card_components";

export const CardList = (props) => {
    return (
        <div className ="card_list_style">
            {props.item.map(e => (
                // <h1 key = {e.id}>{e.name}</h1>
                <Card key={e.id} eachItem={e}/>
            ))}
        </div>
    )
}