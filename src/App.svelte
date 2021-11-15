<script>
	import { onMount } from 'svelte';
	import { Game } from './game'; //imported after the external modules in svelte head
	import jQuery from '../js/jquery';
	import Chess from '../js/chess';
	// import Chessboard from '../js/chessboard';
	import {chessboard} from './loader'

	export let name; //prop
	var board;
	let el;
	var game;

	onMount(() => {
		console.log('Mounted');
		window.chessboard = chessboard;
		window.jQuery = jQuery;
		board = chessboard(el, 'start');
		// board = Chessboard(el, {
		// 	draggable: true,
		// 	position: 'start',
		// 	// onDrop: game.sayName, //game is not initialized yet!
		// 	sparePieces: true
		// });
		console.log('Created board');
	});

	// function initBoard() {
	// 	console.log('Initializing board');
	// 	board = Chessboard(el, {
	// 		draggable: true,
  	// 	position: 'start',
  	// 	// onDrop: game.sayName, //game is not initialized yet!
  	// 	sparePieces: true});
	// }
	
	// function initGame() {
	// 	console.log('Initializing game');
	// 	let chess = Chess(); //chess.js
	// 	game = new Game(2,3,chess);
	// 	// board.onDrop = game.onDrop;
	// }


	// function onDragStart (source, piece, position, orientation) {
	// 	// do not pick up pieces if the game is over
	// 	if (game.game_over()) return false

	// 	// only pick up pieces for the side to move
	// 	if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
	// 		(game.turn() === 'b' && piece.search(/^w/) !== -1)) {
	// 		return false
	// 	}
	// }

	

</script>

<svelte:head>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" ></script> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.css"/>
	<!-- <script src="chess.js" on:load={initGame}></script> -->
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.js" on:load={initBoard}> </script> -->
</svelte:head>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<div bind:this={el} style="width: 400px"></div>
<button id="startBtn">Start Position</button>
<button id="clearBtn">Clear Board</button>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>