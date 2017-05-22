const normalizeText = text => text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim()

const skipgram = (n, k = 0) => {
  const stackLength = n - 1  + (n - 1) * k;
  const indices = Array(stackLength)
    .fill(null)
    .map((_, i) => i)
    .filter(i => (i % (k + 1)) === 0);

  return text => {
    const words = normalizeText(text).split(/\s/);
    const { results } = words.reduce(({results, stack}, word) => {
      if (stack.length < stackLength) return { stack: [...stack, word], results };
      return {
        results: [...results, [...indices.map(i => stack[i]), word]],
        stack: [...stack, word].slice(1)
      };
    }, { stack: [], results: [] });

    return results;
  }
};

module.exports = skipgram;
