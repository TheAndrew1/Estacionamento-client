import axios, { AxiosInstance } from "axios";
import { Marca } from "@/model/marca";

export class MarcaClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Marca> {
        try{
            return (await this.axiosClient.get<Marca>(`/marca?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findByNome(nome : string) : Promise<Marca> {
        try{
            return (await this.axiosClient.get<Marca>(`/marca?name=${nome}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAll() : Promise<Marca[]> {
        try{
            return (await this.axiosClient.get<Marca[]>(`/marca/lista`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async findAtivo() : Promise<Marca[]> {
        try{
            return (await this.axiosClient.get<Marca[]>(`/marca/ativos`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async cadastrar(marca : Marca) : Promise<string> {
        try{
            return (await this.axiosClient.post<string>(`/marca`, marca)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async editar(id : number, marca : Marca) : Promise<string> {
        try{
            return (await this.axiosClient.put<string>(`/marca?id=${id}`, marca)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }

    public async excluir(id : number) : Promise<string> {
        try{
            return (await this.axiosClient.delete<string>(`/marca?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}
export default new MarcaClient();