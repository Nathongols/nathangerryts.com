<script>
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte';
    import { _visible } from '../../pageHandler.js'

    let visible = 0;

    _visible.subscribe(value => {
        visible = value;
    });

</script>
{#if visible == 1}
    <div class = "wrap">
        <div class="about" in:fly="{{y:200, duration:1000}}" out:fly="{{y:200, duration:1000, delay:200}}"
        on:outrostart="{() => _visible.set(0)}"
        on:outroend="{() => _visible.set(1)}">
            <h2>About
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
                </p>
            </h2>
        </div>
        <div class="education" in:fly="{{y:200, duration:1000, delay:200}}" out:fly="{{y:200, duration:1000}}">
            <h2>Education
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus reprehenderit totam consequatur est facere nulla reiciendis voluptatem recusandae nisi, aspernatur eveniet repellat obcaecati perspiciatis tempora veritatis vel. Eligendi, architecto!
                </p>
            </h2>
        </div>
    </div>
{/if}

<style>
    .wrap {
        display: flex;
        margin-left: 3%;
    }
    .about {
        position: relative;
        top:auto;
        display: flex;
        margin: 20px auto;
        min-width: 40vw;
        min-height: 1vh;
        max-width: 40vw;
        max-height: 17vh;
        border-radius: 30px;
        z-index: 2;
        background-color: #111111;
    }
    h2{
        margin: 20px auto;
        margin-left: 20px;
        margin-right: 20px;
        text-align: left;
        font-size: 1.5vw;
    }
    p {
        margin: 10px auto;
        text-align: left;
        font-size: 0.8vw;
    }
    .education{
        position: relative;
        top: 200px;
        right: -3vw;
        display: flex;
        margin: 20px auto;
        min-width: 40vw;
        min-height: 1vh;
        max-width: 40vw;
        max-height: 17vh;
        border-radius: 30px;
        z-index: 2;
        background-color: #111111;
    }
</style>