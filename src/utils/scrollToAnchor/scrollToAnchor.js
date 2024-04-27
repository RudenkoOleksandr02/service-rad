export const scrollToAnchorForElement = (id) => {
    const hash = window.location.hash;
    if (hash === `#${id}`) {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth'});
        }
    }
}
export const scrollToAnchorForLink = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}