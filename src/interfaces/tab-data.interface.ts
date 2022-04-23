import { AuthActions } from "../enums/auth-actions.enum";

export interface TabData {
  action: AuthActions;
  title: string;
  component: any;
}
