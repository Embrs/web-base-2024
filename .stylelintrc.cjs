// https://stylelint.io/
// https://clairechang.tw/2023/08/04/nuxt3/nuxt-v3-stylelint/
module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss'
  ],
  plugins: [
    'stylelint-order'
  ],
  overrides: [
    {
      files: [ '*.scss', '**/*.scss' ], // 指定 .scss 檔
      rules: {
        'scss/no-global-function-names': null, // 關閉此規則
        'scss/dollar-variable-pattern': null,
        'declaration-empty-line-before': null,
      }
    }
  ],
  rules: {
    // 'unit-allowed-list': [ 'em', 'rem', 'deg', 'px', 's', 'vh', 'vw', '%'], // 可使用的單位
    'load-no-partial-leading-underscore': null;
    'selector-id-pattern': null,
    'rule-empty-line-before': null,
    'media-feature-range-notation': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,
    'selector-class-pattern': null,
    'scss/double-slash-comment-empty-line-before': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'scss/at-extend-no-missing-placeholder': null,
    'font-family-no-missing-generic-family-keyword': null,
    'property-no-vendor-prefix': null,
    'no-descending-specificity': null,
    'order/properties-order': [ // 設定排序順序（plugins 必須先定義 stylelint-order）
      'grid-area',
      'min-width',
      'max-width',
      'min-height',
      'max-height',
      'width',
      'height',
      'position',
      'top',
      'bottom',
      'right',
      'left',
      'display',
      'align-items',
      'justify-content',
      'grid-template-columns',
      'grid-template-rows',
      'grid-template-areas',
      'gap',
      'float',
      'clear',
      'overflow',
      'overflow-x',
      'overflow-y',
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      'font-size',
      'font-family',
      'font-weight',
      'text-align',
      'text-justify',
      'text-indent',
      'text-overflow',
      'text-decoration',
      'white-space',
      'color',
      'background',
      'background-position',
      'background-repeat',
      'background-size',
      'background-color',
      'background-clip',
      'border',
      'border-style',
      'border-width',
      'border-color',
      'border-top-style',
      'border-top-width',
      'border-top-color',
      'border-right-style',
      'border-right-width',
      'border-right-color',
      'border-bottom-style',
      'border-bottom-width',
      'border-bottom-color',
      'border-left-style',
      'border-left-width',
      'border-left-color',
      'border-radius',
      'opacity',
      'filter',
      'list-style',
      'outline',
      'visibility',
      'z-index',
      'box-shadow',
      'text-shadow',
      'resize',
      'transition'
    ]
  }
}