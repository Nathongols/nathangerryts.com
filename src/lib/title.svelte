<script>
    let title = "Nathan Gerryts"
</script>


<div class="title">
    <h1 class="anim-typewriter">{title}</h1>
</div>

<style>
    .title {
        display:flex;
        max-width: 8vw;
    }
    .title h1 {
        margin-top: 10px;
        margin-left: 12px;
        margin-right: 20px;
        font-size: 100%;
        overflow: hidden;
        border-right: 2px solid #ff4c4cbf;
    }

    /* Animation */
    .anim-typewriter{
        animation: typewriter 4s steps(44) 1s 1 normal both,
        blinkTextCursor 600ms steps(44) infinite normal;
    }

    @keyframes typewriter{
        from{width: 0;}
        to{width: 24em;}
    }

    @keyframes blinkTextCursor{
        from{border-right-color: #ff4c4cbf;}
        to{border-right-color: transparent;}
    }
</style>