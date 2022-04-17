import { Definition } from "./definition";

export class Policies {
    vhost: string;
    name: string;
    pattern: string;
    'apply-to': string;
    definition: Definition;
    priority: number;
}
