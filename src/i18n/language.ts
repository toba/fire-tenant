import { PhraseList, Translation } from "./localize";
import { Status } from "../module/status";
import { Provider } from "../auth/provider";
import { OperatingSystem } from "../host/os";

export const statusPrefix = "MODULE_STATUS_";
export const authPrefix = "AUTH_";
export const osPrefix = "OS_";
export const phrases = {
   ABOUT: {
      en: "About"
   },
   [authPrefix + Provider.Amazon]: {
      en: "Amazon"
   },
   [authPrefix + Provider.Dropbox]: {
      en: "Dropbox"
   },
   [authPrefix + Provider.Facebook]: {
      en: "Facebook"
   },
   [authPrefix + Provider.Google]: {
      en: "Google"
   },
   BAD_ROUTE: {
      en: "Unable to navigate to $1"
   },
   CONTINUE: {
      en: "Continue"
   },
   DISCONNECTED: {
      en: "Connection to server lost"
   },
   DRAG_ONE_FILE_HERE: {
      en: "Drag your file here to upload it"
   },
   DRAG_FILES_HERE: {
      en: "Drag and drop one or more files here to upload them"
   },
   [osPrefix + OperatingSystem.Linux]: {
      en: "Linux"
   },
   [osPrefix + OperatingSystem.MacOS]: {
      en: "MacOS"
   },
   [osPrefix + OperatingSystem.Windows]: {
      en: "Windows"
   },
   RETRY: {
      en: "Retry now"
   },
   RETRYING: {
      en: "Retrying in $1s"
   },
   SIGN_IN: {
      en: "Sign In"
   },
   SIGN_IN_TO_CONTINUE: {
      en: "Sign in to continue"
   },
   [statusPrefix + Status.Okay]: {
      en: "Okay"
   },
   [statusPrefix + Status.IncompatiblePayload]: {
      en: "Incompatible Payload"
   },
   [statusPrefix + Status.EmptyPayload]: {
      en: "Empty Payload"
   },
   [statusPrefix + Status.UnableToParseRequest]: {
      en: "Unable to Parse Request"
   },
   [statusPrefix + Status.InvalidService]: {
      en: "Invalid Service"
   },
   [statusPrefix + Status.UnableToMarshalResponse]: {
      en: "Unable to convert response to JSON"
   },
   [statusPrefix + Status.NotImplemented]: {
      en: "Not Implemented"
   },
   [statusPrefix + Status.DatabaseError]: {
      en: "Database Error"
   },
   [statusPrefix + Status.NoWebSocketClient]: {
      en: "No Websocket Client"
   },
   [statusPrefix + Status.NoMatchingRecords]: {
      en: "No Records Matched"
   },
   UNSUPPORTED_BROWSER: {
      en:
         "The web browser you are using is not supported. The Toba Platform makes use of WebSockets and Workers."
   }
} as PhraseList;

/**
 * Add entries to `CommonPhrases` to make them visible to the type checker.
 */
export interface CommonPhrases extends Translation {
   ABOUT: string;
   BAD_ROUTE: string;
   CONTINUE: string;
   DISCONNECTED: string;
   DRAG_ONE_FILE_HERE: string;
   DRAG_FILES_HERE: string;
   RETRY: string;
   RETRYING: string;
   SIGN_IN: string;
   SIGN_IN_TO_CONTINUE: string;
   UNSUPPORTED_BROWSER: string;
}
