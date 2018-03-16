/* <div class="boards__grey-icon">
</div>
<h2 class="boards__section-title boards-starred">Starred Boards</h2>
<div class="boards__grid">
    <div class="board-tile-primary">
        <a href="" class="board-tile__link"></a>
        <div class="board-tile__rect-wrapper-sm">
            <h2 class="board-tile__name">Test</h2>
            <button class="board-tile__star board-tile__star--appear btn--transparent-bg">
                <i class="fas fa-star"></i>
            </button>
        </div>
    </div>

</div> */


function Board(width, height, name) {
    this.width = width;
    this.height = height;
    this.name = name;
    this.isFavorite = false;
}

Board.prototype = {
    create: function (type, name) {

        //Board creation that houses all the elements
        const board = document.createElement('div');
        Array.isArray(type) ? board.classList.add(...type) : board.classList.add(type);


        //Rectangle to put name of board and fa button
        const boardRect = document.createElement('div');
        boardRect.classList.add('board-tile__rect-wrapper-sm');

        //Set Name
        const boardName = document.createElement('h2');
        boardName.textContent = name;


        //Link creation
        const boardLink = document.createElement('a');
        const linkClasses = ['board-tile__link'];
        boardLink.setAttribute('href', '#');


        //Button for fa star
        const starBtn = document.createElement('button');
        const starBtnClasses = ['board-tile__star', 'board-tile__star--appear', 'btn--transparent-bg'];
        starBtn.classList.add(...starBtnClasses);


        //fa star creation
        const star = document.createElement('i');
        const starClasses = ['fas', 'fa-star'];
        star.classList.add(...starClasses);

        board.appendChild(boardRect);

        boardRect.appendChild(boardName);
        boardRect.appendChild(starBtn);
        starBtn.appendChild(star);
    },
    delete: function () {

    },
    setFavorite: function () {

    },
};