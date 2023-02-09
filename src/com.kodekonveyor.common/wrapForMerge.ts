export function wrapForMerge<P1, T>(fun: (p1: P1) => T): (args: [P1]) => T;
export function wrapForMerge<P1, P2, T>(fun: (p1: P1, p2: P2) => T): (args: [P1, P2]) => T;
export function wrapForMerge<P1, P2, P3, T>(fun: (p1: P1, p2: P2, p3: P3) => T): (args: [P1, P2, P3]) => T;
export function wrapForMerge<P1, P2, P3, P4, T>(fun: (p1: P1, p2?: P2, p3?: P3, p4?: P4) => T): (args: [P1, P2?, P3?, P4?]) => T {
  return (args: [any, any?, any?, any?]) => fun(...args);
}
