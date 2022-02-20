export const getDates = (date) => JSON.parse(localStorage.getItem(date)) || [];

export function addDates(date, object) {
    const storageDates = getDates(date);
    //Se não existe array metrics no localStorage é criado
    if (!localStorage[date]) {
        localStorage.setItem(date, JSON.stringify([]));
    }
    localStorage.setItem(date, JSON.stringify([...storageDates, object]));
}

export function deleteDate(date, object) {
    localStorage.setItem(date, JSON.stringify([...object]));
}