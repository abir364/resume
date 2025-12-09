<!-- <script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcomeFallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Abir's Resume" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcomeFallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->

<script>
	import Info from './Info.svelte';
	import Profile from './Profile.svelte';
	import Experience from './Experience.svelte';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Abir's Resume" />
</svelte:head>

<div class="flex flex-col item-center w-[80%] gap-4 mx-auto my-4">
	<Info />

	<Profile />

	<Experience />

	<div>
		<h3 class="text-ctp-pink text-3xl font-bold pb-2">Education</h3>
	</div>
	<div>
		<h3 class="text-ctp-pink text-3xl font-bold pb-2">Projects</h3>
	</div>
	<div>
		<h3 class="text-ctp-pink text-3xl font-bold pb-2">Certifications</h3>
	</div>
	<div>
		<h3 class="text-ctp-pink text-3xl font-bold pb-2">Skills</h3>
	</div>
</div>

<style>
</style>
