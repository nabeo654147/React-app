export const LANGUAGES = [
    'JavaScript',
    'C++',
    'Ruby',
    'Java',
    'PHP',
    'Go'
];

export const getLangages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000)
    })
}