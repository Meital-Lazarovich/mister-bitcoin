export default {
    loadFromStorage,
    saveToStorage
}

function loadFromStorage(key) {
    const json = localStorage.getItem(key);
    const value = JSON.parse(json)
    return value;
}

function saveToStorage(key, value) {
    const json = JSON.stringify(value);
    localStorage.setItem(key, json)
}