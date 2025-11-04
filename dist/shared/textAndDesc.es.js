const t = (e) => ({ ...e.text ? { text: e.text } : {}, ...e.desc ? { desc: e.desc } : {} });
export {
  t
};
