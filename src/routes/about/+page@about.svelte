<script>
    import { fly } from 'svelte/transition'
</script>

<div class="about">
    <h2>About</h2>
    <p transition:fly="{{x:100, y : 200, duration: 2000 }}">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
    </p>
</div>

<style>
    .about {
        text-align: center;
        display: block;
        margin: 20px auto;
    }
</style>