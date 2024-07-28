export const getDefaultFieldsState = () => {
    const isLocalStorageHasData = Boolean(localStorage.getItem('reviews'));

    if (isLocalStorageHasData) {
      const data = localStorage.getItem('reviews');
      return JSON.parse(data);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
}

