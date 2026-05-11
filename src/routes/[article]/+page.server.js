import { API_KEY, CMS_HOST } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    let searchParams = new URLSearchParams({ populate: "*" });
    let baseUrl = CMS_HOST + `/api/articles/${ params.article }?${searchParams.toString()}`;
    let response = await fetch(baseUrl + ``, {
        headers: { 'Authorization': `bearer ${API_KEY}`}
    });
    const article = await response.json();
    article.data.date = new Date(article.data.publishedAt);
    console.log(article)

    return { article };
};