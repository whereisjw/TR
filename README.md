# npm i react-beautiful-dnd

# npm i --save-dev @types/react-beautiful-dnd

typescript에서 react-beautiful-dnd를 인식시켜줘야함

```
      <DragDropContext onDragEnd={onDragEnd}>
        <div>
          <Droppable droppableId="one">
            {(magic) => (
              <ul ref={magic.innerRef} {...magic.droppableProps}>
                <Draggable draggableId="first" index={0}>
                  {(magic) => <li ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>one</li>}
                </Draggable>
                <Draggable draggableId="second" index={1}>
                  {(magic) =><li ref={magic.innerRef}  {...magic.draggableProps} {...magic.dragHandleProps}> two</li>}
                </Draggable>
              </ul>
            )}
          </Droppable>
        </div>
      </DragDropContext>
```

- DragDropContext< Draggable< Droppable
- react 최신버전에서는 strictmode 무조건 제거해야함