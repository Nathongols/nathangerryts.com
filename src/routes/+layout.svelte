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
    .canvas-wrapper {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: calc(100vw - 11vw); /* Adjusted to account for sidebar */
        background-color: #161616;
    }
    .sidebar {
        background-color: #1a1a1a;
        box-sizing: border-box;
        margin-top: 0;
        width: 12vw;
        height: 100vh;
        z-index: 2;
        min-width: 12vw;
    }
    main {
        background-color: #121212;
        width: 100vw;
        height: 100vh;
        display: flex;
        margin: 0;
        overflow: hidden;
    }


</style>

