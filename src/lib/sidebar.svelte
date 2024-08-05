<div>
	<aside class="side">
		<nav class="menu">
			<a href="/" class="menu-item">Home</a>
			<a href="/about" class="menu-item">About</a>
			<a href="/" class="menu-item">Projects</a>
			<a href="/" class="menu-item">Posts</a>
			<a href="/" class="menu-item">Contact</a>
		</nav>
	</aside>
</div>

<style>
	.side {
		flex: 1 1 0;
		max-width: 29vw;
		min-width: none;
		padding: 2rem 1rem;
	}

	.menu {
		margin: 0 -1rem;
	}

	.menu .menu-item {
		display: block;
		padding: 1em;
		color: aliceblue;
		text-decoration: none;
		transition: 0.14s linear;
		overflow: hidden;
		font-size: 1.5vw; /* Adjust font size based on viewport width */
	}

	.menu .menu-item:hover {
		color: #ff4c4cbf;
		border-left: 5px solid #ff4c4cbf;
	}
</style>
