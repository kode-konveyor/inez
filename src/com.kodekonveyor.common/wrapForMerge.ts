export function wrapForMerge(klass: any): (args: any[]) => any {
  return (args: any[]) => klass.run.apply(klass, args);
}
