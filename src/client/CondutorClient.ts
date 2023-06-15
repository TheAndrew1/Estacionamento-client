import axios, { AxiosInstance } from "axios";
import { Condutor } from "@/model/condutor";

export class CondutorClient{
    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: "http://localhost:8080/api/condutor",
            headers: {"Content-type" : "application/json"}
        });
    }

    public async findById(id : number) : Promise<Condutor> {
        try{
            return (await this.axiosClient.get<Condutor>(`?id=${id}`)).data;
        }
        catch(error : any){
            return Promise.reject(error.response);
        }
    }
}