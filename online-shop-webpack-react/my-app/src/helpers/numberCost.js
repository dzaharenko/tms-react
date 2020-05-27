const numberCost = (number = 0) => {
    /*new RegExp(/\B(?=(\d{3})+(?!\d))/g);*/
    return number.toFixed(2);
};

export default numberCost;
