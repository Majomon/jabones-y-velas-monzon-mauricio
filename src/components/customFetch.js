export const customFetch = (product) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(product)
        }, 2000);
    })
}