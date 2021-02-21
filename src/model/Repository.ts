export abstract class Repository<T> {
    push: (data: T)  => void;
    get: (key: any) => T;
}