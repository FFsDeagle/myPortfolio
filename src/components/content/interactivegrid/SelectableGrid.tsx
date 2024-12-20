import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './SelectableGrid.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

interface SelectableGridProps {
    rows: number;
    cols: number;
    lives: number;
    setLives: Dispatch<SetStateAction<number>>;
    setLevel: Dispatch<SetStateAction<number>>;
    level: number;
}

interface GridItemProps {
    index: number;
    selected: boolean;
    isTrap?: boolean;
}

const SelectableGrid = ({ rows, cols, lives, setLives, setLevel, level }: SelectableGridProps) => {

    const [gridItems, setGridItems] = useState<GridItemProps[]>([]);
    const [isSelecting, setIsSelecting] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [levelComplete, setLevelComplete] = useState(false);

    useEffect(() => {
        // Add grid items to the state
        generateGrid();
    }, []);

    useEffect(() => {
        // If all items have been selected, proceed to the next level
        const normalItems = gridItems.filter(item => !item.isTrap);
        if (normalItems.length > 0 && normalItems.every(item => item.selected === true)) {
            setLevelComplete(true);
        }
    }, [gridItems])

    useEffect(() => {
        if (lives === 0) {
            setGameOver(true);
        }
    }, [lives]);

    useEffect(() => {
        generateGrid();
    }, [rows, cols]);

    const generateGrid = () => {
        setGridItems(Array.from({ length: rows * cols }).map((_, index) => ({
            index,
            selected: false,
            isTrap: Math.random() < 0.1
        })))
    }

    const handleSelection = (item: GridItemProps) => {
        // Toggle the selected state of a single item
        if (item.selected || gameOver) {
            return;
        }
        item.selected = true;
        if (item.isTrap) {
            setLives(lives - 1);
        }
        setGridItems([...gridItems]);
    };

    const handleMouseDown = (item: GridItemProps) => {
        // Start the selection mode
        setIsSelecting(true);
        handleSelection(item);
    };

    const handleMouseEnter = (item: GridItemProps) => {
        // If we're currently selecting and we enter a new cell, select it
        if (isSelecting) {
            handleSelection(item);
        }
    };

    const handleMouseUp = (item: GridItemProps) => {
        // End the selection mode
        setIsSelecting(false);
    };

    const resetGrid = () => {
        generateGrid();
        setGridItems(gridItems.map(item => ({ ...item, selected: false })));
        setLives(3);
        setGameOver(false);
        setLevelComplete(false);
    }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
        {gameOver && (
            <div className='d-flex flex-column justify-content-center align-items-center position-absolute z-3 border border-4 border-success rounded bg-black p-2 border-success user-select-none'>
                <h1 className='text-danger'>Game Over!</h1>
                <Button
                    onClick={resetGrid}
                    color='success'
                    className='m-2'
                >
                    Try Again
                </Button>
            </div>
        )}
        {levelComplete && 
            <div className='d-flex flex-column justify-content-center align-items-center text-success position-absolute z-3 border border-success border-4 rounded bg-black p-2 border-success user-select-none'>
                <h1 className=''>
                    Level Complete!
                </h1>
                <Button
                    onClick={() => {
                        setLevel(level + 5);
                        resetGrid();
                    }}
                    color='success'
                    className='m-2'
                >
                    Next Level
                </Button>
            </div>
        }
        <div className={`grid ${gameOver ? 'disable' : ''}`} style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {gridItems && gridItems.map((item, index) => (
                <div 
                    key={index} 
                    className={`grid-item ${item.selected ? 'selected' : ''} ${item.selected && item.isTrap ? 'trap' : ''}`}
                    onMouseDown={() => handleMouseDown(item)}
                    onMouseEnter={() => handleMouseEnter(item)}
                    onMouseUp={() => handleMouseUp(item)}
                >
                        {item.index}
                </div>
            ))}
        </div>
        <div className='grid-menu d-flex justify-align-content-between align-items-center'>
            <div>
                <h3 className='fs-4 align-self-center text-success m-2'>
                    <FontAwesomeIcon icon={faHeart} color='red' /> {lives}
                </h3>
            </div>
            <Button
                onClick={resetGrid}
                color='success'
                className='m-2'
            >
                    Reset
            </Button>
        </div>
    </div>
  )
};

export default SelectableGrid;
