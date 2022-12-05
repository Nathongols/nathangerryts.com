<script lang="ts">
    import Title from '$lib/title.svelte'
    import '../styles/global.css'
</script>
 
<header>
    <Title />
</header>

<main>
    <!-- page content -->
    <slot></slot>
</main>

<footer>
    <p></p>
</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px;
    }
    footer {
        text-align: center;
    }
</style>