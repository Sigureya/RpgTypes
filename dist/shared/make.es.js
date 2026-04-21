const a = (d) => d.toString().padStart(3, "0"), e = (d = { id: 0 }) => ({
  name: d.name ?? a(d.id),
  id: d.id,
  expanded: d.expanded ?? !1,
  order: d.order ?? 0,
  parentId: d.parentId ?? 0,
  scrollX: d.scrollX ?? 0,
  scrollY: d.scrollY ?? 0
});
export {
  a,
  e as m
};
