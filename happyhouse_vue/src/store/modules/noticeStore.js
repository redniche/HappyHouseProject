import http from "@/util/http-common.js";
export default {
  state: {
    noticelist: [],
    notice: {},
  },
  getters: {
    noticelist(state) {
      return state.noticelist;
    },
    notice(state) {
      return state.notice;
    },
  },
  mutations: {
    SET_NOTICE_LIST(state, payload) {
      state.noticelist = payload;
    },
    SET_NOTICE(state, payload) {
      state.notice = payload;
    },
  },
  actions: {
    getNoticeList({ commit }) {
      http
        .get("/notice")
        .then((response) => commit("SET_NOTICE_LIST", response.data))
        .catch(() => {
          alert("공지목록조회 중 오류 발생!!!!");
        });
    },
    getNotice({ commit }, payload) {
      http
        .get(`/notice/${payload}`)
        .then((response) => commit("SET_NOTICE", response.data))
        .catch(() => {
          alert("공지조회 중 오류 발생!!!!");
        });
    },
  },
};
