var cellState;
var nextCellState;
var x;
var y;
var time;
var runningFlag;

function setRange() {
	x = parseInt($('#input-x').val());
	y = parseInt($('#input-y').val());
	if(isNaN(x) || x <= 2) {
		x = 20;
		$('#input-x').val(x);
	}
	if(isNaN(y) || y <= 2) {
		y = 10;
		$('#input-y').val(y);
	}
	return new Array(x,y);
}

function initCells(x, y) {
	cellState = new Array(y);
	nextCellState = new Array(y);
	for(var i = 0; i < y; i++) {
		cellState[i] = new Array(x);
		nextCellState[i] = new Array(x);
		for(var j = 0; j < x; j++) {
			cellState[i][j] = 0;
			nextCellState[i][j] = 0;
		}
	}
	return cellState;
}

function initGrid(x, y) {
	$('.game-display').empty();
	for(var i = 0; i < y; i++) {
		for(var j = 0; j < x; j++) {
			var div = document.createElement('div');
			div.id = i+'-'+j;
			div.className = 'dead';
			div.style = 'top:'+i*2+'vh; left:'+j*2+'vh;'
			var jqDiv = $(div);
			$('.game-display').append(jqDiv);
		}
	}
}

function init() {
	runningFlag = 0;
	initGrid(x, y);
	initCells(x, y);
	console.log('0.0'); 
}

$().ready(function() {
	setRange();
	init();
});

function becomeLive(a, b, cell) {
	cellState[a][b] = 1;
	cell.removeClass('dead');
	cell.addClass('live');
}

function becomeDead(a, b, cell) {
	cellState[a][b] = 0;
	cell.removeClass('live');
	cell.addClass('dead');
}

function changeCellState(a, b, cell) {
	if(cellState[a][b] == 0) {
		becomeLive(a, b, cell);
	} else {
		becomeDead(a, b, cell);
	}
}

function getNextGeneration() {
	for(var i = 0; i < y; i++) {
		for(var j = 0; j < x; j++) {
			var sum = 0;
			for(var m = 0; m < 3; m++) {
				for(var n = 0; n < 3; n++) {
					sum += cellState[(i+m-1+y)%y][(j+n-1+x)%x];
				}
			}
			sum -= cellState[i][j];

			if(sum == 3) {
				nextCellState[i][j] = 1;
			} else if(sum == 2) {
				nextCellState[i][j] = cellState[i][j];
			} else {
				nextCellState[i][j] = 0;
			}
		}
	}
}

function showChangedCells() {
	for(var i = 0; i < y; i++) {
		for(var j = 0; j < x; j++) {
			if(cellState[i][j] == 0 && nextCellState[i][j] == 1) {
				var cell = $('#'+i+'-'+j);
				becomeLive(i, j, cell);
			} else if (cellState[i][j] == 1 && nextCellState[i][j] == 0) {
				var cell = $('#'+i+'-'+j);
				becomeDead(i, j, cell);
			}
		}
	}
}

function generate() {
	getNextGeneration();
	showChangedCells();
	time = setTimeout("generate()", 200);
}

$(function() {
	$('.game-display').click(function(event) {
		var coor = new Array();
		var cell = $(event.target);
		coor = cell.attr('id').split('-');
		changeCellState(coor[0], coor[1], cell);
	});
	$('#input-start').click(function() {
		if(runningFlag == 0) {
			runningFlag = 1;
			generate();
		}
	});
	$('#input-stop').click(function() {
		if(runningFlag == 1) {
			runningFlag = 0;
			clearTimeout(time);
		}
	});
	$('#input-rand').click(function() {
		for(var i = 0; i < y; i++) {
			for(var j = 0; j < x; j++) {
				if(Math.random() < 0.3) {
					nextCellState[i][j] = 1;
				} else {
					nextCellState[i][j] = 0;
				}
			}
		}
		showChangedCells();
	});
	$('#input-reset').click(function() {
		if(runningFlag == 1) {
			runningFlag = 0;
			clearTimeout(time);
		}
		setRange();
		init();
	});
});
