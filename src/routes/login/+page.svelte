<script>
	// Normal Data
	let username = '';
	let password = '';

	let body = '';

	// Import stuff!
	import { url } from './../../stores/url';
	import { user } from './../../stores/user';
	import { goto } from '$app/navigation';

	let error = '';

	const handleSubmit = async (/** @type {{ preventDefault: () => void; }} */ e) => {
		console.log('Logging in...');
		e.preventDefault();
		if (username && password) {
			console.log(`actually fetching....`);
			try {
				const res = await fetch(url + '/user/login', {
					method: 'POST',
					credentials: 'include',
					headers: {
						credentials: 'same-origin',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						username,
						password
					})
				});
				const data = await res.json();
				error = data.message;
				if (data.user == undefined) {
					error = 'Account not found!';
				} else {
					user.set(data.user);
					body = 'Welcome back, ' + data.user.username + '!';
					goto('/profile/me');
				}
			} catch (err) {
				error = err.message;
			}
		} else {
			error = 'Please fill out all fields!';
		}
	};
</script>

<div class="fixed w-full flex justify-center items-center h-screen">
	<div class="w-full md:w-2/6  py-5 px-2 mx-auto">
		<div class="text-2xl text-center ">LOGIN</div>
		<div class="text-lg">Username</div>
		<input
			bind:value={username}
			type="text"
			placeholder="Shigetorum420, Arucik69, Damiru1337x, etc.."
			class="px-2 py-0.5 w-full outline-none bg-transparent border "
		/>
		<div class="mt-2 text-lg">Password</div>
		<input
			bind:value={password}
			type="password"
			placeholder="8 Characters long or more"
			class="px-2 py-0.5 outline-none bg-transparent border w-full"
		/>
		<div class="flex items-center gap-2">
			<div class=" mt-2 border w-max px-2 py-0.5 cursor-pointer" on:click={handleSubmit}>Login</div>
			<div
				class=" mt-2 border w-max px-2 py-0.5 cursor-pointer bg-black text-white"
				on:click={() => goto('/register')}
			>
				New to Anomia?
			</div>
		</div>
		{#if error != ''}
			<div class="text-center text-red-500">ERROR: {error}</div>
		{/if}
	</div>
</div>
