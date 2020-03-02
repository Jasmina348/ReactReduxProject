
export const fetchPosts = () => {
    console.log(" Services fetching");

    return fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => posts
        );

};
export const addPost = (postData) => {
    console.log(" services action called")

    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(post => post);
}

export const postsServices = {
    fetchPosts, addPost
};