import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/condutor";

export class CondutorClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Condutor> {
        try{
            return (await this.axiosClient.get<Condutor>(`/condutor?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Condutor[]> {
        try{
            return (await this.axiosClient.get<Condutor[]>(`/condutor/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Condutor[]> {
        try{
            return (await this.axiosClient.get<Condutor[]>(`/condutor/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(condutor : Condutor) : Promise<string> {
        try{
            return (await this.axiosClient.post<string>(`/condutor`, condutor)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, condutor : Condutor) : Promise<string> {
        try{
            return (await this.axiosClient.put<string>(`/condutor?id=${id}`, condutor)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<string> {
        try{
            return (await this.axiosClient.delete<string>(`/condutor?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}
export default new CondutorClient();