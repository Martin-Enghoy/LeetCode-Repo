function lengthOfLastWordThree(s: string): number {
  const arr = s.trim().split(/\s+/);
  return arr.pop()!.length;
}
