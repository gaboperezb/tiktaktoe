import { useState } from "react";
import Board from "./Board";

const Game = (props) => {

    const [moves, setMoves] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const [winner, setWinner] = useState(null);

    const handleClick = (i) => {

        const squares = moves.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = xIsNext ? "X" : "O";
        setXisNext(!xIsNext);
        setMoves(squares);
        setWinner(calculateWinner(squares));
        if (gameOver(squares) || calculateWinner(squares)) {
            restart();
        }
    }

    const gameOver = (squares) => {
        return squares.filter(move => move == null).length === 0;
    }

    const restart = () => {
        setTimeout(() => {
            setMoves(Array(9).fill(null))
            setWinner(false);
            setXisNext(true);
        }, 1500);

    }

    return (
        <div className="game" >
            <div className="game-board">
                <Board
                    moves={moves}
                    onClick={handleClick}
                />
            </div>
            {winner && <div className="winner">
                Winner: {winner}
            </div>}
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


export default Game;
