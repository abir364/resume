<script>
    import logo from '$lib/images/svelte-logo.svg';
    import github from '$lib/images/github.svg';
</script>

<header>
    <div>
        <div class="corner">
            <a href="/">
                <img src={logo} alt="SvelteKit" />
                <h1>Resume</h1>
            </a>
        </div>
        <div class="Menu">Menu</div>
        <div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>
    </div>
</header>


<style>
    header {
		display: flex;
		justify-content: space-between;
        background-color: #11111b;
        color: #f5c2e7;
        height: 10%;
	}

    .corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

</style>