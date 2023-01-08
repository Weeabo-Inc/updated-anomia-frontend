<script>
    export let websiteURL = "";
    export let websiteImage = "";
    export let username = "";
    export let id = ""
    export let websiteName = "";
</script>
<div class="flex gap-1 border shadow rounded justify-between p-2 items-center">
    <img src="{websiteImage}" class="w-16 h-16 rounded-full bg-gradient-to-tr from-red-600 to-blue-600 p-0.5" alt="">
    <div>
        <div class="font-bold">{websiteName}</div>
        <div class="">Username: <span class="italic">{username}</span></div>
        <div class="">Id: <span class="italic">{id}</span></div>
    </div>
    <a href="{websiteURL}"><div class="bg-blue-500 text-white p-2 rounded-sm">Visit Profile</div></a>
</div>