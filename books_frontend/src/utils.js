import store from './store/index';

export const bookExists = (isbn) => {
    let exists = false;

    store.getState().books.forEach((element) => {
        if (isbn === element.isbn) {
            exists = true;
        }
    })

    return exists;
}