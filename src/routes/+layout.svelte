<script>
	import Header from './Header.svelte';
	import './layout.css';
	import resume from '$lib/files/AbirHossainResume.pdf';

	let { children } = $props();
</script>

<div class="app bg-ctp-base text-ctp-text">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<p>
			<a
				href={resume}
				download
				class="inline-block px-4 py-2 bg-ctp-red text-ctp-rosewater-50 rounded font-bold shadow hover:bg-ctp-mauve hover:text-ctp-rosewater-50 focus:bg-ctp-green focus:text-ctp-rosewater-50 transition-colors duration-200"
			>
				Download my resume
			</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
