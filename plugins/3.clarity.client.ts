/* eslint-disable */ 
//https://clarity.microsoft.com/
export default defineNuxtPlugin(({ $config }) => {
  const { clarityOpen, clarityCode } = $config.public;
  if (clarityOpen !== "T") return;
  if (typeof window !== "undefined") {
    (function (c:any, l, a:any, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      // @ts-ignore
      t = l.createElement(r);
      // @ts-ignore
      t.async = 1;
      // @ts-ignore
      t.src = "https://www.clarity.ms/tag/" + i;
      // @ts-ignore
      y = l.getElementsByTagName(r)[0];
      // @ts-ignore
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", clarityCode);
  }
});
