import Axios from "axios";

export class RestDataSource {

    constructor(base_url) {
        this.BASE_URL = base_url;
    }

    GetAll(callback) {
        this.SendRequest("get", this.BASE_URL, callback);
    }

    async GetOne(id, callback) {
        this.SendRequest("get", `${this.BASE_URL}/${id}`, callback);
    }

    async Store(data, callback) {
        this.SendRequest("post", this.BASE_URL, callback, data)
    }

    async Update(data, callback) {
        this.SendRequest("put", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async Delete(data, callback) {
        this.SendRequest("delete", `${this.BASE_URL}/${data.id}`, callback, data);
    }

    async SendRequest(method, url, callback, data) {
        callback((await Axios.request({
            method: method,
            url: url,
            data: data
        })).data);
    }

}