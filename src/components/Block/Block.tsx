import React from 'react';
import s from './Block.module.scss';
import {Draggable} from 'react-beautiful-dnd';
import styled from 'styled-components';
import cn from 'classnames';
import Display from '../Display/Display';
import Operations from '../Operations/Operations';
import Buttons from '../Buttons/Buttons';
import Equal from '../Equal/Equal';
import useStore from '../../store/calc';
import {IDndComponent} from '../../types/IDndData';

interface IBlockProps {
    index: number;
    block: IDndComponent;
}

const Container = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06), 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

function Block({block, index}: IBlockProps): JSX.Element {
    const {switcher, setSwitcher} = useStore();

    const getCalcComponent = (name: string) => {
        switch(name) {
            case 'Display':
                return <Display/>
            case 'Operations':
                return <Operations isConstructor={switcher === 'Constructor'}/>
            case 'Buttons':
                return <Buttons isConstructor={switcher === 'Constructor'}/>
            case 'Equal':
                return <Equal/>
        }
    };

    return (
        <Draggable
            draggableId={block.id}
            index={index}
            isDragDisabled={switcher === 'Runtime'}
        >
            {(provided, snapshot) => {
                const itemClasses = cn(s.itemDefault, {
                    [s.itemActive]: snapshot.isDragging
                });

                return (
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        // isDragging={snapshot.isDragging}
                    >
                        <div className={itemClasses}>
                            {/*{props.block.content}*/}
                            {getCalcComponent(block.content)}
                        </div>
                    </Container>
                )
            }}
        </Draggable>
    );
}

export default Block;