<script lang="ts">
    import { Canvas } from '@threlte/core'
    import Scene1 from '$lib/scenes/scene.svelte';
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
            <Scene1/>
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
        height: 100vh;
        width: 100vw;
        background-color: #161616;
    }
    .sidebar{
        background-color: #1a1a1a;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 0px;
        max-width: 6vw;
        height: 100vh;
        z-index: 2;
        transition: .3s ease-in-out;
    }
    .sidebar:hover{
        max-width: 11vw;
    }
    
    main {
        background-color:#121212;
        max-width: 100vw;
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