import { makeAutoObservable } from "mobx";

export default class User {
  ticket: string;
  constructor() {
    /**
     * state
     */
    this.ticket = ""; // 登录凭证ticket

    makeAutoObservable(this);
  }

  /**
   * computed
   */
  get isLogin() {
    return !!this.ticket;
  }

  /**
   * action
   */
  setTicket(val: string) {
    this.ticket = val || "";
  }
}
