const url = "https://rexplore-backend.blogspot.com/feeds/posts/default/-/ZZZZZZZZZ?alt=json";
const { JSDOM } = require("jsdom");

async function getPosts() {
    let titles = [];
    let images = [];
    let categories = [];
    let links = [];

    try {
        const response = await fetch(url);
        const data = (await response.json())['feed']['entry'];
        data.forEach(post => {
            post['category'].forEach(cat => {
                if (cat['term'] !== 'ZZZZZZZZZ' && !categories.includes(cat['term'])) {
                    categories.push(cat['term'] ? cat['term'] : 'Category Not Found');
                    console.log('Post:', post['title']['$t']);
                }
            });
            titles.push(post['title']['$t'] ? post['title']['$t'] : 'Title Not Found');
            const altLink = post['link'].find(link => link['rel'] === 'alternate');
            if (altLink) links.push(altLink['href'] ? altLink['href'] : 'Link Not Found');
            const content = post['content']['$t'];
            const dom = new JSDOM(content);
            const imgElement = dom.window.document.querySelector('#paper_image');
            if (imgElement) {
                images.push(imgElement.src ? imgElement.src : "https://i.ibb.co/TBJqggw/Image-Not-Found.jpg");
            } else {
                console.warn(`No image found in post: ${post['title']['$t']}`);
            }
        });
        data = {
            "titles": titles,
            "images": images,
            "categories": categories,
            "links": links
        }
        return data;
    } catch (error) {
        data = {
            "titles": [error],
            "images": ["https://i.ibb.co/TBJqggw/Image-Not-Found.jpg"],
            "categories": [error],
            "links": [error]
        }
    }
}

(async () => {
    const data = await getPosts();
    console.log(data);
})();