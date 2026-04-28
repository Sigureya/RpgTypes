import { aO as n, aP as o } from "./eventCommandCodes.es.js";
const p = (a, e = 0) => ({
  code: n,
  indent: e,
  parameters: [a?.facename ?? "", a?.faceIndex ?? 0, a?.background ?? 0, a?.positionType ?? 2, a?.speakerName ?? ""]
}), r = (a) => ({
  facename: a[0],
  faceIndex: a[1],
  background: a[2],
  positionType: a[3],
  speakerName: a[4] ?? ""
}), c = (a) => [a.facename, a.faceIndex, a.background, a.positionType, a.speakerName], m = (a, e = 0) => ({ code: o, indent: e, parameters: [a] });
export {
  m as a,
  r as f,
  p as m,
  c as t
};
