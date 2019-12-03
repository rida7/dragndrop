import React, { useState, useCallback } from 'react'
import Card from '../Card1/Card1'
import update from 'immutability-helper'
const style = {
    margin: 50,
width: 150,
display:'flex',
flexFlow: 'wrap',

};
export default () => {




        const [cards, setCards] = useState([
            {
                id: 1,
                text: '1',
            },
            {
                id: 2,
                text: '2',
            },
            {
                id: 3,
                text: '3',
            },
            {
                id: 4,
                text: '4',
            },
            {
                id: 5,
                text:
                    '5',
            },
            {
                id: 6,
                text: '6',
            },
            {
                id: 7,
                text: '7',
            },
            {
                id: 8,
                text: '8',
            },
            {
                id: 9,
                text: '9',
            },
        ]);


    const shuffled = [...cards];

        for (let i = shuffled.length-1 ; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }


       // console.log(shuffled);



    const [shuffledcards,setShuffledcards]=useState(shuffled);
        const moveCard = useCallback(

            (dragIndex, hoverIndex) => {
                const dragCard = shuffledcards[dragIndex];
                setShuffledcards(
                    update(shuffledcards, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, dragCard],
                        ],
                    }),
                )

            },
            [shuffled],
        );
        console.log(shuffledcards);
    //let arr=[...shuffledcards];


 //   console.log(checkList(arr));



    const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        };

    function checkList(arr) {
        console.log(arr.length);
        for (let i = 0; i < arr.length-1; i++) {
           // if (arr[i].id) {
                if (arr[i].id >arr[i+1].id) {
                    return false;

                }
       //     }

        }
        return true;
    }
checkList(shuffledcards);
    //console.log(checkList(arr));
    if(checkList(shuffledcards)){alert("welcome")}
        return (
            <>
            <div style={style}>{shuffledcards.map((card, i) => renderCard(card, i))}</div>
            </>
        )

};

