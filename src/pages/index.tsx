import {DragDropContext} from 'react-beautiful-dnd';
import Column from '../components/Column/Column';
import {useState} from 'react';
import {initialDndData} from '../dnd/initialDndData';
import styled from 'styled-components';
import {IDndData} from '../types/IDndData';
import Switcher from '../components/Switcher/Switcher';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

function DndCalc(): JSX.Element {
    const [dndBlocks, setDndBlocks] = useState<IDndData>(initialDndData);

    const onDragEnd = (result: any) => {
        // document.body.style.color = 'blue';
        // document.body.style.backgroundColor = 'transparent';

        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index) {
            return;
        }

        const start = dndBlocks.columns[source.droppableId];
        const finish = dndBlocks.columns[destination.droppableId];
        if (start === finish) {
            const newBlockIds = Array.from(start.blockIds);
            newBlockIds.splice(source.index, 1);
            newBlockIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...start,
                blockIds: newBlockIds
            };

            const newState = {
                ...dndBlocks,
                columns: {
                    ...dndBlocks.columns,
                    [newColumn.id]: newColumn
                }
            }

            setDndBlocks(newState);
            return;
        }

        const startBlockIds = Array.from(start.blockIds);
        startBlockIds.splice(source.index, 1);
        const newStart = {
            ...start,
            blockIds: startBlockIds,
        };

        const finishBlockIds = Array.from(finish.blockIds);
        finishBlockIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            blockIds: finishBlockIds
        }

        const newState = {
            ...dndBlocks,
            columns: {
                ...dndBlocks.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish
            }
        };

        setDndBlocks(newState);
    };


    console.log('rerender:');

    // const onDragStart = () => {
    //     // document.body.style.color = 'orange';
    //     document.body.style.transition = 'background-color 0.2s ease'
    // }

    // const onDragUpdate = (update: any) => {
    //     const {destination} = update;
    //
    //     const opacity = destination
    //         ? destination.index / Object.keys(dndBlocks.components).length
    //         : 0;
    //     // document.body.style.backgroundColor = `rgba(153, 123, 56, ${opacity})`;
    // }

    return (
        <main className='page'>
            <Switcher/>
            <DragDropContext
                // onDragStart={onDragStart}
                // onDragUpdate={onDragUpdate}
                onDragEnd={onDragEnd}
            >
                <Container>
                    {dndBlocks.columnOrder.map((columnId) => {
                        const column = dndBlocks.columns[columnId];
                        const blocks = column.blockIds.map((blockId: string) => dndBlocks.components[blockId]);

                        return <Column key={column.id} column={column} blocks={blocks}/>;
                    })}
                </Container>
            </DragDropContext>
        </main>
    );
}

export default DndCalc;