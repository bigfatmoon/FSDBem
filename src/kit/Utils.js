class RussianLangUtils {
  static selectWordByCount(count, variants){
    const residue =count % 10;
    if (count === 0)
      return variants[0];
    if (residue === 1 && count !== 11)
      return variants[1];
    if (residue > 1 &&  residue < 5 && ![12, 13, 14].includes(count))
      return variants[2];
    return variants[3];
  }
}

export default RussianLangUtils;