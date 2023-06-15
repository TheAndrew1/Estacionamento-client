import axios, { AxiosInstance } from "axios";
import { Modelo } from "@/model/modelo";

export class CondutorClient{
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

    public async cadastrar(modelo : Modelo) : Promise<void> {
        try{
            return (await this.axiosClient.post(`/modelo`, modelo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, modelo : Modelo) : Promise<void> {
        try{
            return (await this.axiosClient.put(`/modelo?id=${id}`, modelo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<void> {
        try{
            return (await this.axiosClient.delete(`/modelo?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}