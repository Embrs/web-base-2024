interface Locales {
  [key: string]: string[];
}

export default {
  locales: ['tw', 'en', 'jp'],
  welcome: ['你好', 'welcome', 'こんにちは'],
  placeholderDate: ['請選擇時間', 'Please select a time', '時間を選択してください']
} as Locales;
