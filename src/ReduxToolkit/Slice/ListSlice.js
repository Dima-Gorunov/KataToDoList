import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice({
  name: 'ListSlice',
  initialState: {
    inputText: '',
    ShowLists: [],
    Lists: [],
    Filter: [
      { text: 'All', active: true },
      { text: 'Active', active: false },
      { text: 'Completed', active: false },
    ],
    ItemLeft: 0,
  },
  reducers: {
    setInputText(state, { payload }) {
      state.inputText = payload;
    },

    setItemLeft(state, { payload }) {
      state.ItemLeft = state.Lists.filter((list) => list.completed === false).length;
    },

    addList(state, { payload }) {
      state.Lists.push(payload);
    },

    updateShowLists(state, { payload }) {
      const foundObject = state.Filter.find((obj) => obj.active === true);
      const filter = foundObject.text;
      if (filter === 'All') {
        state.ShowLists = state.Lists;
      }
      if (filter === 'Active') {
        state.ShowLists = state.Lists.filter((list) => list.completed === false);
      }
      if (filter === 'Completed') {
        state.ShowLists = state.Lists.filter((list) => list.completed === true);
      }
    },

    setComplete(state, { payload }) {
      const { completed, id } = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        state.Lists[index].completed = completed;
      }
    },

    deleteList(state, { payload }) {
      const id = payload;
      state.Lists = state.Lists.filter((list) => list.id !== id);
    },

    setEditing(state, { payload }) {
      const { editing, id } = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        state.Lists[index].editing = editing;
      }
    },

    confirmEditing(state, { payload }) {
      const id = payload;
      state.Lists = state.Lists.map((list) => {
        if (list.id === id) {
          list.editing = false;
        }
        return list;
      });
    },

    changeEditingList(state, { payload }) {
      const { id, text } = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        state.Lists[index].text = text;
      }
    },

    setFilter(state, { payload }) {
      const text = payload;
      state.Filter = state.Filter.map((item) => {
        if (item.active) {
          item.active = false;
        }
        return item;
      });
      state.Filter = state.Filter.map((item) => {
        if (item.text === text) {
          item.active = true;
        }
        return item;
      });
    },
    clearCompleted(state, { payload }) {
      state.Lists = state.Lists.filter((list) => !list.completed);
    },
  },
});

export const setInputTextThunk = (text) => {
  return async (dispatch) => {
    try {
      dispatch(setInputText(text));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export const addListThunk = (List) => {
  return async (dispatch) => {
    try {
      const text = List.text.trim();
      if (!text) {
        throw new SyntaxError('пустая строка');
      }
      dispatch(addList(List));
      dispatch(setInputText(''));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setCompleteThunk = (completed, id) => {
  return async (dispatch) => {
    try {
      dispatch(setComplete({ completed, id }));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export const deleteListThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteList(id));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export const setEditingThunk = (editing, id) => {
  return async (dispatch) => {
    try {
      dispatch(setEditing({ editing, id }));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export const confirmEditingThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(confirmEditing(id));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export const setFilterThunk = (text) => {
  return async (dispatch) => {
    try {
      dispatch(setFilter(text));
    } catch (e) {
      console.log(e.response?.data?.message || 'error');
    }
  };
};

export default ListSlice.reducer;

export const {
  setInputText,
  addList,
  setComplete,
  deleteList,
  setEditing,
  changeEditingList,
  confirmEditing,
  setFilter,
  updateShowLists,
  setItemLeft,
  clearCompleted,
} = ListSlice.actions;
