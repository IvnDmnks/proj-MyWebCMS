'use client'
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

import { useLanguage } from '@/components/language-provider';

export default function TicTacToe() {
    const [board,setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
    const [isGameOver, setIsGameOver] = useState(false);
    const [winner,setWinner] = useState<string | null>(null);

    const handleClick = (cellState: string | null, index: number) => {
        console.log(`Cell ${index} clicked`);
        if (cellState) return; // Cell already occupied 

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setIsGameOver(true);
            setWinner(winner);
            return;
        }

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    } 

    function computerMove() {
        // Simple AI: choose a random empty cell
        const emptyCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null) as number[];
        if (emptyCells.length === 0) return; // No empty cells

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const cellIndex = emptyCells[randomIndex];

        const newBoard = [...board];
        newBoard[cellIndex] = currentPlayer;
        setBoard(newBoard);

        const winner = checkWinner(newBoard);
        if (winner) {
            setIsGameOver(true);
            setWinner(winner);
            return;
        }

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }

    useEffect(() => {
        if (currentPlayer === "O" && !isGameOver) {
        const timer = setTimeout(() => {
            computerMove();
        }, 500);
        return () => clearTimeout(timer);
        }
    }, [currentPlayer, isGameOver, board]);

   function checkWinner(board: (string | null)[], size = 3): string | null | undefined {
        for (let i = 0; i < size; i++) { //Checks rows
            if (board[i * size] == null) continue;
            const row = board.slice(i * size, i * size + size);
            if (row.every(cell => cell === "X")){  
                setIsGameOver(true);
                return "X";
            }           
            if (row.every(cell => cell === "O")){  
                setIsGameOver(true);
                return "O";
            }
        } 
        
        for (let col = 0; col < size; col++) { //Checks columns
            const column = [];
            for (let row = 0; row < size; row++) {
                column.push(board[row * size + col]);
            }
            if (column.every(cell => cell === "X")){  
                setIsGameOver(true);
                return "X";
            }         
            if (column.every(cell => cell === "O")){  
                setIsGameOver(true);
                return "O";
          }      
        }

        const diag1 = [];
        for (let i = 0; i < size; i++) {
            diag1.push(board[i * size + i]);
        }
        if (diag1.every(cell => cell === "X")){  
            setIsGameOver(true);
            return "X";
        }       
        if (diag1.every(cell => cell === "O")){  
            setIsGameOver(true);
            return "O";
        }
        const diag2 = [];
        for (let i = 0; i < size; i++) {
            diag2.push(board[i * size + (size - 1 - i)]);
        }
        if (diag2.every(cell => cell === "X")){  
            setIsGameOver(true);
            return "X";
        }
        if (diag2.every(cell => cell === "O")){  
            setIsGameOver(true);
            return "O";
        }
        if (board.every(cell => cell !== null)){  
            setIsGameOver(true);
            return "draw";
        }
   }

   const resetGame = () =>{
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setIsGameOver(false);
        setWinner(null);
    };

    const { t } = useLanguage();
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl p-4 m-4 font-bold text-center border border-bgSecondary rounded-lg bg-bgSecondary'> {t?.tictactoe?.page_title} </h1>
            <div className = 'flex justify-center items-center '>
                <div className='grid grid-cols-3 gap-4'>
                    {board.map((cell, index) => (
                        <div key={index} className='w-24 h-24 border flex justify-center items-center text-2xl font-bold cursor-pointer hover:bg-bgSecondary' onClick= {() => handleClick(cell, index)}>
                            {cell}
                        </div>
                    ))}
                    {winner && (
                        <div className="text-center mt-4 text-2xl font-bold justify-center">
                            {winner === 'draw' 
                                ? (t?.tictactoe?.draw_text || 'Döntetlen!') 
                                : `${t?.tictactoe?.winner_text} ${winner}`}
                        </div>
                    )}
                <Button onClick={resetGame} className='py-2 rounded-lg border-2 font-bold hover:bg-bgSecondary hover:cursor-pointer'>{ t?.tictactoe?.reset_button }</Button>
                </div> 
            </div>
        </div>
    );
//TODO: player can choose X or O
//TODO EXTRA: Animation when computer thinking | score tracking 


}