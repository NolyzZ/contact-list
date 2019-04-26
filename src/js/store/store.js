const getState = ({ getStore, setStore }) => {
	return {
		store: {
			listContacts: []
		},
		actions: {
			setListContacts: list => {
				var tempStore = getStore();
				tempStore.listContacts = list;
				setStore({ tempStore });
			}
		}
	};
};

export default getState;


