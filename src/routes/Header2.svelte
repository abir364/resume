<script>
    import logo from '$lib/images/svelte-logo.svg';
    import github from '$lib/images/github-mark-white.svg';
</script>

<header class="flex items-center justify-around font-semibold text-white sticky top-0 bg-ctp-base">
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
			Resume
		</a>
	</div>
	<nav class="flex space-between items-center">
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/projects">Projects</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
	<div class="corner">
		<a href="https://github.com/abir364">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>


<style>
    /* header {
		display: flex;
		justify-content: space-between;
        background-color: #11111b;
        color: #f5c2e7;
        height: 10%;
	} */

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
		text-decoration: none;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

</style>