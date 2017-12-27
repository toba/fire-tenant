/* tslint:disable:no-unused-expression */
import "mocha";
import { expect } from "chai";
import { translate, setLanguage, PhraseList, Translation } from "./localize";

const source1: PhraseList = {
   phrase1: {
      en: "English phrase 1",
      es: "Spanish phrase 1"
   },
   phrase2: {
      en: "English phrase 2",
      es: "Spanish phrase 2"
   },
   phrase3: {
      en: "English phrase 3"
   }
};

// const source2:PhraseList = {
//    phrase4: {
//       en: "English phrase 4",
//       es: "Spanish phrase 4"
//    }
// };

describe("Client Localize", () => {
   let text: Translation;

   before(() => {
      text = translate(source1);
   });

   it("is composable", () => {
      expect(text["phrase1"]).equals(source1.phrase1.en);
   });

   it("can switch languages", () => {
      text = setLanguage("es");
      expect(text["phrase2"]).equals(source1.phrase2.es);
   });

   it("falls back to default language if phrase is not translated", () => {
      text = setLanguage("es");
      expect(text["phrase3"]).equals(source1.phrase3.en);
   });
});
