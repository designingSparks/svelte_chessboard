import Chessboard from '../js/chessboard';

export function chessboard(node, pos) {
    var chessboard = new Chessboard(node, {
        position: pos,
    });
    return chessboard;
}
