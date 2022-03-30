/**
 * Inject a seperator between each item in a list
 * @param array List of items
 * @param separator Element to be interleaved between each item
 * @returns
 */
export function interleave(array: any, separator: any) {
  return array.flatMap((el: unknown) => [el, separator]).slice(0, -1);
}
