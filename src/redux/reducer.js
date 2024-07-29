import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogs: [],
  count: 0
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.count += 1;
      state.blogs.push({
        id: state.count, 
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    updateBlog: (state, action) => {
      const { id, title, content } = action.payload;
      const existingBlog = state.blogs.find(blog => blog.id === id);
      if (existingBlog) {
        existingBlog.title = title;
        existingBlog.content = content;
      }
    },
    deleteBlog: (state, action) => {
      state.blogs = state.blogs.filter(blog => blog.id !== action.payload);
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
      state.count = action.payload.length;
    },
  },
});

export const { addBlog, updateBlog, deleteBlog, setBlogs } = blogSlice.actions;

export default blogSlice.reducer;
