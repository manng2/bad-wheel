const findUnits = (data) => {
  const results = [];
  data.forEach((el, idx) => {
    for (let i = 1; i <= el.percent; i++) {
      results.push(idx);
    }
  })

  return results;
}

module.exports = findUnits;
