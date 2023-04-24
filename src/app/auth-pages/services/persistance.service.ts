import { Injectable } from "@angular/core";

@Injectable()
export class PersistanceService {

    set(key: string, data: any) {
        try {
            localStorage.setItem(key, JSON.stringify(data))
        }
        catch (error) {
            console.error('Cannot save to local storege', error);
        }
    }

    remove(key: string) {
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            console.error('Cannot remove key from local storage', error);
        }
    }

    get(key: string): any {
        try {
            let data = localStorage.getItem(key);
            if (data == null) return null;
            return JSON.parse(data);
        }
        catch (error) {
            console.error('Cannot get data from local storage', error);
            return null
        };
    }
}