const request = require('request');
const urljoin = require('url-join');

const url = 'http://www.youtube.com';

function findBetween(value, first, last) {
    return value.substring(
        value.lastIndexOf(first) + first.length,
        value.lastIndexOf(last)
    );
}

const response = request(url, (error, res) => {

    const html = res.body;

    let open_tag = false;
    const img_list = new Set();

    for (const word of html.split(' ')) {
        if (word.includes('<img')) {
            open_tag = true;
        }

        if (open_tag && word.includes('src')) {
            open_tag = false;
            let img_url = findBetween(word, 'src="', '"');

            if (!img_url.includes('http')) {
                img_url = urljoin(url, img_url);
            }

            img_list.add(img_url);
        }
    }

    console.log([...img_list]);
});