
const initState = {
  posts : [
    {id:1, title:'Blah', body:'this is a body1'},
    {id:2, title:'Ugh', body:'this is a body2'},
    {id:3, title:'Meh', body:'this is a body3'}
  ]
}

const rootReducer = (state=initState, action) => {
    if(action.type === 'DELETE_POST'){
      let newPosts = state.posts.filter(post => post.id !== action.id)
      return { ...state, posts: newPosts}
    }
    return state;


}

export default rootReducer
