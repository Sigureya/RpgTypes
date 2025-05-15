export interface EventCommandLike2<
  Code extends number,
  Param extends unknown[] = unknown[]
> {
  code: Code;
  indent: number;
  parameters: Param;
}
