import { makeAutoObservable } from 'mobx';

export default class User {
  count: number;
  constructor() {
    /**
     * state
     */
    this.count = 0; // 登录凭证count

    makeAutoObservable(this);
  }

  /**
   * action
   */
  add() {
    this.count++;
  }
}
