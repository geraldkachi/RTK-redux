const petFavourite = (state = 10, action: any) => {
    switch (action.type) {
        case "PET_INCREASED":
            return state + action.payload / 2;
        case 'PET_DECREASED':
            return state - 1
        default:
            return state;
    }
}

export default petFavourite