import React, { useRef } from 'react'
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
const Area = styled.div`
  background-color: blue;
`

interface IBoardProps{
    toDos:string[];
    boardId:string;
}

const Board = ({toDos,boardId}:IBoardProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const onClick =()=>{
    inputRef.current?.focus()
    setTimeout(() => {
      inputRef.current?.blur()
    }, 5000);
  }
  return (
    <Droppable droppableId={boardId}>
            {(magic,snapshot) => (
                <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          
                  <Title>{boardId}</Title>
                  <input ref={inputRef} type="text" placeholder='grap me' />
                  <button onClick={onClick}>click me</button>
              {toDos ? toDos.map((toDo,index)=>(<DraggableCard key={toDo} index={index} toDo={toDo}></DraggableCard>)):null}   
                  {magic.placeholder}
                </Wrapper>
 
            )}
          </Droppable>
  )
}

export default Board