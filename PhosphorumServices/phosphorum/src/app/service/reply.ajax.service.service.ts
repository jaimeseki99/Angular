import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IReply, IReplyPage } from "../model/model.interfaces";
import { Observable } from "rxjs";


@Injectable()

export class ReplyAjaxService {

    sUrl: string = "http://localhost:8083/reply";

    constructor(
        private oHttpClient: HttpClient
    ) { }

    getOne(id: number): Observable<IReply> {
        return this.oHttpClient.get<IReply>(this.sUrl + "/" + id);
    }

    getPage(size: number | undefined, page: number | undefined, orderField: string, orderDirection: string): Observable<IReplyPage> {
        if (!size) size = 10;
        if (!page) page = 0;
        return this.oHttpClient.get<IReplyPage>(this.sUrl + "?size=" + size + "&page=" + page + "&sort=" + orderField + "," + orderDirection);
    }

    removeOne(id: number | undefined): Observable<number> {
        if (id) {
            return this.oHttpClient.delete<number>(this.sUrl + "/" + id);
        } else {            
            return new Observable<number>();
        }
    }

    createOne(userFormValue: IReply): Observable<IReply> {
        return this.oHttpClient.post<IReply>(this.sUrl, userFormValue);
    }

    updateOne(userFormValue: IReply): Observable<IReply> {
        return this.oHttpClient.put<IReply>(this.sUrl, userFormValue);
    }


}