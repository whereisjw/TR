import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { styled } from 'styled-components';
const Card = styled.div`
  background-color: ${props=>props.theme.cardColor};
  border-radius: 5px;
  padding: 10px 10px;
  margin-bottom: 5px;
`

interface IDragabbleCardProps{
    toDo:string;
    index:number
}


const DraggableCard = ({toDo,index}:IDragabbleCardProps) => {
    console.log(toDo,"렌더링됨");
    
  return (
    <div> <Draggable key={toDo} draggableId={toDo} index={index}>
    {(magic) => <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps} >{toDo}</Card>}
  </Draggable></div>
  )
}

export default React.memo(DraggableCard);