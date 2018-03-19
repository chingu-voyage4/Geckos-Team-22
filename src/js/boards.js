
function Board(name,type) {
    this.name = name;
    this.type = type;
    this.isFavorite = false;
}

Board.prototype = {
    setName: function(name) {
        this.name = name;
    },
    create: function () {

        //Board creation that houses all the elements
        const board = document.createElement('div');
        Array.isArray(this.type) ? board.classList.add(...this.type) : board.classList.add(this.type);
    

        //Rectangle to put name of board and fa button
        const boardRect = document.createElement('div');
        boardRect.classList.add('board-tile__rect-wrapper-sm');

        //Set Name
        const boardName = document.createElement('h2');
        const nameClasses = ['board-tile__name'];
        boardName.classList.add(...nameClasses);
        boardName.textContent = this.name;


        //Link creation
        const boardLink = document.createElement('a');
        const linkClasses = ['board-tile__link'];
        boardLink.classList.add(...linkClasses);
        boardLink.setAttribute('href', '#');


        //Button for fa star
        const starBtn = document.createElement('button');
        const starBtnClasses = ['board-tile__star', 'board-tile__star--appear', 'btn--transparent-bg'];
        starBtn.classList.add(...starBtnClasses);


        //fa star creation
        const star = document.createElement('i');
        const starClasses = ['fas', 'fa-star'];
        star.classList.add(...starClasses);

        //Board setup for the CSS to take effect
        board.appendChild(boardLink);
        board.appendChild(boardRect);
        boardRect.appendChild(boardName);
        boardRect.appendChild(starBtn);
        starBtn.appendChild(star);

        return board;
    },
    delete: function () {

    },
    setFavorite: function () {

    },
};

const sections = {
    personalBoards: document.querySelector('#js-boards-personal-grid'),
    starredBoards: document.querySelector('#js-boards-starred-grid'),
};

function addBoard(boardSection) {
    const board = new Board('Test2', 'board-tile-primary');

    boardSection.appendChild(board.create());
}
