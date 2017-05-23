const normalizeText = text => text.toLowerCase().replace(/\W/g, ' ').replace(/\s+/g, ' ').trim();
const range = n => Array(n).fill(null).map((_, i) => i);

const skipgram = (n, k = 0) => {
  const stackLength = (k + 1) * (n - 1);
  const indices = range(stackLength).filter(i => (i % (k + 1)) === 0);

  return text => {
    const words = normalizeText(text).split(/\s/);
    const { results } = words.reduce(({results, stack}, word) => {
      if (stack.length < stackLength) return { stack: [...stack, word], results };
      return {
        results: [...results, [...indices.map(i => stack[i]), word]],
        stack: [...stack.slice(1), word]
      };
    }, { stack: [], results: [] });

    return results;
  }
};

module.exports = skipgram;
