import axios, { AxiosInstance } from "axios";
import { Veiculo } from "@/model/veiculo";

export class VeiculoClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Veiculo> {
        try{
            return (await this.axiosClient.get<Veiculo>(`/veiculo?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findByPlaca(placa : string) : Promise<Veiculo> {
        try{
            return (await this.axiosClient.get<Veiculo>(`/veiculo?placa=${placa}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Veiculo[]> {
        try{
            return (await this.axiosClient.get<Veiculo[]>(`/veiculo/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Veiculo[]> {
        try{
            return (await this.axiosClient.get<Veiculo[]>(`/veiculo/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(veiculo : Veiculo) : Promise<string> {
        try{
            return (await this.axiosClient.post<string>(`/veiculo`, veiculo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, veiculo : Veiculo) : Promise<string> {
        try{
            return (await this.axiosClient.put<string>(`/veiculo?id=${id}`, veiculo)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<string> {
        try{
            return (await this.axiosClient.delete<string>(`/veiculo?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}
export default new VeiculoClient();