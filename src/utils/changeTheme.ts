/** @format */

function changeTheme(theme: string): void {
    if (theme === 'dark') {
        document.body.setAttribute('lunmine-theme', 'dark');
    } else {
        document.body.removeAttribute('lunmine-theme');
    }
}

export default changeTheme;
