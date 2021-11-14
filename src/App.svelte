<script>
	export let name; //prop
	import { onMount } from 'svelte';
	var board;
	let el;
	var game;
	

	onMount(() => {
		console.log('Mounted');
	});

	function initBoard() {
		console.log('Initializing board');
		board = Chessboard(el, {
			draggable: true,
  		position: 'start',
  		onDrop: onDrop,
  		sparePieces: true});
	}
	
	function initGame() {
		game = Chess(); //chess.js
	}

	function onDrop (source, target, piece, newPos, oldPos, orientation) {
		console.log('Source: ' + source)
		console.log('Target: ' + target)
		console.log('Piece: ' + piece)
		console.log('New position: ' + Chessboard.objToFen(newPos))
		console.log('Old position: ' + Chessboard.objToFen(oldPos))
		console.log('Orientation: ' + orientation)
		console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

		// see if the move is legal
		var move = game.move({
			from: source,
			to: target,
			promotion: 'q' // NOTE: always promote to a queen for example simplicity
		})
		if (move === null) return 'snapback'
	}
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" ></script>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.min.css"/>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/chessboard-js/1.0.0/chessboard-1.0.0.js" on:load={initBoard}> </script>
	<script src="chess.js" on:load={initGame}></script>
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