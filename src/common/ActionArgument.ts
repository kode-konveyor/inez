
export type ActionArgument<T> = T extends ((props: infer S) => any) ? S : never;
