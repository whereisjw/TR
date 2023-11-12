import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import DraggableCard from './DraggableCard'
import { styled } from 'styled-components';

const Wrapper = styled.div`
  background-color: ${(props)=>props.theme.boardColor};
min-height: 200px;
  padding: 20px 10px;
  padding-top: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
text-align:center;
font-weight: bold;
margin-bottom: 10px;
font-size: 1.1rem;
`

interface IBoardProps{
    toDos:string[];
    boardId:string;
}

const Board = ({toDos,boardId}:IBoardProps) => {
  return (
    <Droppable droppableId={boardId}>
            {(magic) => (
              <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                <Title>{boardId}</Title>
            {toDos ? toDos.map((toDo,index)=>(<DraggableCard key={toDo} index={index} toDo={toDo}></DraggableCard>)):null}   
                {magic.placeholder}
              </Wrapper>
            )}
          </Droppable>
  )
}

export default Board