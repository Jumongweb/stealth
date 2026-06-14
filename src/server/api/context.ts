import { MemoryApiRepository } from "./memory-repository";
import type { ApiRepository } from "./repository";

interface ApiContext {
  repository: ApiRepository;
}

const globalApi = globalThis as typeof globalThis & {
  __stealthApiRepository?: MemoryApiRepository;
};

export function getApiContext(): ApiContext {
  globalApi.__stealthApiRepository ??= new MemoryApiRepository();
  return { repository: globalApi.__stealthApiRepository };
}
