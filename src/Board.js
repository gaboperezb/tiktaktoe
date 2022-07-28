import Square from "./Square";

const Board = (props) => {
    return (
        <div>
            <div className="board-row">
                <Square value={props.moves[0]} onClick={() => props.onClick(0)} />
                <Square value={props.moves[1]} onClick={() => props.onClick(1)} />
                <Square value={props.moves[2]} onClick={() => props.onClick(2)} />
            </div>
            <div className="board-row">
                <Square value={props.moves[3]} onClick={() => props.onClick(3)} />
                <Square value={props.moves[4]} onClick={() => props.onClick(4)} />
                <Square value={props.moves[5]} onClick={() => props.onClick(5)} />
            </div>
            <div className="board-row">
                <Square value={props.moves[6]} onClick={() => props.onClick(6)} />
                <Square value={props.moves[7]} onClick={() => props.onClick(7)} />
                <Square value={props.moves[8]} onClick={() => props.onClick(8)} />
            </div>
        </div>
    );

}


export default Board;