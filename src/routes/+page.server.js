import { API_KEY, CMS_HOST } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let baseUrl = CMS_HOST + '/api/';
    let response = await fetch(baseUrl + 'articles', {
        headers: { 'Authorization': `bearer ${API_KEY}`}
    });
    const articles = await response.json();

    return { articles };
};