<script lang="ts">
    import Donut from '$lib/donut.svelte';
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>
 
<header>
    <Title />
    <h1>
        Talkshow
    </h1>

</header>

<div class="canvas-wrapper">
    <Donut />
</div>


<main>

    <slot></slot>
</main>

<footer>
    <p></p>
</footer>
 
<style>
    header {
        display: flex;
        justify-content: left;
        background-color: #f5efe6;
        border-bottom-right-radius: 20px;
        max-width: 250px;
        z-index: 0;
    }
    .canvas-wrapper{
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 1;
    }
    h1 {
        justify-self: right;
        margin-left: 100px;
        background-color: blue;
        border-radius: 20px;
        z-index: -1;
    }
    main {
        background-color:#f5efe6;
        max-width: 1500px;
        min-height: 100vw;
        border-radius: 20px;
        display: flex;
        margin: auto;
        margin-top: 50px;
    }
    footer {
        text-align: center;
    }

</style>