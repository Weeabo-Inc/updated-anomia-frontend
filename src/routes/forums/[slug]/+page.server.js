import { error } from '@sveltejs/kit';
import { url } from './../../../stores/url.js';
 
/** @type {import('../category/[slug]/$types').PageServerLoad} */
export async function load({ params }) {
  const threads = await fetch(`${url}/forums/categories/${params.slug}`);
  let data = await threads.json()
    
  if (threads) {
    console.log(data)
    return data;
  }
 
  throw error(404, 'Not found');
}