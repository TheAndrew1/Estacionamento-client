import axios, { AxiosInstance } from "axios";
import { Movimentacao } from "@/model/movimentacao";

export class CondutorClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Movimentacao> {
        try{
            return (await this.axiosClient.get<Movimentacao>(`/movimentacao?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Movimentacao[]> {
        try{
            return (await this.axiosClient.get<Movimentacao[]>(`/movimentacao/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Movimentacao[]> {
        try{
            return (await this.axiosClient.get<Movimentacao[]>(`/movimentacao/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(movimentacao : Movimentacao) : Promise<void> {
        try{
            return (await this.axiosClient.post(`/movimentacao`, movimentacao)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, movimentacao : Movimentacao) : Promise<void> {
        try{
            return (await this.axiosClient.put(`/movimentacao?id=${id}`, movimentacao)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<void> {
        try{
            return (await this.axiosClient.delete(`/movimentacao?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}