import { createStore } from 'vuex'

const store = createStore({
   state() {
      return {
         hiragana: {
            vowels: {
               あ: "a",
               い: "i",
               う: "u",
               え: "e",
               お: "o",
            },
            k: {
               か: "ka",
               き: "ki",
               く: "ku",
               け: "ke",
               こ: "ko",
            },
            s: {
               さ: "sa",
               し: "shi",
               す: "su",
               せ: "se",
               そ: "so",
            },
            t: {
               た: "ta",
               ち: "chi",
               つ: "tsu",
               て: "te",
               と: "to",
            },
            n: {
               な: "na",
               に: "ni",
               ぬ: "nu",
               ね: "ne",
               の: "no",
            },
            h: {
               は: "ha",
               ひ: "hi",
               ふ: "fu",
               へ: "he",
               ほ: "ho",
            },
            m: {
               ま: "ma",
               み: "mi",
               む: "mu",
               め: "me",
               も: "mo",
            },
            y: {
               や: "ya",
               ゆ: "yu",
               よ: "yo",
            },
            r: {
               ら: "ra",
               り: "ri",
               る: "ru",
               れ: "re",
               ろ: "ro",
            },
            w: {
               わ: "wa",
               を: "wo",
            },
         },
         katakana: {
            vowels: {
               ア: "a",
               イ: "i",
               ウ: "u",
               エ: "e",
               オ: "o",
            },
            k: {
               カ: "ka",
               キ: "ki",
               ク: "ku",
               ケ: "ke",
               コ: "ko",
            },
            s: {
               サ: "sa",
               シ: "shi",
               ス: "su",
               セ: "se",
               ソ: "so",
            },
            t: {
               タ: "ta",
               チ: "tttchi",
               ツ: "tsu",
               テ: "te",
               ト: "to",
            },
            n: {
               ナ: "na",
               ニ: "ni",
               ヌ: "nu",
               ネ: "ne",
               ノ: "no",
            },
            h: {
               ハ: "ha",
               ヒ: "hi",
               フ: "hhhfu",
               ヘ: "he",
               ホ: "ho",
            },
            m: {
               マ: "ma",
               ミ: "mi",
               ム: "mu",
               メ: "me",
               モ: "mo",
            },
            y: {
               ヤ: "ya",
               ユ: "yu",
               ヨ: "yo",
            },
            r: {
               ラ: "ra",
               リ: "ri",
               ル: "ru",
               レ: "re",
               ロ: "ro",
            },
            w: {
               ワ: "wa",
               ヲ: "wo",
            },
         },
         config: {
            hiragana: true,
            katakana: false,
            vowels: true,
            k: false,
            s: false,
            t: false,
            n: false,
            h: false,
            m: false,
            y: false,
            r: false,
            w: false,
         },
      };
   },
   getters: {
      hiragana(state) {
         return state.hiragana;
      },
      katakana(state) {
         return state.katakana;
      },
      config(state) {
         return state.config;
      },
      whiteList(state) {
         const enabled = Object.keys(state.config).filter(
            (key) => state.config[key] && key !== 'hiragana' && key !== 'katakana'
         );
         return enabled.reduce((prev, key) => {
            if (state.config.hiragana) {
               prev += Object.keys(state.hiragana[key]).join("");
            }
            if (state.config.katakana) {
               prev += Object.keys(state.katakana[key]).join("");
            }
            return prev;
         }, "");
      },
   },
   mutations: {
      changeConfig(state, payload) {
         state.config[payload[0]] = payload[1];
      }
   },
   actions: {
      changeConfig({ commit }, payload) {
         commit("changeConfig", payload);
      },
   },
});

export default store
