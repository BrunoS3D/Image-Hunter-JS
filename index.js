const request = require('request');
const urljoin = require('url-join');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira a URL aqui: ', (url) => {

    function findBetween(value, first, last) {
        return value.substring(
            value.lastIndexOf(first) + first.length,
            value.lastIndexOf(last)
        );
    }

    request(url, (error, res) => {
        if (error) throw error;

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

    rl.close();
});