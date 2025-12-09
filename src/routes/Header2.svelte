<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github-mark-white.svg';
</script>

<header
	class="flex space-between justify-between items-center font-semibold sticky mt-4 mb-4 bg-ctp-base text-ctp-mauve text-2xl border-ctp-mauve shadow-lg shadow-ctp-mauve/30 pb-2"
>
	<div class="corner ml-4 font-extrabold">
		<a class="flex justify-center items-center text-4xl" href={resolve('/')}> Resume </a>
	</div>
	<nav class="text-xl">
		<ul class="flex space-between justify-around gap-6">
			<li aria-current={page.url.pathname === '/' ? 'page' : undefined}>
				<a href={resolve('/')}>Home</a>
			</li>
			<li aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
				<a href={resolve('/about')}>About</a>
			</li>
			<li aria-current={page.url.pathname === '/projects' ? 'page' : undefined}>
				<a href={resolve('/projects')}>Projects</a>
			</li>
			<li aria-current={page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href={resolve('/contact')}>Contact</a>
			</li>
		</ul>
	</nav>
	<div class="corner mr-4">
		<a href="https://github.com/abir364">
			<img class="w-[1.5em] h-[1.5em] object-contain" src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	a {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
</style>
