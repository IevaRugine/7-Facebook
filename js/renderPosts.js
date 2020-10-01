import renderSinglePost from './renderSinglePost.js';

function renderPosts(data) {

// Validacija


// Logika

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const post = data[i];
        HTML += renderSinglePost(post);

    }
//  // reikiamo elemento paieska realiam HTML'e
const feedDOM = document.querySelector('main');

// //  // perrasome reikiamo HTML elemento turini
feedDOM.innerHTML = HTML;

}
// document.querySelector ('')
export default renderPosts;