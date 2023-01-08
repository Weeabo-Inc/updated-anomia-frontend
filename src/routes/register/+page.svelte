<script>
    import { url } from "./../../stores/url";
  let username = ""
  let password = ""
  let password_2 = ""
  let email = ""
  let error = ""
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  
  </script>
  

  <div class="fixed w-full flex justify-center items-center h-screen">
    <div class="w-full md:w-2/6  py-5 px-2 mx-auto">
      <div class="text-2xl text-center ">Register</div>
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
      <input
      bind:value={password_2}
      type="password"
      placeholder="Repeat password."
      class="px-2 py-0.5 outline-none bg-transparent border w-full"
    />
    <div class="mt-2 text-lg">E-Mail (Optional)</div>
    <input
    bind:value={email}
    type="email"
    placeholder="E-Mail"
    class="px-2 py-0.5 w-full outline-none bg-transparent border "
  />

      <div class="flex items-center gap-2">
        <div class=" mt-2 border w-max px-2 py-0.5 cursor-pointer">Login</div>
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
