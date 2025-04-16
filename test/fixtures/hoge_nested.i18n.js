"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoge = void 0;
var bar_i18n_ts_1 = require("./bar.i18n.ts");
var foo_i18n_ts_1 = require("./foo.i18n.ts");
/**
 Comment for hoge.
 */
exports.hoge = {
    foo: foo_i18n_ts_1.foo,
    bar: bar_i18n_ts_1.bar,
    /**
     Favorite food and drink.
     */
    favorite: {
        food: {
            en: 'pizza',
            ja: 'ピザ',
        },
        drink: {
            alcoholic: {
                en: 'whiskey',
                ja: 'ウイスキー',
            },
            nonAlcoholic: {
                en: 'water',
                ja: '水',
            },
        },
    },
    nested: {
        nickname: bar_i18n_ts_1.bar.nickname,
        moreDeeplyNested: {
            foo: foo_i18n_ts_1.foo,
        },
    },
    nested2: {
        nickname: bar_i18n_ts_1.bar.nickname,
        moreDeeplyNested: {
            foo: foo_i18n_ts_1.foo,
            wowser: {
                en: 'The nested property should be completely erased becuase it contains nothing but import references, but nested2 should remain because I, wowser, exist',
                ja: 'なんか、俺いるぞ',
            },
        },
    },
};
