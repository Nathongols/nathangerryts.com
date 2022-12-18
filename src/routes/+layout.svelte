<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene from '$lib/scene.svelte';
    import Title from '$lib/title.svelte';
    import Sidebar from '$lib/sidebar.svelte';
    import '../styles/global.css'
</script>


<main>
    <div class="sidebar">
        <Title/>
        <Sidebar/>
    </div>
    <div class="canvas-wrapper">
        <Canvas>
            <Scene/>
        </Canvas>
    </div>
    <slot></slot>
</main>

<footer>
    <p>Taco</p>
</footer>
 
<style>
    .canvas-wrapper{
        position: absolute;
        top: 0;
        right: 0;
        height: 1080px;
        width: 1860px;
        background-color: #161616;
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