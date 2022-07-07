import { useQuery } from "react-query";
import { api } from "../services/api";

async function getPeoples() {
	const { data } = await api.get("peoples");

	const peoples = data.map((people) => {
		return {
			id: people.id,
			name: people.name,
			birthday: people.birthday,
			gender: people.gender,
			address: people.address,
			phone: people.phone,
			marital_status: people.marital_status,
			rg: people.rg,
			cpf: people.cpf,
			church: people.church,
		};
	});

	return { peoples };
}

export function usePeoples() {
	return useQuery(["peoples"], () => getPeoples());
}
