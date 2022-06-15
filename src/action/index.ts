export const petIncrement = (number: number) => ({ type: "PET_INCREASED", payload: number })
export const petDecrement = () => ({ type: "PET_DECREASED" })