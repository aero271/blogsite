import { API_KEY, CMS_HOST } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let baseUrl = CMS_HOST + '/api/';
    let response = await fetch(baseUrl + 'articles?populate=*', {
        headers: { 'Authorization': `bearer ${API_KEY}`}
    });
    const articles = await response.json();

    for (let a of articles.data) {
        a.date = new Date(a.publishedAt);
    }
    articles.data.sort((a, b) => {
        if (a.date.valueOf() > b.date.valueOf()) return -1;
        else return 1;
    });

    return { articles };
};
