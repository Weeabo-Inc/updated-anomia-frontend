<script>
	import { onMount } from "svelte";
    let categories = [];
    import {url} from "./../../stores/url"

    const getCategories = async () => {
        const res = await fetch(`${url}/forums/categories`)
        const data = await res.json()
        categories = data.categories
    }

    onMount(() => {
        getCategories()
    })
</script>
<div class="p-2">
    <div class="font-bold border-b-2 mx-2 border-black">Forums</div>
    <div class="mx-2">    What is the forum?
    </div>
    <div class="text-sm mx-2 text-justify text-gray-600 font-light">
       The Forum board allows Anomia users to hold discussion in form of posted messages. If a user is moderated, their messages will require more review than others. This board holds very basic rules; Keep the topic to it's category, do not farm posts (making meaningless, poorly written and unnecesary posts) and finally, dont disrupt the community for no reson.
    </div>
   
    <div class="grid mx-2 grid-cols-1 gap-2">
        {#each categories as category}
        <div class="w-full h-40 border rounded shadow">
            <div class="font-bold border-b-2 mx-2 border-black">{category.name}</div>
            <div class="text-sm mx-2 text-left text-gray-600 font-light">
{category.description}            </div>
           <a href="forums/{category.id}"> <div class="bg-blue-500 mx-auto mt-10 text-center  w-2/4 text-white p-2 rounded-sm">View</div>
           </a>   </div>
        {/each}
    </div>

</div>