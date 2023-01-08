<script>
	// @ts-nocheck

	import { user } from './../../../stores/user';
	import WebsiteList from './../../../components/websiteList.svelte';
	let visible = false;
</script>

<div class="h-48 border-b-4 border-black">
	<img
		src=" https://s03.s3c.es/imag/_v0/700x420/6/0/3/490x_espana-bandera-rating-700.jpg "
		class=" w-full h-full"
		alt=""
	/>
</div>
<div class=" flex gap-0.5 items-center ">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<img
		src="https://i.discogs.com/fWEgzMiy0vUystNcYdIYI_xZvFapa5fXdVyhP5idmRk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE4OTM3/MzI0LTE2MjIzMTc1/OTUtMTI1Mi5qcGVn.jpeg"
		alt="Profile Picture"
		class="h-32 object-cover absolute z-20 rounded-xl  w-32 w-full   border-black border-4 "
	/>
	<div
		class="items-center  justify-between flex font-bold  border-black border-y-4 -mt-2 ml-10 px-12 z-0 p-2 bg-white w-full text-left "
		on:click={() => (visible = !visible)}
	>
		<div class=" ml-12">{$user.username}</div>
		<div class="">290 Posts</div>
	</div>
</div>

<div class="mx-5 mt-16 p">
	<span class="font-bold">About Me</span>
	<div class="whitespace-pre-line text-base ">
		Indie game developer, CS Major. Worked with : C#, C++, HTML and JS DMs are open, however, for
		other inquiries, please contact me via. email at skooidsbusiness@gmail.com
	</div>
</div>
<div>
	<div class="text-center font-bold">ROLES</div>
	<div class="p-2 grid grid-cols-2 justify-items-center items-center gap-1 overflow-scroll snap-x">
		<div class="snap-center w-32"><img src="/core_square.png" class="h-10 mx-auto  " alt="" /></div>
		<div class="snap-center w-32"><img src="/square_donator.png" class="h-10 mx-auto  " alt="" /></div>
		<div class="snap-center w-32"><img src="/exclusive_square.png" class="h-10 mx-auto  " alt="" /></div>
		<div class="snap-center w-32"><img src="/square_staff.png" class="h-10 mx-auto  " alt="" /></div>
		<div class="snap-center w-32"><img src="/aurick.png" class="h-10 mx-auto  " alt="" /></div>
	</div>
</div>

<div class="my-2 mx-5">
	<WebsiteList />
</div>

<style>
	.p {
		position: relative;
		max-width: 30em;

		background-color: #d9c5b2;
		padding: 1.125em 1.5em;
		font-size: 1.25em;
		border-radius: 0;
	}

	.p::before {
		content: '';
		position: absolute;
		width: 0;
		height: 0;
		bottom: 100%;
		left: 1.2em;
		border: 0.75rem solid transparent;
		border-top: none;

		border-bottom-color: #d9c5b2;
	}
</style>
