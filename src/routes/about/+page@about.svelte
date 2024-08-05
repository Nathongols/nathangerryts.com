<script>
	import { fly } from 'svelte/transition';
	import { _visible } from '../../pageHandler.js';

	let visible = 0;

	_visible.subscribe((value) => {
		visible = value;
	});
</script>

{#if visible == 1}
	<div class="wrap">
		<div
			class="about"
			in:fly={{ y: 200, duration: 1000 }}
			out:fly={{ y: 200, duration: 1000, delay: 200 }}
			on:outrostart={() => _visible.set(0)}
			on:outroend={() => _visible.set(1)}
		>
			<div class="textbox">
				<h2>About</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit
					totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur
					eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
				</p>
			</div>
			<div
				class="portrait"
				in:fly={{ y: 200, duration: 1000, delay: 200 }}
				out:fly={{ y: 200, duration: 1000 }}
			>
				<img src="/Nathan Potrait.jpg" alt="Description of image" class="image" />
			</div>
		</div>

		<div
			class="education"
			in:fly={{ y: 200, duration: 1000, delay: 400 }}
			out:fly={{ y: 200, duration: 1000 }}
		>
			<div
				class="portrait"
				in:fly={{ y: 200, duration: 1000, delay: 200 }}
				out:fly={{ y: 200, duration: 1000 }}
			>
				<img src="/S1mple.png" alt="Description of image" class="image" />
			</div>
			<div class="textbox">
				<h2>Education</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit
					totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur
					eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
				</p>
			</div>
		</div>
		<div
			class="education"
			in:fly={{ y: 200, duration: 1000, delay: 400 }}
			out:fly={{ y: 200, duration: 1000 }}
		>
			<div class="textbox">
				<h2>Josh</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit
					totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur
					eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
				</p>
			</div>
			<div
				class="portrait"
				in:fly={{ y: 200, duration: 1000, delay: 200 }}
				out:fly={{ y: 200, duration: 1000 }}
			>
				<img src="/josh.png" alt="Description of image" class="image" />
			</div>
		</div>
	</div>
{/if}

<style>
	.wrap {
		display: flex;
		flex-direction: column; /* Ensure vertical stacking */
		overflow: auto;
	}
	.about,
	.education {
		display: flex;
		justify-content: center;
		flex-direction: row;
		margin: 20px;
		padding: auto;
		border-radius: 2vw;
		z-index: 2;
		color: #ffffff; /* Ensure text is readable */
		max-width: 100%; /* Ensure it uses full available width */
		width: auto; /* Allow width to adjust based on content */
		height: auto;
		max-height: 30vh; /* Set a reasonable max-height, adjust as needed */
	}
	.textbox {
		display: flex;
		flex-direction: column;
		margin: 10px;
		padding: 20px; /* Add some padding for better spacing */
		border-radius: 1.4vw;
		z-index: 2;
		background-color: #111111;
		color: #ffffff; /* Ensure text is readable */
		max-width: 60%; /* Ensure it uses full available width */
		width: auto; /* Allow width to adjust based on content */
		height: auto;
		max-height: 30vh; /* Set a reasonable max-height, adjust as needed */
		overflow: auto; /* Add scrollbars if content exceeds max-height */
		box-sizing: border-box; /* Ensure padding is included in height calculations */
	}

	.portrait {
		display: flex;
		flex-direction: column;
		padding: 10px; /* Add some padding for better spacing */
		border-radius: 1.4vw;
		z-index: 2;
		max-width: 20%; /* Ensure it uses full available width */
		width: auto; /* Allow width to adjust based on content */
		height: 5%;
		max-height: 20%;
	}
	h2 {
		margin: 0 0 10px 0; /* Adjust margins as needed */
		font-size: 1.5vw;
	}
	p {
		margin: 0 0 10px 0;
		font-size: medium;
	}
	.image {
		width: 80%; /* Adjust width as needed */
		height: auto; /* Maintain aspect ratio */
		border-radius: 1.4vw;
		align-self: center;
	}
</style>
