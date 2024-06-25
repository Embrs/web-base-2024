import { useReCaptcha } from 'vue-recaptcha-v3';
export const MixinGoogleRecaptcha = () => {
  // initialize a instance
  const recaptchaInstance = useReCaptcha();

  const UseRecaptcha = async (): Promise<string> => {
    await recaptchaInstance?.recaptchaLoaded();
    // get the token, a custom action could be added as argument to the method 'submit' 為你自己定義這次行為是哪種
    // https://developers.google.com/recaptcha/docs/v3?hl=zh-tw
    const token = await recaptchaInstance?.executeRecaptcha('submit');
    return token || '';
  };
  return {
    UseRecaptcha
  };
};
