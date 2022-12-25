import Board from '../components/Board';
import { useBoard } from '../hooks/useBoard';
import '../styles/components/Tetris.scss';

const Tetris = ({rows, columns, setGameOver}) => {
    const [board, setBoard] = useBoard({ rows, columns });

    return (
        <>
            <div className="Tetris"></div>

            <Board board={board} />
        </>
    );
};

export default Tetris;
