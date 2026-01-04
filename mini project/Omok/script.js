class OmokGame {
    constructor() {
        this.board = Array(15).fill().map(() => Array(15).fill(null));
        this.currentPlayer = 'black';
        this.gameOver = false;
        this.boardElement = document.getElementById('game-board');
        this.currentPlayerElement = document.getElementById('current-player');
        this.winModal = document.getElementById('win-modal');
        this.winMessage = document.getElementById('win-message');
        
        this.initializeBoard();
        this.setupEventListeners();
    }

    initializeBoard() {
        console.log('Initializing board - clearing and recreating all intersections');
        
        // Completely clear the board element
        this.boardElement.innerHTML = '';
        
        // Reset any inline styles on the board element
        this.boardElement.removeAttribute('style');
        
        // Recreate all intersection points
        for (let row = 0; row < 15; row++) {
            for (let col = 0; col < 15; col++) {
                const intersection = document.createElement('div');
                intersection.className = 'intersection';
                intersection.dataset.row = row;
                intersection.dataset.col = col;
                
                // Position at intersection of grid lines
                const x = col * 30 + 30; // 30px spacing + 30px offset from edge
                const y = row * 30 + 30;
                intersection.style.left = x + 'px';
                intersection.style.top = y + 'px';
                
                // Clear any potential lingering styles
                intersection.style.background = '';
                intersection.style.border = '';
                
                intersection.addEventListener('click', () => {
                    console.log(`Intersection clicked: row=${row}, col=${col}`);
                    this.makeMove(row, col);
                });
                this.boardElement.appendChild(intersection);
            }
        }
        
        console.log(`Board initialized with ${15 * 15} fresh intersections`);
    }

    setupEventListeners() {
        document.getElementById('reset-btn').addEventListener('click', () => {
            console.log('Reset button clicked');
            this.resetGame();
        });
        document.getElementById('rematch-btn').addEventListener('click', () => {
            console.log('Rematch button clicked');
            this.resetGame();
        });
        
        // Close modal when clicking outside
        this.winModal.addEventListener('click', (e) => {
            if (e.target === this.winModal) {
                this.hideWinModal();
            }
        });
    }

    makeMove(row, col) {
        console.log(`makeMove called: row=${row}, col=${col}, currentPlayer=${this.currentPlayer}`);
        
        if (this.gameOver || this.board[row][col] !== null) {
            console.log(`Move blocked: gameOver=${this.gameOver}, cellOccupied=${this.board[row][col] !== null}`);
            return;
        }

        // Place the stone
        this.board[row][col] = this.currentPlayer;
        console.log(`Stone placed at [${row}][${col}] for ${this.currentPlayer}`);
        
        // Update visual representation
        const intersection = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        intersection.classList.add(this.currentPlayer);
        
        // Check for win
        if (this.checkWin(row, col)) {
            this.gameOver = true;
            this.showWinModal(this.currentPlayer);
            return;
        }
        
        // Switch players
        this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black';
        this.updateCurrentPlayerDisplay();
    }

    checkWin(row, col) {
        const directions = [
            [0, 1],   // horizontal
            [1, 0],   // vertical
            [1, 1],   // diagonal \
            [1, -1]   // diagonal /
        ];

        for (const [dx, dy] of directions) {
            if (this.checkDirection(row, col, dx, dy)) {
                return true;
            }
        }
        
        return false;
    }

    checkDirection(row, col, dx, dy) {
        const player = this.board[row][col];
        let count = 1; // Count the current stone
        
        // Check in positive direction
        let r = row + dx;
        let c = col + dy;
        while (r >= 0 && r < 15 && c >= 0 && c < 15 && this.board[r][c] === player) {
            count++;
            r += dx;
            c += dy;
        }
        
        // Check in negative direction
        r = row - dx;
        c = col - dy;
        while (r >= 0 && r < 15 && c >= 0 && c < 15 && this.board[r][c] === player) {
            count++;
            r -= dx;
            c -= dy;
        }
        
        return count >= 5;
    }

    updateCurrentPlayerDisplay() {
        this.currentPlayerElement.textContent = this.currentPlayer === 'black' ? 'Black' : 'White';
        this.currentPlayerElement.style.color = this.currentPlayer === 'black' ? '#000' : '#666';
    }

    showWinModal(winner) {
        const winnerText = winner === 'black' ? 'Black' : 'White';
        this.winMessage.textContent = `${winnerText} Player Wins!`;
        this.winMessage.style.color = winner === 'black' ? '#000' : '#666';
        this.winModal.style.display = 'block';
        
        // Add confetti effect
        this.createConfetti();
    }

    hideWinModal() {
        this.winModal.style.display = 'none';
    }

    createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-10px';
                confetti.style.zIndex = '9999';
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                
                document.body.appendChild(confetti);
                
                const animation = confetti.animate([
                    { transform: 'translateY(0px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 20}px) rotate(360deg)`, opacity: 0 }
                ], {
                    duration: 3000 + Math.random() * 2000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                });
                
                animation.addEventListener('finish', () => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                });
            }, i * 50);
        }
    }

    resetGame() {
        console.log('resetGame called - refreshing board style and script');
        
        // Reset game state
        this.board = Array(15).fill().map(() => Array(15).fill(null));
        this.currentPlayer = 'black';
        this.gameOver = false;
        
        // Completely refresh the board by reinitializing it
        this.initializeBoard();
        
        // Clear any lingering hover effects or styles
        this.boardElement.style.cssText = '';
        
        // Reset UI elements
        this.updateCurrentPlayerDisplay();
        this.hideWinModal();
        
        console.log('resetGame completed - board style and script refreshed');
    }
}

// Initialize the game when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Store the game instance globally
    window.omokGame = new OmokGame();
    
    // Add hover effect preview for stones
    const boardElement = document.getElementById('game-board');
    
    boardElement.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('intersection') && 
            !e.target.classList.contains('black') && 
            !e.target.classList.contains('white')) {
            
            if (!window.omokGame.gameOver) {
                e.target.style.background = window.omokGame.currentPlayer === 'black' ? 
                    'radial-gradient(circle, rgba(0,0,0,0.4) 70%, rgba(51,51,51,0.4) 100%)' :
                    'radial-gradient(circle, rgba(255,255,255,0.8) 70%, rgba(238,238,238,0.8) 100%)';
                e.target.style.border = '2px solid ' + (window.omokGame.currentPlayer === 'black' ? '#666' : '#999');
            }
        }
    });
    
    boardElement.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('intersection') && 
            !e.target.classList.contains('black') && 
            !e.target.classList.contains('white')) {
            e.target.style.background = '';
            e.target.style.border = '';
        }
    });
});
