// Checkers Game Logic
class CheckersGame {
    constructor() {
        this.board = [];
        this.currentPlayer = 'black';
        this.selectedPiece = null;
        this.possibleMoves = [];
        this.jumpInProgress = false;
        this.mustJumpPiece = null;
        this.blackPieces = 12;
        this.redPieces = 12;
        this.gameOver = false;
        
        this.initializeBoard();
        this.renderBoard();
        this.updateUI();
    }
    
    initializeBoard() {
        // Create 8x8 board
        this.board = Array(8).fill(null).map(() => Array(8).fill(null));
        
        // Place black pieces (rows 0, 1, 2)
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 1) {
                    this.board[row][col] = { color: 'black', king: false };
                }
            }
        }
        
        // Place red pieces (rows 5, 6, 7)
        for (let row = 5; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if ((row + col) % 2 === 1) {
                    this.board[row][col] = { color: 'red', king: false };
                }
            }
        }
    }
    
    renderBoard() {
        const checkerboard = document.getElementById('checkerboard');
        checkerboard.innerHTML = '';
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement('div');
                square.className = 'square';
                square.dataset.row = row;
                square.dataset.col = col;
                
                // Determine square color
                if ((row + col) % 2 === 0) {
                    square.classList.add('light');
                } else {
                    square.classList.add('dark');
                }
                
                // Add piece if exists
                const piece = this.board[row][col];
                if (piece) {
                    const pieceElement = document.createElement('div');
                    pieceElement.className = `piece ${piece.color}`;
                    if (piece.king) {
                        pieceElement.classList.add('king');
                    }
                    square.appendChild(pieceElement);
                }
                
                // Add click event
                square.addEventListener('click', () => this.handleSquareClick(row, col));
                
                checkerboard.appendChild(square);
            }
        }
    }
    
    handleSquareClick(row, col) {
        if (this.gameOver) return;
        
        const piece = this.board[row][col];
        const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        
        // If there's a jump in progress, only allow continuation of that jump
        if (this.jumpInProgress && this.mustJumpPiece) {
            if (this.mustJumpPiece.row !== row || this.mustJumpPiece.col !== col) {
                // Check if this is a valid jump destination
                const validMove = this.possibleMoves.find(move => 
                    move.toRow === row && move.toCol === col && move.isJump
                );
                
                if (validMove) {
                    this.makeMove(this.mustJumpPiece.row, this.mustJumpPiece.col, row, col, validMove);
                }
                return;
            }
        }
        
        // If clicking on a piece
        if (piece && piece.color === this.currentPlayer && !this.jumpInProgress) {
            this.selectPiece(row, col);
        }
        // If clicking on an empty square or different colored piece
        else if (this.selectedPiece) {
            const validMove = this.possibleMoves.find(move => 
                move.toRow === row && move.toCol === col
            );
            
            if (validMove) {
                this.makeMove(this.selectedPiece.row, this.selectedPiece.col, row, col, validMove);
            } else {
                this.clearSelection();
            }
        }
    }
    
    selectPiece(row, col) {
        this.clearSelection();
        
        // Check if this piece has mandatory jumps
        const mandatoryJumps = this.getMandatoryJumps();
        const pieceHasMandatoryJump = mandatoryJumps.some(jump => 
            jump.fromRow === row && jump.fromCol === col
        );
        
        // If there are mandatory jumps and this piece doesn't have one, don't select
        if (mandatoryJumps.length > 0 && !pieceHasMandatoryJump) {
            return;
        }
        
        this.selectedPiece = { row, col };
        this.possibleMoves = this.getPossibleMoves(row, col);
        
        // Highlight selected piece
        const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        square.classList.add('selected');
        
        // Highlight possible moves
        this.possibleMoves.forEach(move => {
            const moveSquare = document.querySelector(`[data-row="${move.toRow}"][data-col="${move.toCol}"]`);
            moveSquare.classList.add('possible-move');
        });
    }
    
    getPossibleMoves(row, col) {
        const piece = this.board[row][col];
        if (!piece) return [];
        
        const moves = [];
        const directions = this.getMoveDirections(piece);
        
        for (const [dRow, dCol] of directions) {
            // Regular move
            const newRow = row + dRow;
            const newCol = col + dCol;
            
            if (this.isValidPosition(newRow, newCol) && !this.board[newRow][newCol]) {
                moves.push({ toRow: newRow, toCol: newCol, isJump: false });
            }
            
            // Jump move
            const jumpRow = row + (dRow * 2);
            const jumpCol = col + (dCol * 2);
            
            if (this.isValidPosition(jumpRow, jumpCol) && 
                this.board[newRow][newCol] && 
                this.board[newRow][newCol].color !== piece.color && 
                !this.board[jumpRow][jumpCol]) {
                moves.push({ 
                    toRow: jumpRow, 
                    toCol: jumpCol, 
                    isJump: true, 
                    capturedRow: newRow, 
                    capturedCol: newCol 
                });
            }
        }
        
        return moves;
    }
    
    getMoveDirections(piece) {
        if (piece.king) {
            return [[-1, -1], [-1, 1], [1, -1], [1, 1]];
        } else if (piece.color === 'black') {
            return [[1, -1], [1, 1]]; // Black moves down
        } else {
            return [[-1, -1], [-1, 1]]; // Red moves up
        }
    }
    
    isValidPosition(row, col) {
        return row >= 0 && row < 8 && col >= 0 && col < 8;
    }
    
    getMandatoryJumps() {
        const jumps = [];
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = this.board[row][col];
                if (piece && piece.color === this.currentPlayer) {
                    const moves = this.getPossibleMoves(row, col);
                    const jumpMoves = moves.filter(move => move.isJump);
                    
                    jumpMoves.forEach(jump => {
                        jumps.push({
                            fromRow: row,
                            fromCol: col,
                            ...jump
                        });
                    });
                }
            }
        }
        
        return jumps;
    }
    
    makeMove(fromRow, fromCol, toRow, toCol, moveData) {
        const piece = this.board[fromRow][fromCol];
        
        // Move the piece
        this.board[toRow][toCol] = piece;
        this.board[fromRow][fromCol] = null;
        
        // Handle capture
        if (moveData.isJump) {
            this.board[moveData.capturedRow][moveData.capturedCol] = null;
            
            // Update piece count
            if (this.currentPlayer === 'black') {
                this.redPieces--;
            } else {
                this.blackPieces--;
            }
            
            // Check for additional jumps
            const additionalJumps = this.getPossibleMoves(toRow, toCol).filter(move => move.isJump);
            
            if (additionalJumps.length > 0) {
                // Must continue jumping
                this.jumpInProgress = true;
                this.mustJumpPiece = { row: toRow, col: toCol };
                this.selectedPiece = { row: toRow, col: toCol };
                this.possibleMoves = additionalJumps;
                
                this.renderBoard();
                this.highlightContinuedJump(toRow, toCol);
                this.updateUI();
                return;
            }
        }
        
        // Check for king promotion
        if ((piece.color === 'black' && toRow === 7) || 
            (piece.color === 'red' && toRow === 0)) {
            piece.king = true;
        }
        
        // End turn
        this.jumpInProgress = false;
        this.mustJumpPiece = null;
        this.currentPlayer = this.currentPlayer === 'black' ? 'red' : 'black';
        
        this.clearSelection();
        this.renderBoard();
        this.updateUI();
        this.checkGameEnd();
    }
    
    highlightContinuedJump(row, col) {
        const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        square.classList.add('selected');
        
        this.possibleMoves.forEach(move => {
            const moveSquare = document.querySelector(`[data-row="${move.toRow}"][data-col="${move.toCol}"]`);
            moveSquare.classList.add('possible-move');
        });
    }
    
    clearSelection() {
        this.selectedPiece = null;
        this.possibleMoves = [];
        
        // Remove all highlights
        document.querySelectorAll('.square').forEach(square => {
            square.classList.remove('selected', 'possible-move', 'highlighted');
        });
    }
    
    updateUI() {
        document.getElementById('current-player').textContent = 
            this.currentPlayer.charAt(0).toUpperCase() + this.currentPlayer.slice(1);
        document.getElementById('black-count').textContent = this.blackPieces;
        document.getElementById('red-count').textContent = this.redPieces;
    }
    
    checkGameEnd() {
        // Check if a player has no pieces left
        if (this.blackPieces === 0) {
            this.endGame('Red', 'All black pieces captured!');
            return;
        }
        
        if (this.redPieces === 0) {
            this.endGame('Black', 'All red pieces captured!');
            return;
        }
        
        // Check if current player has no valid moves
        const validMoves = this.getAllValidMoves(this.currentPlayer);
        if (validMoves.length === 0) {
            const winner = this.currentPlayer === 'black' ? 'Red' : 'Black';
            this.endGame(winner, 'No valid moves available!');
        }
    }
    
    getAllValidMoves(color) {
        const moves = [];
        
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const piece = this.board[row][col];
                if (piece && piece.color === color) {
                    const pieceMoves = this.getPossibleMoves(row, col);
                    moves.push(...pieceMoves);
                }
            }
        }
        
        return moves;
    }
    
    endGame(winner, reason) {
        this.gameOver = true;
        this.clearSelection();
        
        document.getElementById('winner-text').textContent = `${winner} Wins!`;
        document.getElementById('win-reason').textContent = reason;
        document.getElementById('winning-modal').classList.add('show');
    }
}

// Global game instance
let game = null;

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    game = new CheckersGame();
});

// Game control functions
function restartGame() {
    closeModal();
    game = new CheckersGame();
}

function closeModal() {
    document.getElementById('winning-modal').classList.remove('show');
}

function toggleRules() {
    const rulesPanel = document.getElementById('rules-panel');
    const button = document.getElementById('rules-btn');
    
    if (rulesPanel.classList.contains('show')) {
        rulesPanel.classList.remove('show');
        button.textContent = 'Show Rules';
    } else {
        rulesPanel.classList.add('show');
        button.textContent = 'Hide Rules';
    }
}

// Close modal when clicking outside of it
document.getElementById('winning-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('winning-modal')) {
        closeModal();
    }
});
