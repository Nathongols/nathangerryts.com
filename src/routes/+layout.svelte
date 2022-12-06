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
        justify-content: left;
        background-color: #f5efe6;
        border-bottom-right-radius: 20px;
        max-width: 250px;
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