import sys


def main() -> None:
    data = sys.stdin.buffer.read().split()
    if not data:
        return

    it = iter(data)
    n = int(next(it))
    m = int(next(it))

    # winners_of[j]: bitset of symbols that beat symbol j
    winners_of = [0] * (n + 1)

    # Read lower-triangular matrix rows (1..n), i-th row has i characters.
    # For pair (i, j) with j <= i:
    #   'W' -> i beats j  => add i to winners_of[j]
    #   'L' -> j beats i  => add j to winners_of[i]
    #   'D' -> draw       => nothing to add
    for i in range(1, n + 1):
        row = next(it).decode()
        # Safety: some inputs might have spaces trimmed; ensure length i
        # but per spec it's exactly i characters.
        for j in range(1, i + 1):
            result = row[j - 1]
            if result == 'W':
                winners_of[j] |= 1 << (i - 1)
            elif result == 'L':
                winners_of[i] |= 1 << (j - 1)
            # 'D' implies no winner; ignore

    def popcount(x: int) -> int:
        # Compatibility with older Python versions without int.bit_count()
        try:
            return x.bit_count()  # type: ignore[attr-defined]
        except AttributeError:
            cnt = 0
            while x:
                x &= x - 1
                cnt += 1
            return cnt

    out_lines = []
    for _ in range(m):
        s1 = int(next(it))
        s2 = int(next(it))
        # k = number of symbols that beat both s1 and s2
        k = popcount(winners_of[s1] & winners_of[s2])
        # Count ordered pairs (L, R) where at least one hoof picks
        # a symbol from that winning set: N^2 - (N - k)^2 = k(2N - k)
        out_lines.append(str(k * (2 * n - k)))

    sys.stdout.write("\n".join(out_lines))


if __name__ == "__main__":
    main()

