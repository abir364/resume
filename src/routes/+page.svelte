<script>
	// Dynamically import all images from $lib/images/tech
	const imageModules = import.meta.glob('$lib/images/tech/*.{svg,png,jpg,jpeg}', { eager: true });
	let logos = Object.values(imageModules)
		.map((mod) => mod.default)
		.filter(Boolean);
</script>

<svelte:head>
	<title>Abir's Portfolio</title>
	<meta name="description" content="Abir's Portfolio Homepage" />
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
	<h1 class="text-5xl font-extrabold text-ctp-lavender mb-4 drop-shadow-lg">Hi, I'm Abir 👋</h1>
	<p class="text-xl text-ctp-mauve mb-6 max-w-2xl">
		I'm a DevOps Engineer with experience in cloud infrastructure, DevOps, and security. I love
		building & deploying scalable web applications, automating deployments and implementing security
		and complicance standards for infrastructure.
	</p>
	<div class="carousel mt-8">
		<h1 class="text-4xl font-bold text-ctp-lavender mb-8 drop-shadow-lg">I have worked with</h1>
		<div class="track">
			{#each logos.concat(logos) as logo}
				<img src={logo} alt="logo" />
			{/each}
		</div>
	</div>
</div>

<style>
	.carousel {
		overflow: hidden;
		width: 100%;
	}

	.track {
		display: flex;
		width: max-content;
		animation: scroll 30s linear infinite;
	}

	.track img {
		height: 50px;
		margin: 0 2rem;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
