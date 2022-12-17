<script>
	import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { _visible } from '../pageHandler.js'

    let visible = 1;

    _visible.subscribe(value => {
		visible = value;
	});

</script>

{#if visible == 1}
    <div class = "wrap">
        <div class="index" in:fly="{{y:200, duration:1000}}" out:fly="{{y:200, duration:1000, delay:200}}"
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
        margin-left: 50px ;
    }
    .index {
        position: absolute;
        top:auto;
        text-align: center;
        display: block;
        margin: 20px auto;
        height: 370px;
        width: 1560px;
        z-index: 3;
        background-color: #111111;
        border-radius: 30px;
    }
    p {
        font-size: medium;
    }
</style>