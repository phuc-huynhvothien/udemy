import axiosClient from "./axiosClient";
const productApi = {
    getAll(params){
        const url = '/products';
        return axiosClient.get(url,{params : params})
    },
    get(id){
        const url = `/products/${id}`;
    },
    add(data){
        const url = `/products`;
        return axiosClient.post(url,{params : data})
    },
    update(data){
        const url = `/products/${data.id}`;
        return axiosClient.patch(url,{params : data})
    },
    remove(id){
        const url = `/products/${id}`;
        return axiosClient.delete(url)
    }
}
export default productApi;