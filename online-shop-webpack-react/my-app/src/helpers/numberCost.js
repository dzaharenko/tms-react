const numberCost = (number) => {
    new RegExp(/\B(?=(\d{3})+(?!\d))/g);
    return number.toFixed(2);
};

export default numberCost;
