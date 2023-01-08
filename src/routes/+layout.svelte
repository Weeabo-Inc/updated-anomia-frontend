<script>
    import { user } from "./../stores/user";
    import { slide, fade } from "svelte/transition";
    import "../app.css";
    import { goto } from "$app/navigation";
    import { url } from "./../stores/url";
    slide;
    let menuVisibility = false;
    async function logout() {

      const res = await fetch(`${url}/user/logout`, {
        method: "POST",
        credentials: "include",
        headers: {
          credentials: "same-origin",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      user.set({
        id: 0,
        username: "",
        verified: false,
        isAdmin: false,
        isBanned: false,
        streak: 0,
      });
      goto("/");
    }
  </script>
  
  <svelte:head>
    <title>Anomia</title>
    <meta name="description" content="Anomia is the epicenter of the SBC." />
  </svelte:head>
<div class="fixed  h-screen w-screen overflow-scroll">
  

  <div class="bg-black text-white ">
    <div class="flex gap-2 items-center justify-between  mx-12 z-40" >
      <div class="text-center text-4xl font-light md:text-center md:mx-12">ANOMIA</div>

      <div class="hidden md:block mx-12 flex gap-2 ">
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
      <div class="flex justify-center md:hidden">
        <button
          on:click={() => {
            menuVisibility = !menuVisibility;
          }}
          class="transition-all md:hidden {menuVisibility ? 'rotate-0' : 'rotate-90'}"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="h-6 w-6 stroke-2 align-object-top"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="hidden md:block">
      <div class="bg-zinc-800 p-1 flex justify-center gap-2">
        <a href="/"><div>Homepage</div></a>
      </div>
    </div>
  
    {#if !menuVisibility}
      <div transition:slide class="bg-black bg-opacity-50 absolute w-full md:hidden">
        <div class="text-xl mx-1">MENU</div>
        <div class="mx-3 border-l px-1"><a href="/">Homepage</a></div>
        <div class=" mx-3 border-l px-1 hover:underline"><a href="/forums">Forums</a></div>
        <div class=" mx-3 border-l px-1"><a href="/news">News</a></div>
        {#if $user.id != 0}
        <div class=" mx-3 border-l px-1"><a href="/profile/me">Profile</a></div>
  {/if}
        <div class="mt-5 mx-3 pb-2 flex items-center justify-between  p-1">
          <div class=""> 
          
          </div>

          {#if $user.id != 0}
          <div class="text-sm text-center ">
            <div class="p-0.5 border-white border bg-white text-black font-bold" on:click={() => logout()}>LOGOUT</div>
          </div>
          {/if}
          
          <div class="flex items-center gap-1 ">
            {#if $user.id == 0}
          Log In <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
          </svg>
          {/if}
          <a href="{$user.id != 0 ? "/settings" : "/login"}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke=""
              class="h-7 w-7 stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
        </div>
        </div>
      </div>
    {/if}
  </div>
  <slot />
</div>
  <!--
  <div class="bg-black p-1">
    <div class="mx-20 text-white items-center p-1 text-sm flex justify-end">
      {#if $user.id != 0}
        <div class="flex items-center gap-2">
          <a href="/profile/me">
            <div class="">Welcome, {$user.username}</div>
          </a>
          <div on:click={() => logout()} class="cursor-pointer hover:underline">
            Logout
          </div>
        </div>
      {:else}
        <div class="flex items-center gap-2">
          <a href="/login"> <div class="">Login</div> </a>
          <a href="/register">
            <div class="bg-[#7ba60d] py-[3px] px-[8px]">Register</div>
          </a>
        </div>
      {/if}
    </div>
  </div>
  <div class="p-6 bg-gradient-to-t from-blue-900 to-blue-300 flex items-center gap-2">
    <div class="text-6xl font-serif font-bold">ANOMIA</div>
    <div class="w-[300px] font-bold text-lg whitespace-pre-line">
      The Sandbox Community Hub
      A Private den of programmers.
    </div>
  </div>
  <div class=" bg-blue-900">
    <div class="navbar">
      <a href="/"> <div class="">Homepage</div> </a>
      <a href="/news"> <div class="">News</div> </a>
      <a href="/forums"> <div class="">Forums</div> </a>
      <a href="/sandboxes"> <div class="">Sandboxes</div> </a>
      <a href="https://discord.gg/JVpFdV8Knp" target="_blank">
        <div class="">Discord Server</div>
      </a>
    </div>
  </div>
  -->
  <!--<div class="navbar">
    <div class="navbar-section">
      <div class="navbar-brand">ANOMIA</div>
      <a href="/"> <div class="">Homepage</div> </a>
  
      <a href="/news"> <div class="">News</div> </a>
  
      <a href="/forums"> <div class="">Forums</div> </a>
  
      <a href="/sandboxes"> <div class="">Sandboxes</div> </a>
      <a href="https://discord.gg/JVpFdV8Knp" target="_blank">
        <div class="">Discord Server</div>
      </a>
    </div>
    {#if $user.id != 0}
      <div class="navbar-section">
        <div class="mr-5 ">
          Welcome, <a href="/profile/me" class="font-bold">{$user.username}</a>
        </div>
        <div on:click={() => logout()} class="cursor-pointer hover:underline">
          Logout
        </div>
      </div>
    {:else}
      <div class="navbar-section">
        <a href="/login"> <div class="">Login</div> </a>
        <a href="/register"> <div class="bg-green-500 p-1">Register</div> </a>
      </div>
    {/if}
  </div>
  
  <slot />
  -->
  