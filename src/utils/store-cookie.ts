// import Cookies from 'js-cookie';

export const getCookie = (name: string) => {
	if (typeof window !== 'undefined') {
		const data = localStorage.getItem(name);

		return data ? JSON.parse(data) : null;
	}
	return null;
};

export const setStoreCookie = (req: any) => {
	localStorage.removeItem('todolist');
	localStorage.setItem('todolist', JSON.stringify(req));
};
