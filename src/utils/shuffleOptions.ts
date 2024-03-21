export const shuffleOptions = (options: string[]): string[] => {
  let currentIndex = options.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [options[currentIndex], options[randomIndex]] = [
      options[randomIndex],
      options[currentIndex],
    ];
  }

  return options;
};
