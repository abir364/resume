<script>
	import { resolve } from '$app/paths';
	import gmail from '$lib/images/gmail.svg';
	import linkedin from '$lib/images/linkedin.png';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me" />
</svelte:head>

<div class="flex flex-col gap-4">
	<h1 class="text-4xl text-ctp-pink font-extrabold">Contact Me</h1>

	<p class="text-ctp-text text-xl">
		Feel free to reach out to me via email at <a href="mailto:abirh364@gmail.com"
			><img class="w-[1.5rem] h-[1.5rem] object-contain" src={gmail} alt="email" /></a
		>
	</p>
	<p class="text-ctp-text text-xl">
		or connect with me on
		<a href="https://www.linkedin.com/in/abir-hossain-8b57b9174/"
			><img class="w-[1.5em] h-[1.5em] object-contain" src={linkedin} alt="LinkedIn" /></a
		>
	</p>
</div>

<style>
	p {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
</style>
