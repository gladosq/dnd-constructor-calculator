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

    /*--- Логика dnd библиотеки ---*/
    const onDragEnd = (result: any) => {
        const {destination, source, draggableId} = result;

        if (!destination) return;

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
            };

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
        };

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

    return (
        <main className='page'>
            <Switcher/>
            <DragDropContext
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