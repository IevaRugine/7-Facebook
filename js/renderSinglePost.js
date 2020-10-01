import renderHeader from './renderHeader.js';

function renderSinglePost(data) {
    
//console.log(data);

    //Validacija

    //Logika
  
    return `<div class="post">
    ${renderHeader(data.author, data.postTimestamp)}

</div>`;
    
}

export default renderSinglePost;