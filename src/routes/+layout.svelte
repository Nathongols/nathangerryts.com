<script lang="ts">
    import Donut from '$lib/donut.svelte';
    import Title from '$lib/title.svelte';
    import Sidebar from '$lib/sidebar.svelte';
    import '../styles/global.css'
</script>

<div class="canvas-wrapper">
    <Donut />
</div>

<main>
    <div class="sidebar">
        <Title/>
        <Sidebar/>
    </div>
    <slot></slot>
</main>

<footer>
    <p></p>
</footer>
 
<style>
    .canvas-wrapper{
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 1;
        background-color: beige;
    }
    .sidebar{
        background-color: #1a1a1a;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 0px;
        max-width: 110px;
        height: 1080px;
        z-index: 2;
        transition: .17s ease-in-out;
    }
    .sidebar:hover{
        max-width: 200px;
    }
    
    main {
        background-color:#121212;
        max-width: 1920px;
        min-height: 100vw;
        display: flex;
        margin: auto;
        margin-top: 0px;
        overflow: hidden;
    }
    footer {
        text-align: center;
    }

</style>