import { createSlice } from '@reduxjs/toolkit';

const ListSlice = createSlice({
  name: 'ListSlice',
  initialState: {
    InputText: '',
    InputMin: '',
    InputSec: '',
    Minutes: 1,
    Seconds: 1,
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
      state.InputText = payload;
    },

    setInputMin(state, { payload }) {
      const text = payload.replace(/\D/g, '');
      state.InputMin = text;
    },

    setInputSec(state, { payload }) {
      const text = payload.replace(/\D/g, '');
      state.InputSec = text;
    },

    setTimerOnOrOf(state, { payload }) {
      const { id, value } = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        state.Lists[index].timerOnOrOf = value;
      }
    },

    incrementSeconds(state, { payload }) {
      const id = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        if (state.Lists[index].seconds <= 59) {
          state.Lists[index].seconds++;
        } else {
          state.Lists[index].minutes++;
          state.Lists[index].seconds = 0;
        }
      }
    },

    decrementSeconds(state, { payload }) {
      const id = payload;
      const index = state.Lists.findIndex((list) => list.id === id);
      if (index !== -1) {
        if (state.Lists[index].seconds > 0) {
          state.Lists[index].seconds--;
        } else if (state.Lists[index].minutes > 0) {
          state.Lists[index].minutes--;
          state.Lists[index].seconds = 59;
        }
      }
    },

    setItemLeft(state, { payload }) {
      state.ItemLeft = state.Lists?.filter((list) => list.completed === false).length;
    },

    setAllLists(state, { payload }) {
      const Lists = payload || [];
      state.Lists = Lists;
    },

    addList(state, { payload }) {
      const { minutes, seconds } = payload;
      if (minutes + seconds === 0) {
        payload.inc = true;
      }
      state.Lists.push(payload);
    },

    setLocalStorage(state, { payload }) {
      localStorage.setItem('Lists', JSON.stringify(state.Lists));
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
        state.Lists[index].timerOnOrOf = false;
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

export const setLocalStorageListsThunk = () => {
  return async (dispatch) => {
    try {
      dispatch(setLocalStorage());
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const getLocalStorageListsThunk = () => {
  return async (dispatch) => {
    try {
      const Lists = JSON.parse(localStorage.getItem('Lists'));
      dispatch(setAllLists(Lists));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const decrementSecondsThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(decrementSeconds(id));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const incrementSecondsThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(incrementSeconds(id));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setTimerOnOrOfThunk = (id, value) => {
  return async (dispatch) => {
    try {
      dispatch(setTimerOnOrOf({ id, value }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setInputTextThunk = (text) => {
  return async (dispatch) => {
    try {
      dispatch(setInputText(text));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const addListThunk = (List) => {
  return async (dispatch) => {
    try {
      const text = List.text.trim();
      const { minutes, seconds } = List;
      if (!text) {
        throw new SyntaxError('пустая строка');
      }
      if (minutes > 59 || seconds > 59) {
        throw new SyntaxError('(Min, Sec) - значения не больше 59');
      }
      dispatch(addList(List));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
      alert(e.response?.data?.message || e.message || 'error');
    } finally {
      dispatch(setInputText(''));
      dispatch(setInputMin(''));
      dispatch(setInputSec(''));
    }
  };
};

export const setCompleteThunk = (completed, id) => {
  return async (dispatch) => {
    try {
      dispatch(setComplete({ completed, id }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const deleteListThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(deleteList(id));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setEditingThunk = (editing, id) => {
  return async (dispatch) => {
    try {
      dispatch(setEditing({ editing, id }));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const confirmEditingThunk = (id) => {
  return async (dispatch) => {
    try {
      dispatch(confirmEditing(id));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
    }
  };
};

export const setFilterThunk = (text) => {
  return async (dispatch) => {
    try {
      dispatch(setFilter(text));
    } catch (e) {
      console.log(e.response?.data?.message || e.message || 'error');
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
  decrementSeconds,
  setInputMin,
  setInputSec,
  setTimerOnOrOf,
  setLocalStorage,
  setAllLists,
  incrementSeconds,
} = ListSlice.actions;
