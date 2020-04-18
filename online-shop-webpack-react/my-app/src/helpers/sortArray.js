const sortArray = (array, sortDirection) => {
    const newArray = [...array];
    if (sortDirection === 'Desc') {
        return newArray.sort((a, b) => {
            if (a.price.value > b.price.value) return -1;
            else return 1;
        });
    }

    return newArray.sort((a, b) => {
        if (a.price.value > b.price.value) return 1;
        else return -1;
    });
}

export default sortArray;
