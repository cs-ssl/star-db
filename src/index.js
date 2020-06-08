export default class SwapiService {
	_apiBase = 'https://swapi.dev/api';
	async gR(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if(!res.ok){
		throw new Error(`Could Not fetch ${url}` + `, received ${res.status}`)
		}
		return await res.json();
	}
	async getAllPeople(){
		const res  = await this.gR(`/people/`);
		return res.results;
	}
	getPerson(id){
		return this.gR(`/people/${id}/`);
	}
	async getAllPlanets(){
		const res  = await this.gR(`/planets/`);
		return res.results;
	}
	getPlanet(id) {
		return this.gR(`/planets/${id}/`);
	}
	async getAllStarships() {
		const res = await this.gR(`/starships/`);
		return res.results;
	}
	getStarship(id) {
		return this.gR(`/starships/${id}/`);
	}
}