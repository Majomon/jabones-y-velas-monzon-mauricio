export const customFetch = (product) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(product)
        }, 1000);
    })
}