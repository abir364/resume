<script>
	import Info from './Info.svelte';
	import Profile from './Profile.svelte';
	import Experience from './Experience.svelte';
	import Education from './Education.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import Certifications from './Certifications.svelte';
</script>

<svelte:head>
	<title>Resume</title>
	<meta name="description" content="Abir's Resume" />
</svelte:head>

<div class="flex flex-col item-center w-[80%] gap-4 mx-auto my-4">
	<Info />

	<Profile />

	<Experience />

	<Education />

	<Projects />

	<Skills />

	<Certifications />
</div>

<style>
</style>
