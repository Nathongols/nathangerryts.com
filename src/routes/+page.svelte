<script>
    import { fly } from 'svelte/transition';
    import { _visible } from '../pageHandler.js'

    let visible = 1;

    _visible.subscribe(value => {
		visible = value;
	});

</script>

{#if visible == 1}
    <div class = "wrap">
        <div class="index" transition:fly="{{y:200, duration:1000}}"
        on:outrostart="{() => _visible.set(0)}"
        on:outroend="{() => _visible.set(1)}">
            <h1>This page is under construction!
                <p>It's cool that you found my site, but it isn't finished yet! please come back later ^_^</p>
            </h1>
        </div>
    </div>
{/if}

<style> 
    .wrap {
        display: flex;
    }
    .index {
        display: flex;
        flex-direction: column;
        margin: 20px;
        padding: 20px; /* Add some padding for better spacing */
        border-radius: 1.4vw;
        z-index: 2;
        background-color: #111111;
        color: #ffffff; /* Ensure text is readable */
        max-width: 100%; /* Ensure it uses full available width */
        width: auto; /* Allow width to adjust based on content */
        height: auto;
        max-height: 30vh; /* Set a reasonable max-height, adjust as needed */
        overflow: auto; /* Add scrollbars if content exceeds max-height */
        box-sizing: border-box; /* Ensure padding is included in height calculations */
    }
    p {
        font-size: medium;
    }
</style>