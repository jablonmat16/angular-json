import { Bindings } from "./bindings";
import { Exchanges } from "./exchanges";
import { Policies } from "./policies";
import { Queues } from "./queues";

export class Json {
    rabbit_version: string;
    parameters: string[];
    policies: Policies[];
    queues: Queues[];
    exchanges: Exchanges[];
    bindings: Bindings[];
}
