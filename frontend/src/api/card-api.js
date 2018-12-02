import * as authApi from "./auth-api";

const CardApi = {
  ...authApi.api,
  createCard({ userId, name }) {
    return fetch("/api/card/", {
      method: "POST",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify({ userId, name })
    });
  },
  updateCard(card) {
    return fetch(`/api/card/${card.id}`, {
      method: "PUT",
      headers: authApi.authHeaders(this.authInfo),
      body: JSON.stringify(card)
    });
  },
  deleteCard(id) {
    return fetch(`/api/card/${id}`, {
      method: "DELETE",
      headers: authApi.authHeaders(this.authInfo)
    });
  }
};

export default CardApi;
