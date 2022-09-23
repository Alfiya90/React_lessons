
let dateBase ={
    profilePage:{
        postData:[
            {id:1, message:"Немного обо мне", likes:9 },
            {id:3, message:"Важней всего погода в доме?", likes:8 },
            {id:4, message:"Вкусный завтрак", likes:5}
        ]
    },

    messagePage:{
        dialogData:[
            {id:1, name:"Vladislav" },
            {id:2, name:"Aslan" },
            {id:3, name:"Damir"},
            {id:4, name:"Mama" },
            {id:5, name:"Ryzilya"}
        ],
        messageData:[
            {id:1, message:"Привет!Как дела?" },
            {id:3, message:"Мам, есть что нибудь вкусненькое?" },
            {id:4, message:"Ты где?" },
        ]
    }


}

 export let addPost=(postMessage) => {
    let newPost={
        id:6,
        message: postMessage,
        likes:0
        };
    dateBase.profilePage.postData.push(newPost);
    }

export let addMessage=(sendMessage)=>{
    let newMessage={
        id:6,
        message:sendMessage
    }
    dateBase.messagePage.messageData.push(newMessage)
}


export default dateBase;