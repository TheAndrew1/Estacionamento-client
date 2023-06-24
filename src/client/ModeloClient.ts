import axios, { AxiosInstance } from "axios";
import { Modelo } from "@/model/modelo";

export class ModeloClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Modelo> {
        try{
            return (await this.axiosClient.get<Modelo>(`/modelo?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Modelo[]> {
        try{
            return (await this.axiosClient.get<Modelo[]>(`/modelo/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Modelo[]> {
        try{
            return (await this.axiosClient.get<Modelo[]>(`/modelo/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(modelo : Modelo) : Promise<string> {
        try{
            return (await this.axiosClient.post<string>(`/modelo`, modelo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, modelo : Modelo) : Promise<string> {
        try{
            return (await this.axiosClient.put<string>(`/modelo?id=${id}`, modelo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<string> {
        try{
            return (await this.axiosClient.delete<string>(`/modelo?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}
export default new ModeloClient()