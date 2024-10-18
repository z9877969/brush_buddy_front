const observerOptions = {
  threshold: [0, 0.5],
};

export const observeDialogSection = (sectionRef, action) => {
  const observerCb = (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        action();
      }
    });
  };

  const observer = new IntersectionObserver(observerCb, observerOptions);
  observer.observe(sectionRef);
};
