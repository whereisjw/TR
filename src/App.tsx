import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useRecoilState } from "recoil";
 
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import styled,{ createGlobalStyle } from "styled-components";
import { toDoState } from "./atoms";
 
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3,1fr);
  width: 100%;
`




function App() {
 
 

  const GlobalStyle = createGlobalStyle`
 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
  box-sizing: border-box;
}
body{
  font-family: 'Courier New', Courier, monospace;
  background-color: ${(props) => props.theme.bgColor};
  color:black;
}
a{
  text-decoration: none;
  color: inherit;
}
`;


 
const [toDos,setToDos] =  useRecoilState(toDoState)
const onDragEnd = (info:DropResult) => {
  console.log(info);
  const {destination,draggableId,source} = info
  if(!destination){return}
  if(destination?.droppableId == source.droppableId){
    //same board movement
    setToDos((allBoard)=>{
 const BoardCopy = [...allBoard[source.droppableId]];
 BoardCopy.splice(source.index,1);
 BoardCopy.splice(destination.index,0,draggableId);
       return {...allBoard,
      [source.droppableId]:BoardCopy} 
       })
  }
 if(destination.droppableId !== source.droppableId){
  //다른 보드로 이동할때
  setToDos((allBoard)=>{
const sourceBoard = [...allBoard[source.droppableId]]
const targetBoard = [...allBoard[destination.droppableId]]
sourceBoard.splice(source.index,1)
targetBoard.splice(destination.index,0,draggableId)
return {...allBoard,[source.droppableId]:sourceBoard,[destination.droppableId]:targetBoard}
  })

 }
};
  return (
    <>
    <GlobalStyle/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map(boardId=><Board boardId={boardId} key={boardId} toDos={toDos[boardId]}/>)}          
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
}

export default App;
