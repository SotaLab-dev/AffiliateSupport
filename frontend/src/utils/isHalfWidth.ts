/**
 * 半角文字かどうかを判定する
 */
export const isHalfWidth = (value: string): boolean => {
  return /^[\x20-\x7E]*$/.test(value);
};
