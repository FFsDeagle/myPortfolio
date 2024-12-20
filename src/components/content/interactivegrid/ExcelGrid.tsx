import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Table } from "react-bootstrap";
import './ExcelGrid.css';

interface Cell {
    value: string;
    formula: string;
    selected: boolean;
    x: string;
    y: string;
}
const ExcelGrid = () => {
    const focusCell = useRef<HTMLInputElement>(null);

    const [data, setData] = useState<Cell[][]>(() => {
        const rows: Cell[][] = [];
        for (let i = 0; i < 12; i++) {
            const row: Cell[] = [];
            for (let j = 0; j < 12; j++) {
                row.push({ value: `R${i}C${j}`, formula: '', selected: false, x: `R${i}`, y: `C${j}` });
            }
            rows.push(row);
        }
        return rows;
    });

    // Disable default browser behavior
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' || e.key === 'Enter') {
                e.preventDefault();
            }
        })
    }, [])

    useEffect(() => {
        data.map(row => row.map(cell => {
            if (cell.selected) {
                if (focusCell.current) {
                    focusCell.current.focus();
                    if (cell.formula !== '') {
                        focusCell.current.value = cell.formula;
                    }
                }
            }
            return cell;
        }))
    }, [data])

    const handleCellChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        row: Cell) => {
            setData(data.map(r => r.map(c => {
                if (c === row) {
                    c.value = e.target.value;
                }
                return c;
            })))
    }

    const handleSelect = (cell: Cell) => {
        setData(data.map(row => row.map(c => {
            if (c === cell) {
                c.selected = true;
            } else {
                c.selected = false;
            }
            return c;
        })))
    }

    const handleKeyboardFunctions = (e: KeyboardEvent) => {
        // Get current cell
        const cell = data.flat().find(c => c.selected);
        if (!cell) return;
        if (e.key === 'Enter' || e.key === 'ArrowDown') {
            // Focus on the cell below
            const nextCell = data
                [parseInt(cell.x.substring(1)) + 1]
                [parseInt(cell.y.substring(1))];

            handleSelect(nextCell);

            // Recalculate all formulas
            data.map(row => row.map(cell => {
                handleFormula(cell);
            }))
        }
        if (e.key === 'Tab' || e.key === 'ArrowRight') {
            // Focus on the cell to the right
            const nextCell = data
                [parseInt(cell.x.substring(1))]
                [parseInt(cell.y.substring(1)) + 1];

            handleSelect(nextCell);
        }
        if (e.key === 'Tab' && e.shiftKey || e.key === 'ArrowLeft') {
            // Focus on the cell to the left
            const nextCell = data
                [parseInt(cell.x.substring(1))]
                [parseInt(cell.y.substring(1)) - 1];

            handleSelect(nextCell);
        }
        if (e.key === 'ArrowUp') {
            // Focus on the cell above
            const nextCell = data
                [parseInt(cell.x.substring(1)) - 1]
                [parseInt(cell.y.substring(1))];

            handleSelect(nextCell);
        }
        if (e.key === 'Escape') {
            // Deselect all cells
            setData(data.map(row => row.map(c => {
                c.selected = false;
                return c;
            })))
        }
    }

    const handleFormula = (cell: Cell) => {
        if (!cell.formula.startsWith('=') && !cell.value.startsWith('=')) {
            return;
        }

        if (cell.value.includes('+') || cell.formula.includes('+')) {
            // Split the formula by '+' from value
            const formulaFromValue = cell.value.split('+');
            handleAddition(cell, formulaFromValue[0].replace('=', ''), formulaFromValue[1], cell.formula);
        }
    }

    const handleAddition = (cell: Cell, value1: string, value2: string, formula: string) => {
        if (formula !== '') {
            value1 = formula.split('+')[0].replace('=', '');
            value2 = formula.split('+')[1];
        } else if (!hasKey(value1) || !hasKey(value2)) {
            // Check the formula property
            let formulaFromValue = cell.value.split('+');
            value1 = formulaFromValue[0].replace('=', '');
            value2 = formulaFromValue[1];
        }

        if (hasKey(value1) && hasKey(value2)) {
            const cell1 = data.flat().find(c => c.x + c.y === value1);
            const cell2 = data.flat().find(c => c.x + c.y === value2);
            if (cell1 && cell2) {
                if (isNumber(cell1.value) && isNumber(cell2.value)) {
                    setData(data.map(row => row.map(c => {
                        if (c.x === cell.x && c.y === cell.y) {
                            if (c.formula === '') {
                                c.formula = cell.value;
                            }
                            c.value = (parseInt(cell1.value) + parseInt(cell2.value)).toString();
                        }
                        return c;
                    })))
                }
            }
            return;
        }
    }

    const isNumber = (value: string) => {
        return !isNaN(parseInt(value));
    }

    const hasKey = (value: string) => {
        return value.toUpperCase().includes('R') || value.toUpperCase().includes('C');
    }
    
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="text-success">Excel Grid</h3>
        <Table className="mt-4" striped hover bordered>
            <thead>
                <tr>
                    {data[0].map((_, i) => (
                        <th key={i}>{`C${i}`}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i}>
                        {row.map((cell, j) => (
                            <td 
                                onClick={() => handleSelect(cell)}
                                className={`text-success ${cell.selected ? 'bg-primary text-black' : 'user-select-none'}`} 
                                key={j}
                            >
                                {
                                    cell.selected ?
                                    <input
                                        onKeyDown={e => handleKeyboardFunctions(e as KeyboardEvent)}
                                        ref={focusCell}
                                        style={{ width: 'min-content !important' }}
                                        className="cell-input text-success overflow-hidden" type="text" 
                                        onChange={(e) => handleCellChange(e, cell)} 
                                        value={cell.value}
                                    />
                                    : cell.value
                                }
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    </div>
  )
};

export default ExcelGrid;
