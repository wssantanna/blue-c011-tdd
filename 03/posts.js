async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();
    
    return posts;
}

module.exports = getPosts;