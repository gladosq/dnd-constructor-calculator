import React, {useEffect, useState} from 'react';
import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import cn from 'classnames';
import Block from '../Block/Block';
import s from './Column.module.scss';
import {IDndColumn, IDndComponent} from '../../types/IDndData';
import useStore from '../../store/calc';

interface IColumnProps {
    column: IDndColumn,
    blocks: IDndComponent[]
}

const Container = styled.div`
  border: 2px dashed #c4c4c4;
  border-radius: 10px;
  min-width: 240px;
`;

const BlockList = styled.div`
  padding: 8px;
  border-radius: 6px;
  flex-grow: 1;
`;

function Column({column, blocks}: IColumnProps): JSX.Element {
    const {switcher, setSwitcher} = useStore();

    const columnClasses = cn(s.columnWrapper, {
        [s.columnWrapperRuntime]: column.id === 'constructor' && switcher === 'Runtime'
    });

    return (
        <Container>
            <div className={columnClasses}>
                <h3 className={s.title}>{column.title}</h3>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => {
                        const containerClasses = cn(s.itemDefault, {
                            [s.itemActive]: snapshot.isDraggingOver
                        });

                        return (
                            <BlockList
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <div className={containerClasses}>
                                    {blocks.map((item: IDndComponent, index: number) => (
                                        <Block
                                            index={index}
                                            key={item.id}
                                            block={item}
                                        />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            </BlockList>
                        )
                    }}
                </Droppable>
            </div>
        </Container>
    );
}

export default Column;