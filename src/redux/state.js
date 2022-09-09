let state = {
    profilePage: {
        postData: [
            {id: 1, message: 'Hi, how are yoy', Like: 15, DisLike: 125},
            {id: 2, message: 'It`s my first post', Like: 20, DisLike: 3},
            {id: 3, message: 'It`s my second post', Like: 11, DisLike: 13},
            {id: 4, message: 'This is my third post', Like: 56, DisLike: 73}
        ]
    },
    messagesPage: {
        dialogsData: [
            {id: 1, name: 'Alex'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Svetlana'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messagesData: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you, Alex?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!'},
            {id: 5, message: 'Yo!'}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        Like: 0,
        DisLike: 0
    }
    state.profilePage.postData.push(newPost);
};


export default state;