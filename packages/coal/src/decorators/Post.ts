import "reflect-metadata";
import { RoutePathMetadataKey, MethodTypeMetadataKey } from "./constants";

export const Post = (path: string): MethodDecorator => {
    return (target: Object, key: string | symbol) => {
        const existing =
            Reflect.getMetadata(RoutePathMetadataKey, target, key) || {};
        existing.post = path;

        Reflect.defineMetadata(
            RoutePathMetadataKey,
            existing,
            Reflect.getPrototypeOf(target)!,
            key
        );
        Reflect.defineMetadata(
            MethodTypeMetadataKey,
            "route",
            Reflect.getPrototypeOf(target)!,
            key
        );
    };
};
