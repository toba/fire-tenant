import * as React from "react";
import { Status } from "modules/actions";
import { State, StateStore, flux } from "lib/state/hub";

export interface UserState extends State {
   notifications:string[];
   /** Whether user is signed in. */
   signedIn:boolean;
   fullName?:string;
   photoURL?:string;
   status:Status;
}

/**
 * State for current user.
 */
class Store extends StateStore<UserState> {
   constructor() {
      super({
         notifications: [] as string[],
         signedIn: false,
         status: null
      });
   }
}

export const userStore = flux.subscribe(new Store());